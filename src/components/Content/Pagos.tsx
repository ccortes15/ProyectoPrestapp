import { Input, Row, Col } from 'antd';
import { ChangeEvent, FC, Fragment, useState } from 'react';
import { inputStyle } from './styles/Styles';
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
    label: string;
    value: string;
}

interface DataToSend {
    id: string;
    data: SendData[];
}

const Pagos: FC = () => {
    const [searchValue, setSearch] = useState<string>('texto de prueba');
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
                            label: 'Nombre deudor',
                            value: v.debtor
                        },
                        {
                            label: 'Deuda correspondiente',
                            value: v.owner
                        },
                        {
                            label: 'Cantidad',
                            value: `$ ${v.amount}`
                        },
                        {
                            label: 'Fecha de pago',
                            value: v.paidAt
                        }
                    ]
                }
            )
        }

        return values;
    }

    const onSearch = (value: string): void => {
        setSearch(value)
    }

    return (
        <Fragment>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={5}>
                    <MenuSidebar>
                        <Filtros isPago />
                    </MenuSidebar>
                </Col>
                <Col span={19}>
                    <Input 
                        style={inputStyle}
                        placeholder="Buscar pago"
                        id="1"
                        onChange={(e: ChangeEvent<HTMLInputElement>): void => onSearch(e.target.value)} />
                    <ContentList data={dataToSend()} typeContent="pago" />
                </Col>
            </Row>
        </Fragment >
    )
}

export default Pagos;