import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsFullscreen from 'highcharts/modules/full-screen';
import highchartsExportData from 'highcharts/modules/export-data'; 
import HighchartsAccessibility from 'highcharts/modules/accessibility';
import HighchartsOfflineExporting from 'highcharts/modules/offline-exporting';
import HighchartsColorAccessibility from 'highcharts/modules/accessibility';
import '../../App.css';

HighchartsColorAccessibility(Highcharts);
HighchartsOfflineExporting(Highcharts);
HighchartsAccessibility(Highcharts);
highchartsExportData(Highcharts);
HighchartsExporting(Highcharts);
HighchartsFullscreen(Highcharts);

const ColumnChartWithNegativeValues = ({ chartKey }) => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        fetch('/chartsData.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setChartData(data.columnChartWithNegativeValues))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    if (!chartData) {
        return <div>Loading...</div>;
    }

    const chartOptions = {
        chart: {
            type: 'column'
        },
        title: {
            text: chartData.title,
            style: {
                fontSize: '2.5vh'
            }
        },
        xAxis: {
            categories: chartData.categories,
            labels: {
                style: {
                    fontSize: '1.8vh'
                }
            }
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            column: {
                borderRadius: '25%'
            }
        },
        series: chartData.series
    };

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}
                containerProps={{ style: { height: '100%', width: '100%' } }}
            />
        </div>
    );
};

export default ColumnChartWithNegativeValues;
