const Chart = require("chart.js");
const { unpackArray, range } = require("./utils");
const { generateWealthTrajectories, getHistograms } = require("./rgbm");

var config = {
  type: "bar",
  options: {
    legend: { display: false },
    animation: false,
    events: [],
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false
          },
          ticks: {
            display: false
          }
        }
      ],
      yAxes: [
        {
          display: true,
          ticks: {
            steps: 10,
            stepValue: 5,
            min: 0
          }
        }
      ]
    }
  }
};

function plotTimeStep(chart, step, data) {
  chart.options.title = {
    display: true,
    fontSize: 20,
    text: "Time " + step
  };
  chart.data.labels = range(data.length);
  chart.data.datasets = [{ backgroundColor: "#c45850", data: data }];
  chart.update();
}

window.onload = function() {
  var ctx = document.getElementById("animation").getContext("2d");
  var hist_ctx = document.getElementById("histogram").getContext("2d");
  window.barplot = new Chart(ctx, config);
  window.histogram = new Chart(hist_ctx, config);
};

document.getElementById("startAnimation").addEventListener("click", function() {
  if (window.animate) {
    clearInterval(window.animate);
  }

  var timeStep = 0;
  var N = getParam("N");
  var T = getParam("T");
  var dt = getParam("dt");
  var mu = getParam("mu");
  var sigma = getParam("sigma");
  var tau = getParam("tau");
  var bins = getParam("bins");
  var wealthTrajectories = generateWealthTrajectories(N, T, dt, mu, sigma, tau);
  var histograms = getHistograms(wealthTrajectories, bins);

  const maxSteps = Math.floor(T / dt / 10);

  window.animate = window.setInterval(function() {
    if (timeStep < maxSteps) {
      var row = unpackArray(wealthTrajectories.pick(timeStep * 10, null));
      var histRow = unpackArray(histograms.pick(timeStep * 10, null));
      plotTimeStep(window.barplot, timeStep, row);
      plotTimeStep(window.histogram, timeStep, histRow);
      timeStep++;
    } else {
      clearInterval(window.animate);
    }
  }, 300);
});

function getParam(name) {
  return parseFloat(document.getElementById(name).value);
}
