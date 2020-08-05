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

// Traffic Navigation Link Active

// Get Variable of all list
const trafficNavLink = getAll(".traffic__link");
console.log(trafficNavLink[0]);

// iterate the array using foreach
trafficNavLink.forEach((links) => {
  // Add a click Event Listener for each item
  links.addEventListener("click", (e) => {
    // get the element with the the active class
    var active = get(".active");
    // replace or to remove the active class of the element
    active.className = active.className.replace(" active", "");
    // add active class in each element
    e.target.className += " active";
  });
});
