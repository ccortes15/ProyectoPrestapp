import { Row, Col, Tag } from 'antd';
import { FC, Fragment, ReactNode } from 'react';
import {UserOutlined, DollarOutlined, NumberOutlined, CalendarOutlined } from '@ant-design/icons';
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
    label: ReactNode;
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
                            label: <Tag style={{fontSize: 14, fontWeight: 'bolder', color: '#095457'}}>
                                <UserOutlined style={{marginRight: 2}} />Nombre deudor
                                </Tag>,
                            value: v.debtor
                        },
                        {
                            label: <Tag style={{fontSize: 14, fontWeight: 'bolder', color: '#095457'}}>
                                <NumberOutlined style={{marginRight: 2}} />Total de pagos
                            </Tag>,
                            value: `${5} de ${10}`
                        },
                        {
                            label: <Tag style={{fontSize: 14, fontWeight: 'bolder', color: '#095457'}}>
                            <CalendarOutlined style={{marginRight: 2}} />Fecha de deuda
                            </Tag>,
                            value: v.estimateDueDate
                        },
                        {
                            label: <Tag style={{fontSize: 14, fontWeight: 'bolder', color: '#095457'}}>
                                <DollarOutlined style={{marginRight: 2}} />Cantidad total pagada
                            </Tag>,
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
            <Row>
                <Col lg={{span: 5}} xs={{span: 24}} style={{marginBottom: 8}}>
                    <MenuSidebar>
                        <Filtros />
                    </MenuSidebar>
                </Col>
                <Col lg={{span: 18, offset: 1}} xs={{span: 24}}>
                    <ContentList data={dataToSend()} typeContent="deuda" />
                </Col>
            </Row>
        </Fragment >
    )
}

export default Deudas;