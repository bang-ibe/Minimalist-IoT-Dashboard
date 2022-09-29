const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');

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