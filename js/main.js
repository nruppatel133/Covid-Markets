let lastRetrievedData;
let lastProvinceRetrievedData;
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

function getData() {
  $.getJSON("js/countries.json", function () {})
    .done(function (data) {
      // console.log("second success");
      console.log(data);
      $("#select-country").empty();
      jQuery.each(data, function (i, val) {
        $("#select-country").append(
          $("<option/>", {
            value: i,
            text: data[i].countryName
          })
        );
        if (data[i].countryName == "Canada") {
          canada = i;
        } else if (data[i].countryName == "United Kingdom") {
          uk = i;
        } else if (data[i].countryName == "Malaysia") {
          malaysia = i;
        } else if (data[i].countryName == "Mexico") {
          mexico = i;
        } else if (data[i].countryName == "Turkey") {
          turkey = i;
        } else if (data[i].countryName == "Brazil") {
          brazil = i;
        } else if (data[i].countryName == "Azerbaijan") {
          azerbaijan = i;
        } else if (data[i].countryName == "Russia") {
          russia = i;
        } else if (data[i].countryName == "USA") {
          usa = i;
        } else if (data[i].countryName == "India") {
          india = i;
        }
        if (!lastRetrievedData) {
          selectedCountryId = canada;
        }
      });
      $("#select-country").val(selectedCountryId);
      lastRetrievedData = data;
      showCountry();
    })
    .fail(function () {
      console.log("error");
    })
    .always(function () {
      console.log("complete");
    });
}

function getProvinceData(selectedCountryText) {
  let filteredData = "";
  $.getJSON("js/countries.json", function () {})
    .done(function (data) {
      filteredData = data.filter(
        country => country.countryName == selectedCountryText
      );
      // console.log("second success Province");
      console.log(filteredData);
      let countKey = Object.keys(filteredData).length;
      console.log(countKey);
      $("#select-province").empty();
      jQuery.each(filteredData[0].provinces, function (i, val) {
        if (filteredData[0].provinces[i] != null) {
          $("#select-province").append(
            $("<option/>", {
              value: i,
              text: filteredData[0].provinces[i].name
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
      lastProvinceRetrievedData = filteredData;
    })
    .fail(function () {
      console.log("error");
    })
    .always(function () {
      console.log("complete");
    });
}

function showCountry(selectedCountry) {
  let id;
  if (selectedCountry) {
    if (selectedCountry == "canada") {
      id = canada;
      selectedText = "Canada";
    } else if (selectedCountry == "United Kingdom") {
      id = uk;
      selectedText = "United Kingdom";
    } else if (selectedCountry == "mexico") {
      id = mexico;
      selectedText = "Mexico";
    } else if (selectedCountry == "singapore") {
      id = singapore;
      selectedText = "Singapore";
    } else if (selectedCountry == "turkey") {
      id = turkey;
      selectedText = "Turkey";
    } else if (selectedCountry == "brazil") {
      id = brazil;
      selectedText = "Brazil";
    } else if (selectedCountry == "azerbaijan") {
      id = azerbaijan;
      selectedText = "Azerbaijan";
    } else if (selectedCountry == "russia") {
      id = russia;
      selectedText = "Russia";
    } else if (selectedCountry == "usa") {
      id = usa;
      selectedText = "USA";
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
      selectedText = "USA";
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
  $("#select-country").val(id);
  if (lastRetrievedData[id].coviddata != null) {
    $("#currentStatus").empty();
    $("#currentStatus").text(
      lastRetrievedData[id].coviddata.currentStatus.toLocaleString()
    );
    $("#orderinPlace").empty();
    $("#orderinPlace").text(
      lastRetrievedData[id].coviddata.orderinPlace.toLocaleString()
    );
    $("#reopenDate").empty();
    $("#reopenDate").text(
      lastRetrievedData[id].coviddata.reopenDate.toLocaleString()
    );
    $("#phase").empty();
    $("#phase").text(lastRetrievedData[id].coviddata.phase.toLocaleString());
    $("div#reopened").empty();
    jQuery.each(lastRetrievedData[id].coviddata.reopened, function (i, val) {
      $("#reopened").append(
        $(
          "<h3 class='blue-text count'>" +
            lastRetrievedData[id].coviddata.reopened[i].business +
            "</h3>"
        )
      );
    });
    $("div#reopeninigSoon").empty();
    jQuery.each(lastRetrievedData[id].coviddata.reopeninigSoon, function (
      i,
      val
    ) {
      $("#reopeninigSoon").append(
        $(
          "<h3 class='red-text count'>" +
            lastRetrievedData[id].coviddata.reopeninigSoon[i].business +
            "</h3>"
        )
      );
    });
  } else {
    $("#currentStatus").text("-");
    $("#orderinPlace").text("-");
    $("#reopenDate").text("-");
    $("#reopeninigSoon").text("-");
    $("#reopened").text("-");
    $("#phase").text("-");
  }
}

function showProvince() {
  let id;
  let active;
  let recovered;
  id = $("#select-province").val();
  console.log(lastProvinceRetrievedData);
  if (lastProvinceRetrievedData[0].provinces[id].coviddata != null) {
    $("#currentStatus").text(
      lastProvinceRetrievedData[0].provinces[
        id
      ].coviddata.currentStatus.toLocaleString()
    );
    $("#orderinPlace").text(
      lastProvinceRetrievedData[0].provinces[
        id
      ].coviddata.orderinPlace.toLocaleString()
    );
    $("#reopenDate").text(
      lastProvinceRetrievedData[0].provinces[
        id
      ].coviddata.reopenDate.toLocaleString()
    );
    $("#phase").text(
      lastProvinceRetrievedData[0].provinces[
        id
      ].coviddata.phase.toLocaleString()
    );
    $("div#reopened").empty();
    jQuery.each(
      lastProvinceRetrievedData[0].provinces[id].coviddata.reopened,
      function (i, val) {
        $("#reopened").append(
          $(
            "<h3 class='blue-text count'>" +
              lastProvinceRetrievedData[0].provinces[id].coviddata.reopened[i]
                .business +
              "</h3>"
          )
        );
      }
    );
    $("div#reopeninigSoon").empty();
    jQuery.each(
      lastProvinceRetrievedData[0].provinces[id].coviddata.reopeninigSoon,
      function (i, val) {
        $("#reopeninigSoon").append(
          $(
            "<h3 class='red-text count'>" +
              lastProvinceRetrievedData[0].provinces[id].coviddata
                .reopeninigSoon[i].business +
              "</h3>"
          )
        );
      }
    );
  } else {
    $("#currentStatus").text("-");
    $("#orderinPlace").text("-");
    $("#reopenDate").text("-");
    $("#reopeninigSoon").text("-");
    $("#reopened").text("-");
    $("#phase").text("-");
  }
}

function setupInterval() {
  interval = setInterval(function () {
    getData();
    // getProvinceData();
    // showProvince();
  }, intervalTime);
}

function refresh() {
  clearInterval(interval);
  getData();
}
$(document).ready(function () {
  getData();
});