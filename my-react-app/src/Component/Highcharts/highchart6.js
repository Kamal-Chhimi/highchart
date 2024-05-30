import React, { useEffect, useRef, useState } from 'react';
import Highcharts from 'highcharts';
import Highcharts3D from 'highcharts/highcharts-3d';
import HighchartsReact from 'highcharts-react-official';

// Initialize the 3D module
Highcharts3D(Highcharts);

const PieChart3DResponsive = ({ chartKey }) => {
    const [chartData, setChartData] = useState(null);
    const chartRef = useRef(null);

    
    useEffect(() => {
        const handleResize = () => {
            if (chartRef.current) {
                chartRef.current.chart.reflow();
            }
        };
        
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        fetch('/chartsData.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setChartData(data.pieChart3D))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    
    if (!chartData) {
        return <div>Loading...</div>;
    }

    const chartOptions = {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            },
        },
        title: {
            text: chartData.title,
            align: 'center',
            style: {
                fontSize: '2.5vh'
            }
        },
        subtitle: {
            text: chartData.subtitle,
            align: 'left',
            style: {
                fontSize: '0vh'
            }
        },
        plotOptions: {
            pie: {
                innerSize: 100,
                depth: 45,
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.y}',
                    style: {
                        fontSize: '1.7vh'
                    }
                }
            }
        },
        series: chartData.series
    };

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}
                ref={chartRef}
                containerProps={{ style: { height: '100%', width: '100%' } }}
            />
        </div>
    );
};

export default PieChart3DResponsive;
