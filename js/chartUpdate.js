/* 
  Data Chart Page
*/

let weeklyData = [
  750,
  1250,
  1000,
  2000,
  1500,
  1750,
  1250,
  1850,
  2250,
  1500,
  2500,
];

let weeklyLabels = [
  "16-22",
  "23-29",
  "30-5",
  "6-12",
  "13-19",
  "20-26",
  "27-3",
  "4-10",
  "11-17",
  "18-24",
  "25-31",
];

const hourlyData = [100, 300, 150, 450, 350, 600, 800, 400, 1000];
const hourlyLabels = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

let dailyData2 = [400, 150, 600, 900, 450, 800, 250];
let dailyLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

let monthlyData = [
  500,
  1200,
  800,
  2000,
  1500,
  400,
  2500,
  300,
  900,
  2000,
  1000,
  2900,
];
let monthlyLabels = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let trafficLink = document.querySelectorAll(".traffic__link");

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

function lineChartUpdate(label, data) {
  trafficChart.data.labels = label;
  trafficChart.data.datasets[0].data = data;
  trafficChart.update();
}

// Traffic Navigation Update
const trafficNav = document.getElementById("traffic");
const trafficNavLink = trafficNav.getElementsByClassName("traffic__link");

for (let i = 0; i < trafficNavLink.length; i++) {
  trafficNavLink[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    console.log(current);
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
