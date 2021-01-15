import { FC } from "react";
import { Line } from 'react-chartjs-2';

const LineChart: FC = () => {
    const data = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [
            {
                label: '2020',
                data: [10000, 9500, 8000, 8500, 8000, 9000, 9000, 9500, 10000, 13000, 12500, 11000],
                pointBackgroundColor: '#011159',
                borderColor: '#0C5951',
            },
            {
                label: '2019',
                data: [3000, 4000, 5000, 4500, 5000, 6000, 6000, 6500, 7000, 6000, 6500, 9000],
                pointBackgroundColor: '#590401',
                borderColor: '#F23D38',
            },
            {
                label: '2018',
                data: [2000, 2500, 3500, 3500, 3000, 3000, 4000, 5500, 3500, 4000, 3000, 4000],
                pointBackgroundColor: '#013759',
                borderColor: '#148EDB',
            },
        ]
    }

    const options = {
        title: {
            display: true,
            text: 'Ingresos por año'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 15000,
                        stepSize: 1000
                    }
                }
            ]
        }
    }

    return(
        <Line data={data} options={options} />
    )
}

export default LineChart;