let myChart = document.getElementById("myChart").getContext("2d");
let symbol;
let prices = [];
let date = [];

//draws chart when page loads
chartIt();

//the function that generates the chart
async function chartIt() {
  //draws chart after the data from the API is recieved
  symbol = document.querySelector("#stockSymbol").value;
  await getSymbol();

  //draws the chart with parameters
  let stockChart = new Chart(myChart, {
    type: "line", // bar, horizontalBar, pie, line, dougnut, radar, polarArea
    data: {
      labels: date,
      datasets: [
        {
          label: symbol,
          data: prices,
          borderColor: "#66fcf1",
          borderWidth: 1
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: false
            }
          }
        ]
      }
    }
  });
}

//sandbox api = https://sandbox.iexapis.com/stable/stock/${symbol}/batch?types=quote,news,chart&range=1m&last=10&token=Tsk_fb6ca04b1b8e41b18beda113862b1eb3
//Gets the defined symbol and pulls data from API
async function getSymbol() {
  prices.length = 0;
  date.length = 0;
  //modifies link to include symbol variable
  await fetch(
    `https://cloud.iexapis.com/v1/stock/${symbol}/batch?types=quote,news,chart&range=1m&last=10&token=pk_023ec8aa653d4ab2828418e4927b9adb`
  )
    .then(function(res) {
      return res.json();
    })

    //gets data from json file
    .then(function(data) {
      for (var i = 0; i < data.chart.length; i++) {
        prices.push(data.chart[i].open);
        date.push(data.chart[i].label);
        symbol = data.quote.symbol;

        //builds items with json data
        summary = `
        <ul>
          <li><strong>Primary Stock Exchange:</strong> ${data.quote.primaryExchange}</li>
          <li><strong>Stock Symbol:</strong> ${data.quote.symbol}</li>
          <li><strong>Market Cap:</strong> ${data.quote.marketCap}</li>
          <li><strong>52 Week High:</strong> ${data.quote.week52High}</li>
          <li><strong>52 Week Low:</strong> ${data.quote.week52Low}</li>
          <li><strong>Latest Update:</strong> ${data.quote.latestTime}</li>
        </ul>`;
        document.querySelector(".headLine").innerHTML = data.quote.companyName;
        document.querySelector(".summary").innerHTML = summary;
        document.querySelector(".topSymbol").innerHTML = data.quote.symbol;
        document.querySelector(".currentPrice").innerHTML =
          data.quote.previousClose;
        document.querySelector(".changePrice").innerHTML = data.quote.change;
      }

      //Adds the news boxes below the graph
      let newsBox = "";

      //Injects first 6 news fields into html
      for (var index = 0; index < 6; index++) {
        newsBox += `
        <div class="col-4 mt-5">
          <div class="card card-body dynamic">
            <h2 class="newsHeader">${data.news[index].headline}</h2>
            <img class="imgResize" src="${data.news[index].image}" alt="">
            <p class="newsBody">${data.news[index].summary}</p>
            <a href="${data.news[index].url}" target="_blank">Read More...</a>
          </div>
        </div>
        `;
        document.querySelector(".newsBox").innerHTML = newsBox;
      }
    });
}

var loginBtn = document.querySelector("#login");
var closeLogin = document.querySelector(".closeModalLogin");
var createBtn = document.querySelector("#createAccount");
var closeCreate = document.querySelector(".closeModalCreate");
var loginOpenM = document.querySelector(".modallogin");
var createOpenM = document.querySelector(".modalcreate");

//Begins login/create account modal display
loginBtn.addEventListener("click", toggleLoginModal);
closeLogin.addEventListener("click", toggleLoginModal);
createBtn.addEventListener("click", toggleCreateModal);
closeCreate.addEventListener("click", toggleCreateModal);

//sets to display or hide the modal login/create section
function toggleLoginModal() {
  if (loginOpenM.style.display === "flex") {
    loginOpenM.style.display = "none";
  } else {
    loginOpenM.style.display = "flex";
  }
}

function toggleCreateModal() {
  if (createOpenM.style.display === "flex") {
    createOpenM.style.display = "none";
  } else {
    createOpenM.style.display = "flex";
  }
}

