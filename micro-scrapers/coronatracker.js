const axios = require("axios");
const globals = require("../globals");
const utilities = require("../utilities");

const API_ROUTE = "http://api.coronatracker.com/v2/analytics/country";
const keyMapping = {
  country: "countryName",
  cases: "confirmed",
  deaths: "deaths",
  recovered: "recovered"
};

exports.fetchData = () => {
  return axios.get(`${API_ROUTE}`).then(data => {
    const allCountries = data.data;

    return utilities.renameCountryLabels(
      allCountries.map(country => {
        return utilities.convertAllKeysToString(
          utilities.remapKeys(country, keyMapping)
        );
      })
    );
  });
};
