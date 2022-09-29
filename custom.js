// // LINE CHART 1
// const labels = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
// ];

// const data = {
//   labels: labels,
//   datasets: [{
//     label: 'My First dataset',
//     backgroundColor: 'rgb(255, 99, 132)',
//     borderColor: 'rgb(255, 99, 132)',
//     data: [0, 10, 5, 2, 20, 30, 45],
//   }]
// };

// const config = {
//   type: 'line',
//   data: data,
//   options: {}
// };

// const myChart = new Chart(
//   document.getElementById('myChart'),
//   config
// );

// // LINE CHART 2
// const labelsLine1 = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
// ];

// const dataLine1 = {
//   labels: labelsLine1,
//   datasets: [{
//     label: 'My First dataset',
//     backgroundColor: 'rgb(255, 99, 132)',
//     borderColor: 'rgb(255, 99, 132)',
//     data: [0, 10, 5, 2, 20, 30, 45],
//   }]
// };

// const configLine1 = {
//   type: 'line',
//   data: dataLine1,
//   options: {}
// };

// const mychartLine1 = new Chart1(
//     document.getElementById('mychartLine1'),
//     configLine1
// );

// // DOUGHNUT 1 
// const data1 = {
//     labels: [
//       'Red',
//       'Blue',
//       'Yellow'
//     ],
//     datasets: [{
//       label: 'My First Dataset',
//       data: [300, 50, 100],
//       backgroundColor: [
//         'rgb(255, 99, 132)',
//         'rgb(54, 162, 235)',
//         'rgb(255, 205, 86)'
//       ],
//       hoverOffset: 4
//     }]
// };

// const config1 = {
//     type: 'doughnut',
//     data: data1,
    
//     responsive: false,
//     maintainAspectRatio: false,
// };
// const mychart1 = new chart1(
//     document.getElementById("doughnut1"), config1
// )

const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');

const ctx3 = document.getElementById('doChart');
const ctx4 = document.getElementById('doChart2');
const ctx5 = document.getElementById('doChart3');
const ctx6 = document.getElementById('doChart4');

const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      borderWidth: 1,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'blue',
    }]
  },
});

const myChart2 = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      borderWidth: 1,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
    }]
  },
});

const doChart = new Chart(ctx3,{
  type: 'doughnut',
  data: {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  },
});

const doChart2 = new Chart(ctx4,{
  type: 'doughnut',
  data: {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  },
});

const doChart3 = new Chart(ctx5,{
  type: 'doughnut',
  data: {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  },
});

const doChart4 = new Chart(ctx6,{
  type: 'doughnut',
  data: {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  },
});