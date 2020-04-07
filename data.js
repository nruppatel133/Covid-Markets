const covidSchema = {
    headerRow: 0,
    stateColumn: 0,
    countryColumn: 1,
    latColumn: 2,
    lonColumn: 3,
    dateStartColumn: 4,
  };

  const covidDataBaseURL = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series';

const confirmedPalette = ['#FF9F40', '#703600', '#D66700', '#FF800A', '#A34E00'];
const recoveredPalette = ['#4BC0C0', '#1D5353', '#379E9E', '#4BC0C0', '#2A7878'];
const deathsPalette = ['#FF6384', '#93001D', '#F90031', '#FF2D57', '#C60027'];

const covidDataTypes = {
    confirmed: {
      key: 'confirmed',
      title: 'Confirmed',
      dataSourceUrl: `${covidDataBaseURL}/time_series_covid19_confirmed_global.csv`,
      borderColor: confirmedPalette,
      alertClass: 'alert-warning',
      badgeClass: 'badge-warning',
    },
    recovered: {
      key: 'recovered',
      title: 'Recovered',
      dataSourceUrl: `${covidDataBaseURL}/time_series_covid19_recovered_global.csv`,
      borderColor: recoveredPalette,
      alertClass: 'alert-success',
      badgeClass: 'badge-success',
    },
    deaths: {
      key: 'deaths',
      title: 'Deaths',
      dataSourceUrl: `${covidDataBaseURL}/time_series_covid19_deaths_global.csv`,
      borderColor: deathsPalette,
      alertClass: 'alert-danger',
      badgeClass: 'badge-danger',
    },
  };


const covidCountries = {
    all: {
      key: 'Global',
      title: 'Global',
      index: -1,
    }
  };
  
  const covidSorts = {
    country: {
      key: 'country',
    },
    confirmed: {
      key: 'confirmed',
      dataKey: covidDataTypes.confirmed.key,
    },
    recovered: {
      key: 'recovered',
      dataKey: covidDataTypes.recovered.key,
    },
    deaths: {
      key: 'deaths',
      dataKey: covidDataTypes.deaths.key,
    },
    mortality: {
      key: 'mortality',
    },
  };


const covidSortDirections = {
    asc: {
      key: 'asc',
    },
    desc: {
      key: 'desc',
    },
  };

  
const covidFilters = {
    selectedTypes: {
      key: 'selectedTypes',
      defaultValue: Object.keys(covidDataTypes),
    },
    groupByCountry: {
      key: 'groupByCountry',
      defaultValue: true,
    },
    selectedRegions: {
      key: 'selectedRegions',
      defaultValue: [covidCountries.all.key]
    },
    useLogScale: {
      key: 'useLogScale',
      defaultValue: false,
    },
    countrySearchQuery: {
      key: 'countrySearchQuery',
      defaultValue: '',
    },
    dataSort: {
      key: 'dataSort',
      defaultValue: covidSorts.confirmed.key,
    },
    dataSortDirection: {
      key: 'dataSortDirection',
      defaultValue: covidSortDirections.desc.key,
    },
  };
  
  function loadCovidData() {
    const defaultDataContainer = {
      labels: [],
      ticks: {},
    };

    return Promise
    .all(Object.values(covidDataTypes).map(
      dataType => fetch(dataType.dataSourceUrl)
    ))
    .then(responses => Promise.all(
      responses.map(response => response.text())
    ))
    .then(dataTypesTicks => {
      return dataTypesTicks.reduce(
        (dataContainer, dataTypeTicksCSV, dataTypeIndex) => {
          const dataType = Object.keys(covidDataTypes)[dataTypeIndex];
          const dataTypeTicks = Papa.parse(dataTypeTicksCSV).data;
          dataContainer.labels = dataTypeTicks.shift();
          dataContainer.ticks[dataType] = dataTypeTicks
            .filter(regionTicks => {
              return regionTicks.length === dataContainer.labels.length;
            })
            .map(regionTicks => {
              return regionTicks.map((regionTick, tickIndex) => {
                if (tickIndex < covidSchema.dateStartColumn) {
                  return regionTick;
                }
                if (!regionTick) {
                  return 0;
                }
                return parseInt(regionTick, 10);
              });
            })
            .sort((regionTicksA, regionTicksB) => {
              const regionNameA = getRegionKey(regionTicksA);
              const regionNameB = getRegionKey(regionTicksB);
              if (regionNameA > regionNameB) {
                return 1;
              } else if (regionNameA < regionNameB) {
                return -1;
              }
              return 0;
            });
          return dataContainer;
        },
        defaultDataContainer
      );
    });
}


function getRegionKey(regionTicks) {
    if (!regionTicks || !regionTicks.length) {
      return null;
    }
    const country = regionTicks[covidSchema.countryColumn];
    const state = regionTicks[covidSchema.stateColumn];
    return state ? `${country} - ${state}` : `${country}`;
  }
  
  function getRegionIndexByKey(covidData, dataTypeKey, regionKey) {
    return covidData.ticks[dataTypeKey].findIndex(
      regionTicks => getRegionKey(regionTicks) === regionKey
    );
  }
  
  function getRegionByKey(covidData, dataTypeKey, regionKey) {
    const regionIndex = getRegionIndexByKey(covidData, dataTypeKey, regionKey);
    return covidData.ticks[dataTypeKey][regionIndex];
  }
  
  function getGlobalTicks(covidData, dataTypeKey) {
    const totalTicks = covidData.ticks[dataTypeKey][0].length;
    const globalTicks = new Array(totalTicks).fill(0);
    globalTicks[covidSchema.stateColumn] = '';
    globalTicks[covidSchema.countryColumn] = covidCountries.all.title;
    globalTicks[covidSchema.latColumn] = '';
    globalTicks[covidSchema.lonColumn] = '';
    covidData.ticks[dataTypeKey].forEach(regionTicks => {
      regionTicks.forEach((regionTick, tickIndex) => {
        if (tickIndex < covidSchema.dateStartColumn) {
          return;
        }
        globalTicks[tickIndex] += regionTick;
      });
    });
    return globalTicks;
  }


function getTotalCount(covidData, dataTypeKey, regionKeys) {
    if (regionKeys.includes(covidCountries.all.key)) {
      const globalTicks = getGlobalTicks(covidData, dataTypeKey);
      return globalTicks[globalTicks.length - 1];
    }
    return regionKeys.reduce((total, regionKey) => {
      const regionTicks = getRegionByKey(covidData, dataTypeKey, regionKey);
      if (!regionTicks) {
        return total;
      }
      total += regionTicks[regionTicks.length - 1];
      return total;
    }, 0);
  }
  
  function searchRegionTicks(covidData, dataTypeKey, regionKey) {
    if (!regionKey) {
      return null;
    }
    const regionsTicks = covidData.ticks[dataTypeKey];
    return regionsTicks.find((regionTicks) => getRegionKey(regionTicks) === regionKey);
  }
  