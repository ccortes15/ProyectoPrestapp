import { Input, Row, Col } from 'antd';
import { ChangeEvent, FC, Fragment, useState } from 'react';
import { inputStyle } from './styles/Styles';
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
    label: string;
    value: string;
}

interface DataToSend {
    id: string;
    data: SendData[];
}

const Clientes: FC = () => {
    const [searchValue, setSearch] = useState<string>('texto de prueba');

    const onSearch = (value: string): void => {
        setSearch(value)
    }

    const getDeudas = (): Cliente[] => {
        const dataDeuda: Cliente[] = []
        for (let i = 0; i < 20; i++) {
            dataDeuda.push(
                {
                    firstName: `carlos adrian`,
                    lastName: `cortes melendez`,
                    address: 'v. bonfil #398',
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
                            label: 'Domicilio',
                            value: v.address
                        },
                        {
                            label: 'Teléfono',
                            value: v.phone
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
                    <MenuSidebar isCliente />
                </Col>
                <Col span={19}>
                    <Input 
                        style={inputStyle}
                        placeholder="Buscar cliente por: (Nombre, Teléfono, Correo, Domicilio)"
                        id="1"
                        onChange={(e: ChangeEvent<HTMLInputElement>): void => onSearch(e.target.value)} />

                    <ContentList data={dataToSend()} typeContent="cliente" />
                </Col>
            </Row>
        </Fragment >
    )
}

export default Clientes;