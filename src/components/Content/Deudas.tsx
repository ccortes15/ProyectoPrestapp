import { Row, Col } from 'antd';
import { FC, Fragment } from 'react';
import MenuSidebar from './sidebar/MenuSidebar';
import Filtros from './sidebar/items/Filtros';
import ContentList from './list/ContentList';

interface Deudas {
    debtor?: string;
    title?: string;
    description?: string;
    totalAmount?: number;
    estimateDueDate?: string;
    paymentFrecuency?: string;
    labels?: string[];
}

interface SendData {
    label: string;
    value: string;
}

interface DataToSend {
    id: string;
    data: SendData[];
}

const Deudas: FC = () => {
    let count:number = 0;

    const getDeudas = (): Deudas[] => {
        const dataDeuda: Deudas[] = []
        for (let i = 0; i < 20; i++) {
            dataDeuda.push(
                {
                    debtor: `adrian ${i}`,
                    title: `deuda ${i}`,
                    description: 'deuda super chida',
                    totalAmount: 25000,
                    estimateDueDate: '08/01/2020',
                    paymentFrecuency: 'semanal',
                    labels: ['nice', 'nike', 'adidas']
                }
            )
        }

        return dataDeuda;
    }

    const dataToSend = (): DataToSend[] => {
        const dataDeuda = getDeudas();
        const values: DataToSend[] = []
        for (let v of dataDeuda) {
            values.push({
                id: `${count++}`,
                data: [
                        {
                            label: 'Nombre deudor',
                            value: v.debtor
                        },
                        {
                            label: 'Total de pagos ',
                            value: `${5} de ${10}`
                        },
                        {
                            label: 'Estatus',
                            value: v.estimateDueDate
                        },
                        {
                            label: 'Cantidad total pagada',
                            value: `$ ${v.totalAmount}`
                        }
                    ]
                }
            )
        }

        return values;
    }

    return (
        <Fragment>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={5}>
                    <MenuSidebar>
                        <Filtros />
                    </MenuSidebar>
                </Col>
                <Col span={19}>
                    <ContentList data={dataToSend()} typeContent="deuda" />
                </Col>
            </Row>
        </Fragment >
    )
}

export default Deudas;