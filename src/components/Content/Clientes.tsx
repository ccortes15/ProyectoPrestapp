import { Row, Col, Tag } from 'antd';
import { FC, Fragment, ReactNode } from 'react';
import {HomeOutlined, PhoneOutlined, MailOutlined} from '@ant-design/icons';
import MenuSidebar from './sidebar/MenuSidebar';
import ContentList from './list/ContentList';
import {capitalizeName} from './functions/Functions';

interface Cliente {
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    alias: string;
    phone: string;
}

interface SendData {
    label: ReactNode;
    value: string;
}

interface DataToSend {
    id: string;
    data: SendData[];
}

const Clientes: FC = () => {
    const getDeudas = (): Cliente[] => {
        const dataDeuda: Cliente[] = []
        for (let i = 0; i < 20; i++) {
            dataDeuda.push(
                {
                    firstName: `carlos adrian`,
                    lastName: `cortes melendez`,
                    address: 'address #198',
                    email: 'ccortes15@ucol.mx',
                    alias: 'adrianCo',
                    phone: '1234567890',
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
                id: capitalizeName(v.firstName + ' ' + v.lastName),
                data: [
                        {
                            label: <Tag style={{fontSize: 14, fontWeight: 'bolder', color: '#095457'}}>
                                <HomeOutlined style={{marginRight: 2}} />Domicilio
                            </Tag>,
                            value: v.address
                        },
                        {
                            label: <Tag style={{fontSize: 14, fontWeight: 'bolder', color: '#095457'}}>
                            <PhoneOutlined style={{marginRight: 2}} />Teléfono
                            </Tag>,
                            value: v.phone
                        },
                        {
                            label: <Tag style={{fontSize: 14, fontWeight: 'bolder', color: '#095457'}}>
                            <MailOutlined style={{marginRight: 2}} />Correo
                            </Tag>,
                            value: v.email
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
                    <MenuSidebar isCliente />
                </Col>
                <Col lg={{span: 18, offset: 1}} xs={{span: 24}}>
                    <ContentList data={dataToSend()} typeContent="cliente" />
                </Col>
            </Row>
        </Fragment >
    )
}

export default Clientes;