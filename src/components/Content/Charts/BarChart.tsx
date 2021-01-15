import { FC } from "react";
import { Bar } from 'react-chartjs-2';

const BarChart: FC = () => {
    const data = {
        labels: ['2018', '2019', '2020'],
        datasets: [
            {
                label: 'Ropa',
                data: [10000, 9500, 8000],
                backgroundColor: '#0055F0',
            },
            {
                label: 'Comida',
                data: [3000, 4000, 5000],
                backgroundColor: '#5D0BD9',
            },
            {
                label: 'Efectivo',
                data: [2000, 2500, 3500],
                backgroundColor: '#F000A7',
            },
            {
                label: 'Perfumes',
                data: [2000, 2500, 3500],
                backgroundColor: '#E63000',
            },
        ]
    }

    const options = {
        title: {
            display: true,
            text: 'Ingreso anual por etiqueta'
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
        <Bar data={data} options={options} />
    )
}

export default BarChart;