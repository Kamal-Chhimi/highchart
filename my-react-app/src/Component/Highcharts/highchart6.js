import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
  chart: {
    polar: true
  },
  title: {
    text: 'My Polar Chart',
    style: {
      fontSize: '3vh' // Set font size for the title
    }
  },
  xAxis: {
    categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    tickmarkPlacement: 'on',
    lineWidth: 0,
    labels: {
      style: {
        fontSize: '1.2vh' // Set font size for x-axis labels
      }
    }
  },
  yAxis: {
    gridLineInterpolation: 'polygon',
    lineWidth: 0,
    min: 0,
    labels: {
      style: {
        fontSize: '2vh' // Set font size for y-axis labels
      }
    },
    title: {
      style: {
        fontSize: '2vh' // Set font size for y-axis title (if used)
      }
    }
  },
  legend: {
    itemStyle: {
      fontSize: '2vh' // Set font size for legend items
    }
  },
  series: [{
    name: 'Sales',
    data: [43000, 19000, 60000, 35000, 17000, 10000, 14000],
    pointPlacement: 'on',
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '2vh' // Set font size for data labels
      }
    }
  }],
  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '2vh' // Set font size for series data labels
        }
      }
    }
  }
}

const MyPolarChart = () => (
  <div style={{ width: '100%', height: '90%' }}>
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      containerProps={{ style: { width: '100%', height: '95%' } }}
    />
  </div>
)

export default MyPolarChart
