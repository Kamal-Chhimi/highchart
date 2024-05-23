import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const areaChartOptions = {
  chart: {
    type: 'area'
  },
  title: {
    text: 'Area Chart',
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
  series: [{
    data: [3, 2, 5, 4, 6],
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '2vh', // Change the font size of the data labels
      },
    },
  }],
  plotOptions: {
    area: {
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '2vh', // Change the font size of the area data labels
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

const MyAreaChart = () => (
  <div style={{ width: '100%', height: '90%' }}>
    <HighchartsReact
      highcharts={Highcharts}
      options={areaChartOptions}
      containerProps={{ style: { width: '100%', height: '95%' } }}
    />
  </div>
);

export default MyAreaChart;
