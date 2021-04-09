$(function () {
  let apiURL = "https://coronavirus-19-api.herokuapp.com/countries";

  $.get(apiURL, function () {})
    .done(function (res) {
      set_Info(res);
      var x = document.querySelector("#total_cases_World").textContent.replace(',','') //h1, span or paragraph
      var y = 7789846765;
      final = parseFloat(x) * 100000;
      finalresult = final / y;
      
      $('#total_cases_World').append( '<code> ' + finalresult.toFixed(2) + '% </code>');
    })
    .fail(function () {
      M.toast({ html: "Internal Problem!!!" });
    });
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function set_Info(res) {
  let globalDropdown =
    "<select id = 'data_dropdown'><option value='' disabled selected>Choose your option</option>";

  for (let index = 0; index < res.length - 7; index++) {
    if (index == 6) continue;
	  
    globalDropdown +=
      "<option value='" + index + "'>" + res[index]["country"] + "</option>";
	  
	  
	  	  
    //set world summary
    if (res[index]["country"] === "World") {
		
      let percentage_casses_today = (res[index]["todayCases"] / res[index]["cases"])*100;
      
      let percentage_deaths = (res[index]["deaths"] / res[index]["cases"])*100;
      
      let percentage_deaths_today = (res[index]["todayDeaths"] / res[index]["deaths"])*100;
      
      
      let percentage_recovered = (res[index]["recovered"] / res[index]["cases"])*100;
      
        $("#total_cases_World").text(numberWithCommas(res[index]["cases"]));
        $("#total_deaths_World").text(numberWithCommas(res[index]["deaths"]));
      $('#total_deaths_World').append( '<code> ' + percentage_deaths.toFixed(2) + '% </code>');
      
        $('#today_cases_World').text(res[index]["todayCases"]);
      
        $('#today_cases_World').append( '<code> ' + percentage_casses_today.toFixed(2) + '% </code>');
      
      
        $('#today_deaths_World').text(res[index]["todayDeaths"])
      $('#today_deaths_World').append( '<code> ' + percentage_deaths_today.toFixed(2) + '% </code>');
        $("#total_recovary_World").text(
          numberWithCommas(res[index]["recovered"])
        );
      
      $('#total_recovary_World').append( '<code> ' + percentage_recovered.toFixed(2) + '% </code>');
      
        $("#total_critical_World").text(numberWithCommas(res[index]["critical"]));
      }
    //set BD summary
    else if (res[index]["country"] === "Bangladesh") {
      $("#total_cases_BD").text(res[index]["cases"]);
      $("#total_deaths_BD").text(res[index]["deaths"]);
      $("#total_recovary_BD").text(res[index]["recovered"]);
      $("#total_test_BD").text(res[index]["totalTests"]);
      $("#today_cases_BD").text(res[index]["todayCases"]);
      $("#today_deaths_BD").text(res[index]["todayDeaths"]);
      $("#active_BD").text(res[index]["active"]);
      $("#casesPerOneMillion_BD").text(res[index]["casesPerOneMillion"]);
      
    }
  }
}