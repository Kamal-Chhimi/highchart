import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsFullscreen from 'highcharts/modules/full-screen';
import highchartsExportData from 'highcharts/modules/export-data';

highchartsExportData(Highcharts);
HighchartsExporting(Highcharts);
HighchartsFullscreen(Highcharts);

const MyColumnChart = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        fetch('/chartsData.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setChartData(data.cornVsWheat))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    if (!chartData) {
        return <div>Loading...</div>;
    }

    const options = {
        chart: {
            type: 'column',
            // Ensure the chart takes the full height of the container
        },
        title: {
            text: chartData.title,
            align: 'center',
            style: {
                fontSize: '2.5vh',
            },
        },
        subtitle: {
            text: chartData.subtitle,
            align: 'left',
            style: {
                fontSize: '0vh',
            },
        },
        xAxis: {
            categories: chartData.categories,
            crosshair: true,
            labels: {
                style: {
                    fontSize: '1.9vh',
                },
            },
            accessibility: {
                description: 'Countries',
            },
        },
        yAxis: {
            min: 0,
            title: {
                text: '1000 metric tons',
                style: {
                    fontSize: '1.9vh',
                },
            },
            labels: {
                style: {
                    fontSize: '1.9vh',
                },
            },
        },
        tooltip: {
            valueSuffix: ' (1000 MT)',
            style: {
                fontSize: '1.5vh',
            },
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
            },
        },
        series: chartData.series.map(serie => ({
            ...serie,
            dataLabels: {
                enabled: true,
                style: {
                    fontSize: '1.5vh',
                },
            },
        })),
        exporting: {
            enabled: true, // Enable exporting to allow users to export the chart
        },
        navigation: {
            buttonOptions: {
                enabled: true, // Enable fullscreen button for better chart interaction
            },
        },
    };

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
                containerProps={{ style: { width: '100%', height: '100%' } }}
            />
        </div>
    );
};

export default MyColumnChart;
