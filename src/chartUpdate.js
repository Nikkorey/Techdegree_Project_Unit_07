import get from "./getElement.js";
import getAll from "./getAllElement.js";
import { trafficChart } from "./chart.js";
import {
  weeklyData,
  weeklyLabels,
  hourlyData,
  hourlyLabels,
  dailyData2,
  dailyLabels,
  monthlyData,
  monthlyLabels,
} from "./lineChartData.js";

let trafficLink = getAll(".traffic__link");

function lineChartUpdate(label, data) {
  trafficChart.data.labels = label;
  trafficChart.data.datasets[0].data = data;
  trafficChart.update();
}

// line chart update
trafficLink.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.textContent === "Hourly") {
      lineChartUpdate(hourlyLabels, hourlyData);
    } else if (item.textContent === "Daily") {
      lineChartUpdate(dailyLabels, dailyData2);
    } else if (item.textContent === "Weekly") {
      lineChartUpdate(weeklyLabels, weeklyData);
    } else {
      lineChartUpdate(monthlyLabels, monthlyData);
    }
  });
});

// Traffic Navigation Update
const trafficNav = get("#traffic");
const trafficNavLink = trafficNav.getElementsByClassName("traffic__link");

for (let i = 0; i < trafficNavLink.length; i++) {
  trafficNavLink[i].addEventListener("click", () => {
    var current = document.getElementsByClassName("active");
    console.log(current);
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
