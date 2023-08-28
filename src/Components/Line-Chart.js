// LineChart.js
import React from 'react';
import './Line-Chart.css';
import ReactApexChart from 'react-apexcharts';


function LineChart(props) {
    
    return (
        <div className="lineChart">
            <ReactApexChart options={props.options} series={props.series} type="line" width="450" />
        </div>
    );
}

export default LineChart;

