const countries = [
  {"name": "Afghanistan", "code": "AF"},
  {"name": "Albania", "code": "AL"},
  {"name": "Algeria", "code": "DZ"},
  {"name": "American Samoa", "code": "AS"},
  {"name": "AndorrA", "code": "AD"},
  {"name": "Angola", "code": "AO"},
  {"name": "Anguilla", "code": "AI"},
  {"name": "Antigua and Barbuda", "code": "AG"},
  {"name": "Argentina", "code": "AR"},
  {"name": "Armenia", "code": "AM"},
  {"name": "Aruba", "code": "AW"},
  {"name": "Australia", "code": "AU"},
  {"name": "Austria", "code": "AT"},
  {"name": "Azerbaijan", "code": "AZ"},
  {"name": "Bahamas", "code": "BS"},
  {"name": "Bahrain", "code": "BH"},
  {"name": "Bangladesh", "code": "BD"},
  {"name": "Barbados", "code": "BB"},
  {"name": "Belarus", "code": "BY"},
  {"name": "Belgium", "code": "BE"},
  {"name": "Belize", "code": "BZ"},
  {"name": "Benin", "code": "BJ"},
  {"name": "Bermuda", "code": "BM"},
  {"name": "Bhutan", "code": "BT"},
  {"name": "Bolivia", "code": "BO"},
  {"name": "Bosnia and Herzegovina", "code": "BA"},
  {"name": "Botswana", "code": "BW"},
  {"name": "Bouvet Island", "code": "BV"},
  {"name": "Brazil", "code": "BR"},
  {"name": "British Indian Ocean Territory", "code": "IO"},
  {"name": "Brunei Darussalam", "code": "BN"},
  {"name": "Bulgaria", "code": "BG"},
  {"name": "Burkina Faso", "code": "BF"},
  {"name": "Burundi", "code": "BI"},
  {"name": "Cambodia", "code": "KH"},
  {"name": "Cameroon", "code": "CM"},
  {"name": "Canada", "code": "CA"},
  {"name": "Cape Verde", "code": "CV"},
  {"name": "Cayman Islands", "code": "KY"},
  {"name": "Central African Republic", "code": "CF"},
  {"name": "Chad", "code": "TD"},
  {"name": "Chile", "code": "CL"},
  {"name": "China", "code": "CN"},
  {"name": "Christmas Island", "code": "CX"},
  {"name": "Cocos (Keeling) Islands", "code": "CC"},
  {"name": "Colombia", "code": "CO"},
  {"name": "Comoros", "code": "KM"},
  {"name": "Congo", "code": "CG"},
  {"name": "Congo, The Democratic Republic of the", "code": "CD"},
  {"name": "Cook Islands", "code": "CK"},
  {"name": "Costa Rica", "code": "CR"},
  {"name": "Cote D\"Ivoire", "code": "CI"},
  {"name": "Croatia", "code": "HR"},
  {"name": "Cuba", "code": "CU"},
  {"name": "Cyprus", "code": "CY"},
  {"name": "Czech Republic", "code": "CZ"},
  {"name": "Denmark", "code": "DK"},
  {"name": "Djibouti", "code": "DJ"},
  {"name": "Dominica", "code": "DM"},
  {"name": "Dominican Republic", "code": "DO"},
  {"name": "Ecuador", "code": "EC"},
  {"name": "Egypt", "code": "EG"},
  {"name": "El Salvador", "code": "SV"},
  {"name": "Equatorial Guinea", "code": "GQ"},
  {"name": "Eritrea", "code": "ER"},
  {"name": "Estonia", "code": "EE"},
  {"name": "Ethiopia", "code": "ET"},
  {"name": "Falkland Islands (Malvinas)", "code": "FK"},
  {"name": "Faroe Islands", "code": "FO"},
  {"name": "Fiji", "code": "FJ"},
  {"name": "Finland", "code": "FI"},
  {"name": "France", "code": "FR"},
  {"name": "French Guiana", "code": "GF"},
  {"name": "French Polynesia", "code": "PF"},
  {"name": "French Southern Territories", "code": "TF"},
  {"name": "Gabon", "code": "GA"},
  {"name": "Gambia", "code": "GM"},
  {"name": "Georgia", "code": "GE"},
  {"name": "Germany", "code": "DE"},
  {"name": "Ghana", "code": "GH"},
  {"name": "Gibraltar", "code": "GI"},
  {"name": "Greece", "code": "GR"},
  {"name": "Greenland", "code": "GL"},
  {"name": "Grenada", "code": "GD"},
  {"name": "Guadeloupe", "code": "GP"},
  {"name": "Guam", "code": "GU"},
  {"name": "Guatemala", "code": "GT"},
  {"name": "Guernsey", "code": "GG"},
  {"name": "Guinea", "code": "GN"},
  {"name": "Guinea-Bissau", "code": "GW"},
  {"name": "Guyana", "code": "GY"},
  {"name": "Haiti", "code": "HT"},
  {"name": "Heard Island and Mcdonald Islands", "code": "HM"},
  {"name": "Holy See (Vatican City State)", "code": "VA"},
  {"name": "Honduras", "code": "HN"},
  {"name": "Hong Kong", "code": "HK"},
  {"name": "Hungary", "code": "HU"},
  {"name": "Iceland", "code": "IS"},
  {"name": "India", "code": "IN"},
  {"name": "Indonesia", "code": "ID"},
  {"name": "Iran, Islamic Republic Of", "code": "IR"},
  {"name": "Iraq", "code": "IQ"},
  {"name": "Ireland", "code": "IE"},
  {"name": "Isle of Man", "code": "IM"},
  {"name": "Israel", "code": "IL"},
  {"name": "Italy", "code": "IT"},
  {"name": "Jamaica", "code": "JM"},
  {"name": "Japan", "code": "JP"},
  {"name": "Jersey", "code": "JE"},
  {"name": "Jordan", "code": "JO"},
  {"name": "Kazakhstan", "code": "KZ"},
  {"name": "Kenya", "code": "KE"},
  {"name": "Kiribati", "code": "KI"},
  {"name": "Korea, Democratic People\"S Republic of", "code": "KP"},
  {"name": "Korea, Republic of", "code": "KR"},
  {"name": "Kuwait", "code": "KW"},
  {"name": "Kyrgyzstan", "code": "KG"},
  {"name": "Lao People\"S Democratic Republic", "code": "LA"},
  {"name": "Latvia", "code": "LV"},
  {"name": "Lebanon", "code": "LB"},
  {"name": "Lesotho", "code": "LS"},
  {"name": "Liberia", "code": "LR"},
  {"name": "Libyan Arab Jamahiriya", "code": "LY"},
  {"name": "Liechtenstein", "code": "LI"},
  {"name": "Lithuania", "code": "LT"},
  {"name": "Luxembourg", "code": "LU"},
  {"name": "Macao", "code": "MO"},
  {"name": "Macedonia, The Former Yugoslav Republic of", "code": "MK"},
  {"name": "Madagascar", "code": "MG"},
  {"name": "Malawi", "code": "MW"},
  {"name": "Malaysia", "code": "MY"},
  {"name": "Maldives", "code": "MV"},
  {"name": "Mali", "code": "ML"},
  {"name": "Malta", "code": "MT"},
  {"name": "Marshall Islands", "code": "MH"},
  {"name": "Martinique", "code": "MQ"},
  {"name": "Mauritania", "code": "MR"},
  {"name": "Mauritius", "code": "MU"},
  {"name": "Mayotte", "code": "YT"},
  {"name": "Mexico", "code": "MX"},
  {"name": "Micronesia, Federated States of", "code": "FM"},
  {"name": "Moldova, Republic of", "code": "MD"},
  {"name": "Monaco", "code": "MC"},
  {"name": "Mongolia", "code": "MN"},
  {"name": "Montserrat", "code": "MS"},
  {"name": "Morocco", "code": "MA"},
  {"name": "Mozambique", "code": "MZ"},
  {"name": "Myanmar", "code": "MM"},
  {"name": "Namibia", "code": "NA"},
  {"name": "Nauru", "code": "NR"},
  {"name": "Nepal", "code": "NP"},
  {"name": "Netherlands", "code": "NL"},
  {"name": "Netherlands Antilles", "code": "AN"},
  {"name": "New Caledonia", "code": "NC"},
  {"name": "New Zealand", "code": "NZ"},
  {"name": "Nicaragua", "code": "NI"},
  {"name": "Niger", "code": "NE"},
  {"name": "Nigeria", "code": "NG"},
  {"name": "Niue", "code": "NU"},
  {"name": "Norfolk Island", "code": "NF"},
  {"name": "Northern Mariana Islands", "code": "MP"},
  {"name": "Norway", "code": "NO"},
  {"name": "Oman", "code": "OM"},
  {"name": "Pakistan", "code": "PK"},
  {"name": "Palau", "code": "PW"},
  {"name": "Palestinian Territory, Occupied", "code": "PS"},
  {"name": "Panama", "code": "PA"},
  {"name": "Papua New Guinea", "code": "PG"},
  {"name": "Paraguay", "code": "PY"},
  {"name": "Peru", "code": "PE"},
  {"name": "Philippines", "code": "PH"},
  {"name": "Pitcairn", "code": "PN"},
  {"name": "Poland", "code": "PL"},
  {"name": "Portugal", "code": "PT"},
  {"name": "Puerto Rico", "code": "PR"},
  {"name": "Qatar", "code": "QA"},
  {"name": "Reunion", "code": "RE"},
  {"name": "Romania", "code": "RO"},
  {"name": "Russian Federation", "code": "RU"},
  {"name": "RWANDA", "code": "RW"},
  {"name": "Saint Helena", "code": "SH"},
  {"name": "Saint Kitts and Nevis", "code": "KN"},
  {"name": "Saint Lucia", "code": "LC"},
  {"name": "Saint Pierre and Miquelon", "code": "PM"},
  {"name": "Saint Vincent and the Grenadines", "code": "VC"},
  {"name": "Samoa", "code": "WS"},
  {"name": "San Marino", "code": "SM"},
  {"name": "Sao Tome and Principe", "code": "ST"},
  {"name": "Saudi Arabia", "code": "SA"},
  {"name": "Senegal", "code": "SN"},
  {"name": "Serbia and Montenegro", "code": "CS"},
  {"name": "Seychelles", "code": "SC"},
  {"name": "Sierra Leone", "code": "SL"},
  {"name": "Singapore", "code": "SG"},
  {"name": "Slovakia", "code": "SK"},
  {"name": "Slovenia", "code": "SI"},
  {"name": "Solomon Islands", "code": "SB"},
  {"name": "Somalia", "code": "SO"},
  {"name": "South Africa", "code": "ZA"},
  {"name": "South Georgia and the South Sandwich Islands", "code": "GS"},
  {"name": "Spain", "code": "ES"},
  {"name": "Sri Lanka", "code": "LK"},
  {"name": "Sudan", "code": "SD"},
  {"name": "Suri", "code": "SR"},
  {"name": "Svalbard and Jan Mayen", "code": "SJ"},
  {"name": "Swaziland", "code": "SZ"},
  {"name": "Sweden", "code": "SE"},
  {"name": "Switzerland", "code": "CH"},
  {"name": "Syrian Arab Republic", "code": "SY"},
  {"name": "Taiwan, Province of China", "code": "TW"},
  {"name": "Tajikistan", "code": "TJ"},
  {"name": "Tanzania, United Republic of", "code": "TZ"},
  {"name": "Thailand", "code": "TH"},
  {"name": "Timor-Leste", "code": "TL"},
  {"name": "Togo", "code": "TG"},
  {"name": "Tokelau", "code": "TK"},
  {"name": "Tonga", "code": "TO"},
  {"name": "Trinidad and Tobago", "code": "TT"},
  {"name": "Tunisia", "code": "TN"},
  {"name": "Turkey", "code": "TR"},
  {"name": "Turkmenistan", "code": "TM"},
  {"name": "Turks and Caicos Islands", "code": "TC"},
  {"name": "Tuvalu", "code": "TV"},
  {"name": "Uganda", "code": "UG"},
  {"name": "Ukraine", "code": "UA"},
  {"name": "United Arab Emirates", "code": "AE"},
  {"name": "United Kingdom", "code": "GB"},
  {"name": "United States", "code": "US"},
  {"name": "United States Minor Outlying Islands", "code": "UM"},
  {"name": "Uruguay", "code": "UY"},
  {"name": "Uzbekistan", "code": "UZ"},
  {"name": "Vanuatu", "code": "VU"},
  {"name": "Venezuela", "code": "VE"},
  {"name": "Viet Nam", "code": "VN"},
  {"name": "Virgin Islands, British", "code": "VG"},
  {"name": "Virgin Islands, U.S.", "code": "VI"},
  {"name": "Wallis and Futuna", "code": "WF"},
  {"name": "Western Sahara", "code": "EH"},
  {"name": "Yemen", "code": "YE"},
  {"name": "Zambia", "code": "ZM"},
  {"name": "Zimbabwe", "code": "ZW"}
];

const iso3 = {
"BD": "BGD",
"BE": "BEL",
"BF": "BFA",
"BG": "BGR",
"BA": "BIH",
"BB": "BRB",
"WF": "WLF",
"BL": "BLM",
"BM": "BMU",
"BN": "BRN",
"BO": "BOL",
"BH": "BHR",
"BI": "BDI",
"BJ": "BEN",
"BT": "BTN",
"JM": "JAM",
"BV": "BVT",
"BW": "BWA",
"WS": "WSM",
"BQ": "BES",
"BR": "BRA",
"BS": "BHS",
"JE": "JEY",
"BY": "BLR",
"BZ": "BLZ",
"RU": "RUS",
"RW": "RWA",
"RS": "SRB",
"TL": "TLS",
"RE": "REU",
"TM": "TKM",
"TJ": "TJK",
"RO": "ROU",
"TK": "TKL",
"GW": "GNB",
"GU": "GUM",
"GT": "GTM",
"GS": "SGS",
"GR": "GRC",
"GQ": "GNQ",
"GP": "GLP",
"JP": "JPN",
"GY": "GUY",
"GG": "GGY",
"GF": "GUF",
"GE": "GEO",
"GD": "GRD",
"GB": "GBR",
"GA": "GAB",
"SV": "SLV",
"GN": "GIN",
"GM": "GMB",
"GL": "GRL",
"GI": "GIB",
"GH": "GHA",
"OM": "OMN",
"TN": "TUN",
"JO": "JOR",
"HR": "HRV",
"HT": "HTI",
"HU": "HUN",
"HK": "HKG",
"HN": "HND",
"HM": "HMD",
"VE": "VEN",
"PR": "PRI",
"PS": "PSE",
"PW": "PLW",
"PT": "PRT",
"SJ": "SJM",
"PY": "PRY",
"IQ": "IRQ",
"PA": "PAN",
"PF": "PYF",
"PG": "PNG",
"PE": "PER",
"PK": "PAK",
"PH": "PHL",
"PN": "PCN",
"PL": "POL",
"PM": "SPM",
"ZM": "ZMB",
"EH": "ESH",
"EE": "EST",
"EG": "EGY",
"ZA": "ZAF",
"EC": "ECU",
"IT": "ITA",
"VN": "VNM",
"SB": "SLB",
"ET": "ETH",
"SO": "SOM",
"ZW": "ZWE",
"SA": "SAU",
"ES": "ESP",
"ER": "ERI",
"ME": "MNE",
"MD": "MDA",
"MG": "MDG",
"MF": "MAF",
"MA": "MAR",
"MC": "MCO",
"UZ": "UZB",
"MM": "MMR",
"ML": "MLI",
"MO": "MAC",
"MN": "MNG",
"MH": "MHL",
"MK": "MKD",
"MU": "MUS",
"MT": "MLT",
"MW": "MWI",
"MV": "MDV",
"MQ": "MTQ",
"MP": "MNP",
"MS": "MSR",
"MR": "MRT",
"IM": "IMN",
"UG": "UGA",
"TZ": "TZA",
"MY": "MYS",
"MX": "MEX",
"IL": "ISR",
"FR": "FRA",
"IO": "IOT",
"SH": "SHN",
"FI": "FIN",
"FJ": "FJI",
"FK": "FLK",
"FM": "FSM",
"FO": "FRO",
"NI": "NIC",
"NL": "NLD",
"NO": "NOR",
"NA": "NAM",
"VU": "VUT",
"NC": "NCL",
"NE": "NER",
"NF": "NFK",
"NG": "NGA",
"NZ": "NZL",
"NP": "NPL",
"NR": "NRU",
"NU": "NIU",
"CK": "COK",
"XK": "XKX",
"CI": "CIV",
"CH": "CHE",
"CO": "COL",
"CN": "CHN",
"CM": "CMR",
"CL": "CHL",
"CC": "CCK",
"CA": "CAN",
"CG": "COG",
"CF": "CAF",
"CD": "COD",
"CZ": "CZE",
"CY": "CYP",
"CX": "CXR",
"CR": "CRI",
"CW": "CUW",
"CV": "CPV",
"CU": "CUB",
"SZ": "SWZ",
"SY": "SYR",
"SX": "SXM",
"KG": "KGZ",
"KE": "KEN",
"SS": "SSD",
"SR": "SUR",
"KI": "KIR",
"KH": "KHM",
"KN": "KNA",
"KM": "COM",
"ST": "STP",
"SK": "SVK",
"KR": "KOR",
"SI": "SVN",
"KP": "PRK",
"KW": "KWT",
"SN": "SEN",
"SM": "SMR",
"SL": "SLE",
"SC": "SYC",
"KZ": "KAZ",
"KY": "CYM",
"SG": "SGP",
"SE": "SWE",
"SD": "SDN",
"DO": "DOM",
"DM": "DMA",
"DJ": "DJI",
"DK": "DNK",
"VG": "VGB",
"DE": "DEU",
"YE": "YEM",
"DZ": "DZA",
"US": "USA",
"UY": "URY",
"YT": "MYT",
"UM": "UMI",
"LB": "LBN",
"LC": "LCA",
"LA": "LAO",
"TV": "TUV",
"TW": "TWN",
"TT": "TTO",
"TR": "TUR",
"LK": "LKA",
"LI": "LIE",
"LV": "LVA",
"TO": "TON",
"LT": "LTU",
"LU": "LUX",
"LR": "LBR",
"LS": "LSO",
"TH": "THA",
"TF": "ATF",
"TG": "TGO",
"TD": "TCD",
"TC": "TCA",
"LY": "LBY",
"VA": "VAT",
"VC": "VCT",
"AE": "ARE",
"AD": "AND",
"AG": "ATG",
"AF": "AFG",
"AI": "AIA",
"VI": "VIR",
"IS": "ISL",
"IR": "IRN",
"AM": "ARM",
"AL": "ALB",
"AO": "AGO",
"AQ": "ATA",
"AS": "ASM",
"AR": "ARG",
"AU": "AUS",
"AT": "AUT",
"AW": "ABW",
"IN": "IND",
"AX": "ALA",
"AZ": "AZE",
"IE": "IRL",
"ID": "IDN",
"UA": "UKR",
"QA": "QAT",
"MZ": "MOZ"
}

//This countryFilter is an array of countryName only
const countryFilter = countries.map(function(country) {
  return country.name;
})

//create a countryname(key) -> iso2(value) object from countries array
countryObject = {};
countries.forEach(function(country) {
  countryObject[country.name] = country.code;
})


const initialDate = formatDate("2020-03-15");
const newDate = formatDate(Date.now());
$(document).ready(function() {

  //global data
  $.getJSON('https://covidapi.info/api/v1/global')
    .then(function(summary) {
      const {
        confirmed,
        deaths,
        recovered
      } = summary.result;

      $('#totalCase').append(`${formatNumber(confirmed)}`);
      $('#totalRecovered').append(`${formatNumber(recovered)}`);
      $('#totalDeceased').append(`${formatNumber(deaths)}`);

      donutData('morris-donut-global',confirmed, recovered, deaths);
    })
  const k = "f708196056324d8cb96b92f444a0a3a3";
  const q = "covid-19";
  $.getJSON('https://covidapi.info/api/v1/global/count')
    .then(function(dateCount) {
      const result = dateCount.result;
      const keys = Object.keys(result);
      const values = Object.values(result);

      let recoveredCaseArr = [];
      values.forEach(function(value, i) {
        recoveredCaseArr.push({y: keys[i], a: value.recovered})
      })

      let infectedCaseArr = [];
      values.forEach(function(value, i) {
        infectedCaseArr.push({y: keys[i], a: value.confirmed})
      })

      lineChartData(infectedCaseArr, 'morris-line-global-infected', 'Infected', ['#f9c851']);
      lineChartData(recoveredCaseArr, 'morris-line-global-recovered', 'Recovered', ['#10c469']);

    })


  //nigeria data
  $.getJSON('https://covidapi.info/api/v1/country/NGA/latest')
    .then(function(latest) {
      const nga = Object.values(latest.result);
      const ngaConfirmed = nga[0].confirmed;
      const ngaDeaths = nga[0].deaths;
      const ngaRecovered = nga[0].recovered;

      $('#totalNgCase').append(`${formatNumber(ngaConfirmed)}`);
      $('#totalNgRecovered').append(`${formatNumber(ngaRecovered)}`);
      $('#totalNgDeceased').append(`${formatNumber(ngaDeaths)}`);

      donutData('morris-donut-nigeria', ngaConfirmed, ngaRecovered, ngaDeaths);
    })



    $.getJSON(`https://covidapi.info/api/v1/country/NGA/timeseries/${initialDate}/${newDate}`)
      .then(function(ngdata) {
        const ng = ngdata.result;
        const newInfectedArr = ng.map(function(data) {
          return {y: data.date, a: formatNumber(data.confirmed)}
        })

        const newRecoveredArr = ng.map(function(data) {
          return {y: data.date, a: formatNumber(data.recovered)}
        })

        lineChartData(newInfectedArr, 'morris-line-nga-infected', 'Infected', ['#f9c851']);
        lineChartData(newRecoveredArr, 'morris-line-nga-recovered', 'Recovered', ['#10c469']);
      })


      //news section
      $.getJSON(`https://newsapi.org/v2/top-headlines?country=ng&q=${q}&apiKey=${k}`)
        .then(function(news) {
          const newsArray = news.articles;
          newsArray.forEach(function(item) {
            $('#news-section').append(`<div class="col-md-6 col-xl-3">
              <div class="card">
                <img class="card-img-top img-fluid" src="${item.urlToImage}" alt="${item.title}">
                <div class="card-body">
                  <h4 class="card-title">${item.title}</h4>
                  <p class="card-text">${item.description}</p>
                  <a href="${item.url}" class="btn btn-primary" target="_blank">Read more</a>
                </div>
              </div>
            </div><!-- end col -->`);
          })

        })

})


// all country data
$.getJSON('https://api.covid19api.com/summary')
  .then(function(data) {
    const rawData = data.Countries;
    const newData = rawData.map(function(d) {
      return {country: d.Country, confirmed: d.TotalConfirmed, recovered: d.TotalRecovered, death: d.TotalDeaths}
    })
    newData.forEach(function(data, index) {
      $('#countryData').append(`<tr>
          <td>${index + 1}</td>
          <td>${data.country}</td>
          <td>${data.confirmed}</td>
          <td>${data.recovered}</td>
          <td>${data.death}</td>
      </tr>`);
    })
  })



//country autocomplete
$(function() {
  $("#search").autocomplete({
    limit: 8,
    source: [countryFilter]
  });
});


//country search
$('#btnSearch').click(function(event) {
  event.preventDefault();
  if ($('#search').val() !== '') {
    const countryName = $('#search').val();
    //check the iso3 country name from iso2
    // console.log(iso3[countryObject[countryName]]);

    $.getJSON(`https://covidapi.info/api/v1/country/${iso3[countryObject[countryName]]}/latest`)
      .then(function(latest) {
        const nga = Object.values(latest.result);
        const ngaConfirmed = nga[0].confirmed;
        const ngaDeaths = nga[0].deaths;
        const ngaRecovered = nga[0].recovered;

        $('#title').text(`${countryName} Covid-19 Updates`);
        $('#totalCase').text(`${formatNumber(ngaConfirmed)}`);
        $('#totalRecovered').text(`${formatNumber(ngaRecovered)}`);
        $('#totalDeceased').text(`${formatNumber(ngaDeaths)}`);


        $('#morris-donut-global').empty();
        donutData('morris-donut-global', ngaConfirmed, ngaRecovered, ngaDeaths);
        $('#search').val('');
      })
      
      .fail(function(error) {
        // console.log(error.responseText);
        Swal.fire({
          title:"Covid-19 data not found for this country",
          confirmButtonClass:"btn btn-confirm mt-2"
        })
        $('#search').val('');
      })

      $.getJSON(`https://covidapi.info/api/v1/country/${iso3[countryObject[countryName]]}/timeseries/${initialDate}/${newDate}`)
        .then(function(ngdata) {
          const ng = ngdata.result;
          const newInfectedArr = ng.map(function(data) {
            return {y: data.date, a: formatNumber(data.confirmed)}
          })

          const newRecoveredArr = ng.map(function(data) {
            return {y: data.date, a: formatNumber(data.recovered)}
          })

          $('#morris-line-global-infected').empty();
          $('#morris-line-global-recovered').empty();
          lineChartData(newInfectedArr, 'morris-line-global-infected', 'Infected', ['#f9c851']);
          lineChartData(newRecoveredArr, 'morris-line-global-recovered', 'Recovered', ['#10c469']);
        })


  }
})



//functions
function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function formatDate(date) {

  const dateVar = new Date(date);
  const formatted = dateVar.toISOString().substr(0,10);
  return formatted
}

// function cutString(string) {
//
//   return string.substring(0, 60);
// }

function donutData(id, c, r, d) {
  return Morris.Donut({
    element: id,
    data: [
      {label: "Infected", value: c},
      {label: "Recovered", value: r},
      {label: "Death", value: d}
    ],
    resize: !0,
    colors: ["#f9c851", "#10c469", "#ff5b5b"],
    backgroundColor: "#323a46",
    labelColor: "#000"
  });
}



function lineChartData(data, id, labels, lineColors) {
  return Morris.Line({
    element: id,
    data: data,
    xkey: "y",
    ykeys: ["a"],
    labels: [labels],
    fillOpacity: ["0.9"],
    pointFillColors: ["#ffffff"],
    pointStrokeColors: ["#999999"],
    behaveLikeLine: !0,
    gridLineColor: "#323a46",
    hideHover: "auto",
    resize: !0,
    pointSize: 0,
    gridTextColor: "#98a6ad",
    lineColors: lineColors
  });
}


(function () {
  var $, MyMorris;

  MyMorris = window.MyMorris = {};
  $ = jQuery;

  MyMorris = Object.create(Morris);

  MyMorris.Donut.prototype.select = function (idx) {
      var row, s, segment, _i, _len, _ref, _fill_color; // ADDED _fill_color
      _ref = this.segments;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          s = _ref[_i];
          s.deselect();
      }
      segment = this.segments[idx];
      segment.select();
      row = this.data[idx];
      _fill_color = row.labelColor || this.options.labelColor || '#000000'; // ADDED
      return this.setLabels(row.label, this.options.formatter(row.value, row), _fill_color); // ADDED parameter _fill_color
  };


  MyMorris.Donut.prototype.setLabels = function (label1, label2, fill_color) {
      var inner, maxHeightBottom, maxHeightTop, maxWidth, text1bbox, text1scale, text2bbox, text2scale;
      _default_fill = fill_color || '#000000'; // ADDED
      inner = (Math.min(this.el.width() / 2, this.el.height() / 2) - 10) * 2 / 3;
      maxWidth = 1.8 * inner;
      maxHeightTop = inner / 2;
      maxHeightBottom = inner / 3;
      this.text1.attr({
          text: label1,
          transform: '',
          fill: fill_color // ADDED
      });
      text1bbox = this.text1.getBBox();
      text1scale = Math.min(maxWidth / text1bbox.width, maxHeightTop / text1bbox.height);
      this.text1.attr({
          transform: "S" + text1scale + "," + text1scale + "," + (text1bbox.x + text1bbox.width / 2) + "," + (text1bbox.y + text1bbox.height)
      });
      this.text2.attr({
          text: label2,
          transform: '',
          fill: fill_color // ADDED
      });
      text2bbox = this.text2.getBBox();
      text2scale = Math.min(maxWidth / text2bbox.width, maxHeightBottom / text2bbox.height);
      return this.text2.attr({
          transform: "S" + text2scale + "," + text2scale + "," + (text2bbox.x + text2bbox.width / 2) + "," + text2bbox.y
      });
  };
}).call(this);

getMorris('donut', 'donut_chart');

function getMorris(type, element) {
  if (type === 'donut') {
      var morris = Morris.Donut({
          element: element,
          data: [
              {
                  label: 'Male',
                  value: 4.7 ,
                  labelColor: 'Black'
              }, {
              label: 'Female',
                  value: 2.8 ,
                  
                  labelColor: 'Black'
              }
          ],
          labelColor: "#000",
          colors: ['#008efb', 'rgb(219, 99, 149)', 'rgb(219, 99, 149)', 'rgb(219, 99, 149)'],
          backgroundColor: "#323a46",
          formatter: function (value) { return (value) + '%'; }
      });
  }
}


Morris.Donut({element: 'donut', data:[{value:14.8, label: '80+'}, {value:8, label: '70+'}, {value:3.6, label: '60+'}, {value:1.3, label: '50+'}, {value:0.4, label: '40+'}, {value:0.2, label: '30+'}, {value:0.2, label: '20+'}],  labelColor: "#000", backgroundColor: "#323a46", colors:['#F80000', '#B80000', '#900000', '#780000', '#600000','#480000','#380000','#100000'],formatter: function (value) { return (value) + '%'; }});

Morris.Donut({element: 'donutdie', data:[{value:10.5, label: 'Cardiovascular disease'}, 
{value:7.3, label: 'Diabetes'}, {value:6.3, label: 'Chronic respiratory disease'}, 
{value:6, label: 'Hypertension'}, {value:5.6, label: 'Cancer'}, 
{value:0.9, label: 'No pre-existing conditions'}],
  labelColor: "#000", backgroundColor: "#323a46",
   colors:['#F80000', '#5c89c7', '#E27429', '#D61A3C', '#967bb6','#480000','#380000','#100000'],
   formatter: function (value) { return (value) + '%'; }});
