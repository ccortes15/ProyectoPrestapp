import { Row, Col, Tag } from 'antd';
import { FC, Fragment, ReactNode} from 'react';
import {UserOutlined, DollarOutlined, IdcardOutlined, CalendarOutlined } from '@ant-design/icons';
import MenuSidebar from './sidebar/MenuSidebar';
import Filtros from './sidebar/items/Filtros';
import ContentList from './list/ContentList';

interface Pagos {
    debtor: string;
    owner: string;
    amount: number;
    paidAt: string;
    paymentReceipts: string[];
}

interface SendData {
    label: ReactNode;
    value: string;
}

interface DataToSend {
    id: string;
    data: SendData[];
}

const Pagos: FC = () => {
    let count = 0;

    const getDeudas = (): Pagos[] => {
        const dataDeuda: Pagos[] = []
        for (let i = 0; i < 20; i++) {
            dataDeuda.push(
                {
                    debtor: `adrian ${i}`,
                    owner: `deuda ${i}`,
                    amount: 25000,
                    paidAt: '01/08/2012',
                    paymentReceipts: ['recibo1', 'recibo2', 'recibo3'],
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
                                <IdcardOutlined style={{marginRight: 2}} />Deuda correspondiente
                            </Tag>,
                            value: v.owner
                        },
                        {
                            label: <Tag style={{fontSize: 14, fontWeight: 'bolder', color: '#095457'}}>
                                <DollarOutlined style={{marginRight: 2}} />Cantidad
                            </Tag>,
                            value: `$ ${v.amount}`
                        },
                        {
                            label: <Tag style={{fontSize: 14, fontWeight: 'bolder', color: '#095457'}}>
                                <CalendarOutlined style={{marginRight: 2}} />Fecha de pago
                            </Tag>,
                            value: v.paidAt
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
                        <Filtros isPago />
                    </MenuSidebar>
                </Col>
                <Col lg={{span: 18, offset: 1}} xs={{span: 24}}>
                    <ContentList data={dataToSend()} typeContent="pago" />
                </Col>
            </Row>
        </Fragment >
    )
}

export default Pagos;