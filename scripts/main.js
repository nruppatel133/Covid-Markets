let lastRetrievedData;
let lastProvinceRetrievedData;
let lastProvinceCountry;
let interval;
let intervalTime = 60 * 1000;
let selectedCountryId;
let selectedProvinceId;
let canada,
  uk,
  malaysia,
  singapore,
  australia,
  brazil,
  spain,
  russia,
  usa,
  france,
  mexico,
  india;
var selectedText;
var sumacasos = 0;

function getData() {
  $.get({
    url: "https://corona.lmao.ninja/v2/countries",
    cache: false
  })
    .done(function (data, statusText, xhr) {
      console.log(data);
      suma = 0;
      data.forEach(function(a){
        sumacasos += a.cases;
      })
      
      if (lastRetrievedData) {
        selectedCountryId = $("#select-country").val();
      }
      if (lastProvinceRetrievedData) {
        selectedProvinceId = $("#select-province").val();
      }
      $("#select-country").empty();
      jQuery.each(data, function (i, val) {
        $("#select-country").append(
          $("<option/>", {
            value: i,
            text: data[i].country
          })
        );
        if (data[i].country == "Canada") {
          canada = i;
        } else if (data[i].country == "UK") {
          uk = i;
        } else if (data[i].country == "Mexico") {
          mexico = i;
        } else if (data[i].country == "Singapore") {
          singapore = i;
        } else if (data[i].country == "France") {
          france = i;
        } else if (data[i].country == "Brazil") {
          brazil = i;
        } else if (data[i].country == "Spain") {
          spain = i;
        } else if (data[i].country == "Russia") {
          russia = i;
        } else if (data[i].country == "USA") {
          usa = i;
        } else if (data[i].country == "India") {
          india = i;
        }
        if (!lastRetrievedData) {
          selectedCountryId = canada;
        }
      });

      $("#select-country").val(selectedCountryId);
      lastRetrievedData = data;
      showCountry();

      $("#last-updated span").text("Updated: " + new Date().toLocaleString());
    })
    .fail(function (xhr, statusText, error) {});
}

function getProvinceData(selectedCountryText) {
  let filteredData = "";

  if (selectedCountryText === "India") {
    $.get({
      url: "https://api.covidindiatracker.com/state_data.json",
      cache: false
    })
      .done(function (data, statusText, xhr) {
        filteredData = data;
        console.log(filteredData);
        let countKey = Object.keys(filteredData).length;
        console.log(countKey);
        if (lastProvinceRetrievedData) {
          selectedProvinceId = $("#select-province").val();
        }
        $("#select-province").empty();

        jQuery.each(filteredData, function (i, val) {
          if (filteredData[i].state != null) {
            $("#select-province").append(
              $("<option/>", {
                value: i,
                text: filteredData[i].state
              })
            );
          } else if (countKey > 1) {
          } else {
            $("#select-province").append(
              $("<option/>", {
                value: "",
                text: "No Province Data Available"
              })
            );
          }
        });
        $("#select-province").val(selectedProvinceId);
        lastProvinceCountry = "India";
        lastProvinceRetrievedData = filteredData;
      })
      .fail(function (xhr, statusText, error) {});
  } else {
    $.get({
      url: "https://disease.sh/v2/jhucsse",
      cache: false
    })
      .done(function (data, statusText, xhr) {
        filteredData = data.filter(
          country => country.country == selectedCountryText
        );
        console.log(filteredData);
        let countKey = Object.keys(filteredData).length;
        console.log(countKey);
        if (lastProvinceRetrievedData) {
          selectedProvinceId = $("#select-province").val();
        }
        $("#select-province").empty();

        jQuery.each(filteredData, function (i, val) {
          if (filteredData[i].province != null) {
            $("#select-province").append(
              $("<option/>", {
                value: i,
                text: filteredData[i].province
              })
            );
          } else if (countKey > 1) {
          } else {
            $("#select-province").append(
              $("<option/>", {
                value: "",
                text: "No Province Data Available"
              })
            );
          }
        });
        $("#select-province").val(selectedProvinceId);
        lastProvinceCountry = selectedCountryText;
        lastProvinceRetrievedData = filteredData;
      })
      .fail(function (xhr, statusText, error) {});
  }
}

function showCountry(selectedCountry) {
  let id;
  if (selectedCountry) {
    if (selectedCountry == "canada") {
      id = canada;
      selectedText = "Canada";
    } else if (selectedCountry == "uk") {
      id = uk;
      selectedText = "United Kingdom";
    } else if (selectedCountry == "france") {
      id = france;
      selectedText = "France";
    } else if (selectedCountry == "singapore") {
      id = singapore;
      selectedText = "Singapore";
    } else if (selectedCountry == "mexico") {
      id = mexico;
      selectedText = "Mexico";
    } else if (selectedCountry == "brazil") {
      id = brazil;
      selectedText = "Brazil";
    } else if (selectedCountry == "spain") {
      id = spain;
      selectedText = "Spain";
    } else if (selectedCountry == "russia") {
      id = russia;
      selectedText = "Russia";
    } else if (selectedCountry == "usa") {
      id = usa;
      selectedText = "US";
    } else if (selectedCountry == "india") {
      id = india;
      selectedText = "India";
    }
  } else {
    id = $("#select-country").val();

    if ($("#select-country option:selected").html() == "Canada") {
      selectedText = "Canada";
    } else if ($("#select-country option:selected").html() == "UK") {
      selectedText = "United Kingdom";
    } else if ($("#select-country option:selected").html() == "USA") {
      selectedText = "US";
    } else if ($("#select-country option:selected").html() == "UAE") {
      selectedText = "United Arab Emirates";
    } else if ($("#select-country option:selected").html() == "Malaysia") {
      selectedText = "Malaysia";
    } else if ($("#select-country option:selected").html() == "Singapore") {
      selectedText = "Singapore";
    } else if ($("#select-country option:selected").html() == "Australia") {
      selectedText = "Australia";
    } else {
      selectedText = $("#select-country option:selected").html();
    }
  }
  console.log(selectedText);
  getProvinceData(selectedText);

  let percentage_casses_today =
    (lastRetrievedData[id].todayCases / lastRetrievedData[id].cases) * 100;

  let percentage_casses =
    (lastRetrievedData[id].cases / lastRetrievedData[id].population) * 100;

  let percentage_tests =
    (lastRetrievedData[id].tests / lastRetrievedData[id].population) * 100;

  let percentage_death =
    (lastRetrievedData[id].deaths / lastRetrievedData[id].cases) * 100;

  let percentage_death_today =
    (lastRetrievedData[id].todayDeaths / lastRetrievedData[id].deaths) * 100;

  let percentage_recovered =
    (lastRetrievedData[id].recovered / lastRetrievedData[id].cases) * 100;

  let percentage_active =
    (lastRetrievedData[id].active / lastRetrievedData[id].cases) * 100;

  let percentage_critical =
    (lastRetrievedData[id].critical / lastRetrievedData[id].cases) * 100;

    $("#select-country").val(id);
    $("#cases").text(lastRetrievedData[id].cases.toLocaleString());
    //$("#cases").append("<code> " + percentage_casses.toFixed(2) + "% </code>");
    $("#cases-today").text(lastRetrievedData[id].todayCases.toLocaleString());
    $("#cases-today").append(
      "<code> " + percentage_casses_today.toFixed(2) + "% </code>"
    );
    $("#deaths").text(lastRetrievedData[id].deaths.toLocaleString());
    $("#deaths").append("<code> " + percentage_death.toFixed(2) + "% </code>");
    $("#deaths-today").text(lastRetrievedData[id].todayDeaths.toLocaleString());
    $("#deaths-today").append(
      "<code> " + percentage_death_today.toFixed(2) + "% </code>"
    );
    $("#active").text(lastRetrievedData[id].active.toLocaleString());
    $("#active").append("<code> " + percentage_active.toFixed(2) + "% </code>");
    $("#recovered").text(lastRetrievedData[id].recovered.toLocaleString());
    $("#recovered").append(
      "<code> " + percentage_recovered.toFixed(2) + "% </code>"
    );
    $("#critical").text(lastRetrievedData[id].critical.toLocaleString());
    $("#critical").append(
      "<code> " + percentage_critical.toFixed(2) + "% </code>"
    );
    $("#tests").text(lastRetrievedData[id].tests.toLocaleString());
    $("#tests").append("<code> " + percentage_tests.toFixed(2) + "% </code>");
    $("#population").text(lastRetrievedData[id].population.toLocaleString());
    //here
    var x = 7789846765;
    var population = lastRetrievedData[id].population;
    var worldpop = parseFloat(x);
    var final = population * 100;
    var result = final/worldpop;
    $('#population').append( '<code> ' + result.toFixed(2) + '% </code>');
    //sumacasos
    var casosnacional = lastRetrievedData[id].cases;
    var finalcase = casosnacional * 100;
    var finalcases = finalcase/sumacasos;
    $('#cases').append( '<code> ' + finalcases.toFixed(2) + '% </code>');
  }
  

function showProvince() {
  let id;
  let active;
  let recovered;
  id = $("#select-province").val();

  if (lastProvinceCountry == "India") {
    var casosnacional = lastProvinceRetrievedData[id].confirmed
    var finalcase = casosnacional * 100;
    var finalcases = finalcase/sumacasos;

    $('#cases').append( '<code> ' + finalcases.toFixed(2) + '% </code>');
    $("#select-province").val(id);
    $("#cases").text(lastProvinceRetrievedData[id].confirmed.toLocaleString());
    $("#cases-today").text("N/A");
    $("#deaths").text(lastProvinceRetrievedData[id].deaths.toLocaleString());
    $("#deaths-today").text("N/A");
    $("#active").text(lastProvinceRetrievedData[id].active.toLocaleString());
    $("#recovered").text(
      lastProvinceRetrievedData[id].recovered.toLocaleString()
    );
    $("#critical").text("N/A");
  } else {
    if (
      lastProvinceRetrievedData[id].country == "US" ||
      lastProvinceRetrievedData[id].country == "Canada"
    ) {
      active = "N/A";
    } else if (
      lastProvinceRetrievedData[id].stats.confirmed >
      lastProvinceRetrievedData[id].stats.recovered
    ) {
      active =
        lastProvinceRetrievedData[id].stats.confirmed -
        lastProvinceRetrievedData[id].stats.deaths -
        lastProvinceRetrievedData[id].stats.recovered;
    } else {
      active = "N/A";
    }
    if (lastProvinceRetrievedData[id].stats.recovered > 0) {
      recovered = lastProvinceRetrievedData[id].stats.recovered;
    } else {
      recovered = "N/A";
    }
    $("#select-province").val(id);
    $("#cases").text(
      lastProvinceRetrievedData[id].stats.confirmed.toLocaleString()
    );
    $("#cases-today").text("N/A");
    $("#deaths").text(
      lastProvinceRetrievedData[id].stats.deaths.toLocaleString()
    );
    $("#deaths-today").text("N/A");
    $("#active").text(active.toLocaleString());
    $("#recovered").text(recovered.toLocaleString());
    $("#critical").text("N/A");
    var casosnacional = lastProvinceRetrievedData[id].stats.confirmed
    var finalcase = casosnacional * 100;
    var finalcases = finalcase/sumacasos;

    $('#cases').append( '<code> ' + finalcases.toFixed(2) + '% </code>');
  }
}

function setupInterval() {
  interval = setInterval(function () {
    getData();
    getProvinceData();
    showProvince();
  }, intervalTime);
}

function refresh() {
  clearInterval(interval);
  getData();
  getProvinceData();
  setupInterval();
}

$(document).ready(function () {
  getData();
  setupInterval();
});