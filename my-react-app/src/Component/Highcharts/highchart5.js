import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const EmissionsChart = ({ chartKey }) => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        fetch('/chartsData.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setChartData(data.emissionsChart))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    if (!chartData) {
        return <div>Loading...</div>;
    }

    const chartOptions = {
        chart: {
            type: 'area',
            style: {
                fontFamily: 'Arial, sans-serif',
                height: '100%',
            },
        },
        title: {
            useHTML: true,
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
        accessibility: {
            point: {
                valueDescriptionFormat: '{index}. {point.category}, {point.y:,.1f} billions, {point.percentage:.1f}%.',
            },
        },
        yAxis: {
            labels: {
                format: '{value}%',
                style: {
                    fontSize: '1.5vh',
                },
            },
            title: {
                enabled: false,
            },
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.1f} billion Gt)<br/>',
            split: true,
            style: {
                fontSize: '1.5vh',
            },
        },
        plotOptions: {
            series: {
                pointStart: 1990,
            },
            area: {
                stacking: 'percent',
                marker: {
                    enabled: false,
                },
            },
        },
        series: chartData.series,
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

export default EmissionsChart;
