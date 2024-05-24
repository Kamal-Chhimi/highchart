import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
  chart: {
    polar: true,
    animation: true, // Enable chart animation
    events: {
      selection: function (event) {
        // Handle selection start event
        console.log('Selection start:', event.xAxis[0].min, event.xAxis[0].max);
      },
      selectionEnd: function (event) {
        // Handle selection end event
        console.log('Selection end:', event.xAxis[0].min, event.xAxis[0].max);
      }
    }
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
    lineWidth: 1,
    labels: {
      style: {
        fontSize: '1.4vh' // Set font size for x-axis labels
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
        fontSize: '1.5vh' // Set font size for data labels
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






// You can add various user interactions to your Highcharts polar chart to enhance its functionality. Here are some ideas:

// Tooltip: Add a tooltip to display additional information when users hover over data points. This can provide more context about the data being displayed.

// Clickable Data Points: Allow users to click on data points to trigger actions or show more detailed information in a modal or a separate component.

// Zooming: Enable users to zoom in on specific areas of the chart for a more detailed view. This can be particularly useful for charts with a lot of data points.

// Exporting: Add a button or menu option to allow users to export the chart as an image or a PDF for sharing or further analysis.

// Dynamic Data: Allow users to dynamically change the data displayed in the chart, either by selecting different datasets or by adjusting filters.

// Annotations: Allow users to add annotations to the chart to highlight important points or trends.

// Interactive Legend: Make the legend interactive so users can show or hide specific series on the chart.

// Drilldown: Implement drilldown functionality to allow users to explore hierarchical data by clicking on chart elements to reveal more detailed information.

// Here's an example of how you might add a tooltip to your chart:

// jsx
// Copy code
// const options = {
//   // Existing chart options...
//   tooltip: {
//     shared: true,
//     formatter: function () {
//       return `Sales on ${this.x}: ${this.y}`;
//     }
//   }
// };
// This tooltip will display the sales value for each day when the user hovers over a data point. You can customize the tooltip content and appearance to fit your needs.