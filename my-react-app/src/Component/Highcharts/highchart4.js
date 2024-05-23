import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const pieChartOptions = {
  chart: {
    type: 'pie'
  },
  title: {
    text: 'Pie Chart',
    style: {
      fontSize: '2vh', // Change the font size of the title
    },
  },
  xAxis: {
    labels: {
      style: {
        fontSize: '2vh', // Change the font size of the x-axis labels
      },
    },
  },
  yAxis: {
    labels: {
      style: {
        fontSize: '3vh', // Change the font size of the y-axis labels
      },
    },
    title: {
      style: {
        fontSize: '2vh', // Change the font size of the y-axis title
      },
    },
  },
  legend: {
    itemStyle: {
      fontSize: '2vh', // Change the font size of the legend items
    },
  },
  series: [{
    data: [
      { name: 'A', y: 30 },
      { name: 'B', y: 20 },
      { name: 'C', y: 50 }
    ],
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '2vh', // Change the font size of the data labels
      },
    },
  }],
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '2vh', // Change the font size of the pie data labels
        },
      },
    },
    series: {
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '2vh', // Change the font size of data labels globally
        },
      },
    },
  },
};

const MyPieChart = () => (
  <div style={{ width: '100%', height: '90%' }}>
    <HighchartsReact
      highcharts={Highcharts}
      options={pieChartOptions}
      containerProps={{ style: { width: '100%', height: '95%' } }}
    />
  </div>
);

export default MyPieChart;
