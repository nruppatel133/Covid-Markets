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