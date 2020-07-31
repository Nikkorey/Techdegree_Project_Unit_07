let trafficCanvas = document.getElementById("traffic-chart");
const dailyCanvas = document.getElementById("daily-chart");
const mobileCanvas = document.getElementById("mobile-chart");

// Traffic Line Chart

let trafficData = {
  labels: weeklyLabels,
  datasets: [
    {
      data: weeklyData,
      backgroundColor: "rgba(116, 119, 191, .3)",
      borderWidth: 0.5,
      borderColor: "#4d4c71",
      pointBorderColor: "#4d4c71",
      pointBorderWidth: 1.5,
      pointRadius: 8,
      pointBackgroundColor: "white",
      pointHoverBackgroundColor: "green,",
    },
  ],
};

let trafficOptions = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 0,
    easing: "easeInBack",
  },
  scales: {
    yAxes: [
      {
        ticks: {
          maxTicksLimit: 5,
          fontFamily: "Open Sans, sans-serif",
          fontColor: "#939393",
          padding: 14,
        },
        gridLines: {
          offsetGridLines: true,
          drawTicks: false,
        },
      },
    ],
    xAxes: [
      {
        ticks: {
          fontFamily: "Open Sans, sans-serif",
          fontColor: "#939393",
          padding: 18,
        },
        gridLines: {
          offsetGridLines: true,
          drawTicks: false,
        },
      },
    ],
  },
  legend: {
    display: false,
  },
};

// Bar Graph
const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S "],
  datasets: [
    {
      labels: "# of Hits",
      data: [75, 115, 175, 125, 225, 200, 100],
      backgroundColor: "#7477BF",
      hoverBackgroundColor: "#81C98F",
      borderWidth: 1,
      barThickness: 30,
    },
  ],
};

const dailyOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        ticks: {
          maxTicksLimit: 5,
          fontFamily: "Open Sans, sans-serif",
          fontColor: "#939393",
          padding: 14,
        },
        gridLines: {
          offsetGridLines: true,
          drawTicks: false,
        },
      },
    ],
    xAxes: [
      {
        ticks: {
          fontFamily: "Open Sans, sans-serif",
          fontColor: "#939393",
          padding: 18,
        },
        gridLines: {
          drawTicks: false,
        },
      },
    ],
  },
  legend: {
    display: false,
  },
};

// Doughnut Chart
const mobileData = {
  labels: ["Phones", "Tablet", "Desktop"],
  datasets: [
    {
      label: "# of Users",
      data: [600, 600, 2000],
      borderWidth: 0,
      backgroundColor: ["#81C98F", "#73B1BF", "#7377BF"],
      hoverBackgroundColor: ["#9ad3a5", "#8ec0cb", "#8e92cb"],
    },
  ],
};

const mobileOptions = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    position: "right",
    align: "center",
    labels: {
      boxWidth: 20,
      fontFamily: "Open Sans, sans-serif",
      fontSize: 16,
      padding: 18,
    },
  },
};

let trafficChart = new Chart(trafficCanvas, {
  type: "line",
  data: trafficData,
  options: trafficOptions,
});

let dailyChart = new Chart(dailyCanvas, {
  type: "bar",
  data: dailyData,
  options: dailyOptions,
});

let mobileChart = new Chart(mobileCanvas, {
  type: "doughnut",
  data: mobileData,
  options: mobileOptions,
});
