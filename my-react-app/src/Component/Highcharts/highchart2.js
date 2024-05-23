import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const lineChartOptions = {
  title: {
    text: 'Line Chart',
    style: {
      fontSize: '3vh', // Change the font size of the title
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
        fontSize: '2vh', // Change the font size of the y-axis labels
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
  series: [
    {
      type: 'line',
      data: [1, 2, 3, 4, 5],
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '2vh', // Change the font size of the data labels
        },
      },
    },
  ],
  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '2vh', // Change the font size of the data labels
        },
      },
    },
  },
};

const MyLineChart = () => (
  <div style={{ width: '100%', height: '90%' }}>
    <HighchartsReact
      highcharts={Highcharts}
      options={lineChartOptions}
      containerProps={{ style: { width: '100%', height: '95%' } }}
    />
  </div>
);

export default MyLineChart;
