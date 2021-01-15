import { FC } from "react";
import { Doughnut } from 'react-chartjs-2';

const DoughChart: FC = () => {
    const data = {
        labels: ['Ropa', 'Comida', 'Perfumes', 'Efectivo'],
        datasets: [
            {
                data: [4,3,1,2],
                backgroundColor: ['#0055F0', '#5D0BD9', '#F000A7', '#E63000'],
            }
        ]
    }

    const options = {
        title: {
            display: true,
            text: 'Ingresos por etiqueta'
        }
    }

    return(
        <Doughnut data={data} options={options} />
    )
}

export default DoughChart;