import React from 'react';
import ReactApexChart from 'react-apexcharts';

function Chart(props) {
    return (
        <div className="chart">
            <ReactApexChart
                options={props.options}
                series={props.series}
                type="pie"
                width="335"
            />
        </div>
    );
}

export default Chart;
