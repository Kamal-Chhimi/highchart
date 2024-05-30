import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsAccessibility from 'highcharts/modules/accessibility';

HighchartsMore(Highcharts);
HighchartsAccessibility(Highcharts);

const TemperatureVariationChart = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        fetch('/chartsData.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setChartData(data.temperatureVariation))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        if (chartData) {
            Highcharts.chart('temperature-container', {
                chart: {
                    type: 'columnrange',
                    inverted: true,
                },
                accessibility: {
                    description: 'Image description: A column range chart compares the monthly temperature variations throughout 2021 in Vik i Sogn, Norway. The chart is interactive and displays the temperature range for each month when hovering over the data. The temperature is measured in degrees Celsius on the X-axis and the months are plotted on the Y-axis. The lowest temperature is recorded in February at minus 16.7 Celsius. The lowest range of temperatures is found in March ranging from a low of minus 4.7 to a high of 11.6 Celsius. The highest temperature is found in June at 29.4 Celsius. May has the highest range of temperatures from minus 2.5 to 27.2 Celsius. The broadest range of temperatures is also found in May ranging from a low of minus 2.1 to a high of 27.2 Celsius.',
                },
                title: {
                    text: chartData.title,
                    style: {
                        fontSize: '2.5vh',
                    },
                },
                subtitle: {
                    text: `${chartData.subtitle} | Source: <a href="https://www.vikjavev.no/ver/" target="_blank">Vikjavev</a>`,
                    style: {
                        fontSize: '0vh',
                    },
                },
                xAxis: {
                    categories: chartData.categories,
                    labels: {
                        style: {
                            fontSize: '1.5vh',
                        },
                    },
                },
                yAxis: {
                    title: {
                        text: 'Temperature ( °C )',
                        style: {
                            fontSize: '2vh',
                        },
                    },
                    labels: {
                        style: {
                            fontSize: '1.5vh',
                        },
                    },
                },
                tooltip: {
                    valueSuffix: '°C',
                    style: {
                        fontSize: '1.5vh',
                    },
                },
                plotOptions: {
                    columnrange: {
                        borderRadius: '50%',
                        dataLabels: {
                            enabled: true,
                            format: '{y}°C',
                            style: {
                                fontSize: '1.5vh',
                            },
                        },
                    },
                },
                legend: {
                    enabled: false,
                },
                series: [{
                    name: 'Temperatures',
                    data: chartData.series,
                }],
            });
        }
    }, [chartData]);

    if (!chartData) {
        return <div>Loading...</div>;
    }

    return (
        <div id="temperature-container" style={{ height: '100%', width: '100%' }}>
            <HighchartsReact highcharts={Highcharts} />
        </div>
    );
};

export default TemperatureVariationChart;
