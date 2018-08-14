import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

import './scss/style.scss';

import './js/gsap'

import 'chart.js'

var ctx = document.getElementById('language-chart').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'bar',

  // The data for our dataset
  data: {
    labels: ["Javascript", "Python", "HTML", "CSS", "PHP", "C#", "Java"],
    datasets: [{
      label: "My skills",
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [85, 83, 90, 85, 80, 70, 75],
    }],
  },

  options: {

    responsive: true,
    legend: {
      position: 'bottom',
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          // beginAtZero:true,
          min: 30,
        },
      }]
    },
    title: {
      display: true,
      text: 'Language I know (;'
    }
  }
  // Configuration options go here
});

// Skill chart
var skillChart = document.getElementById('skill-chart').getContext('2d')
new Chart(skillChart, {
  type: 'bubble',
  data: {
    labels: "Laravel",
    datasets: [{
        label: ["Laravel"],
        backgroundColor: "rgba(255,221,50,0.2)",
        borderColor: "rgba(255,221,50,1)",
        data: [{
          x: 80,
          y: 88,
          r: 15
        }]
      },
      {
        label: ["ExpressJs"],
        backgroundColor: "rgba(193,46,12,0.2)",
        borderColor: "rgba(193,46,12,1)",
        data: [{
          x: 74,
          y: 84,
          r: 15
        }]
      },
      {
        label: ["jQuery"],
        backgroundColor: "rgba(193,46,12,0.2)",
        borderColor: "rgba(193,46,12,1)",
        data: [{
          x: 85,
          y: 90,
          r: 15
        }]
      },
      {
        label: ["Axios"],
        backgroundColor: "rgba(193,46,12,0.2)",
        borderColor: "rgba(193,46,12,1)",
        data: [{
          x: 84,
          y: 79,
          r: 15
        }]
      },
      {
        label: ["VueJs"],
        backgroundColor: "rgba(193,46,12,0.2)",
        borderColor: "rgba(193,46,12,1)",
        data: [{
          x: 83,
          y: 88,
          r: 15
        }]
      },
      {
        label: ["Vuex"],
        backgroundColor: "rgba(193,46,12,0.2)",
        borderColor: "rgba(193,46,12,1)",
        data: [{
          x: 85,
          y: 83,
          r: 12
        }]
      },
      {
        label: ["React"],
        backgroundColor: "rgba(193,46,12,0.2)",
        borderColor: "rgba(193,46,12,1)",
        data: [{
          x: 83,
          y: 70,
          r: 11
        }]
      },
      {
        label: ["Illustrator"],
        backgroundColor: "rgba(60,186,159,0.2)",
        borderColor: "rgba(60,186,159,1)",
        data: [{
          x: 80,
          y: 70,
          r: 10
        }]
      },
      {
        label: ["Sketch"],
        backgroundColor: "rgba(0,0,0,0.2)",
        borderColor: "#000",
        data: [{
          x: 70,
          y: 83,
          r: 15
        }]
      }
    ]
  },
  options: {
    // responsive: true,
    legend: {
      position: 'bottom',
      // display: false
    },
    title: {
      display: true,
      text: 'My confident against experience working with below tech '
    },
    scales: {
      yAxes: [{
        gridLines: {
          display: false
        },
        scaleLabel: {
          display: true,
          labelString: "Confident"
        },
        ticks: {
          max: 100,
          min: 60
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        },
        scaleLabel: {
          display: true,
          labelString: "Experience"
        },
        ticks: {
          max: 90,
          min: 60
        }
      }]
    }
  }
});