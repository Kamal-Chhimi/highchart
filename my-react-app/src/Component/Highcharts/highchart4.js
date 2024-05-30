import React, { useEffect, useRef, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PieChartResponsive = ({ chartKey }) => {
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
            .then(data => setChartData(data.pieChart))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    if (!chartData) {
        return <div>Loading...</div>;
    }

    const chartOptions = {
        chart: {
            type: 'pie'
        },
        title: {
            text: chartData.title,
            style: {
                fontSize: '2.5vh'
            }
        },
        subtitle: {
            text: chartData.subtitle,
            style: {
                fontSize: '0vh'
            }
        },
        tooltip: {
            valueSuffix: '%'
        },
        plotOptions: {
            series: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: [{
                    enabled: true,
                    distance: 20,
                    style: {
                        fontSize: '1.5vh'
                    }
                }, {
                    enabled: true,
                    distance: -40,
                    format: '{point.percentage:.1f}%',
                    style: {
                        fontSize: '1.2vh',
                        textOutline: 'none',
                        opacity: 0.7
                    },
                    filter: {
                        operator: '>',
                        property: 'percentage',
                        value: 10
                    }
                }]
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

export default PieChartResponsive;
