import { Input, Row, Col } from 'antd';
import { ChangeEvent, FC, Fragment, useState } from 'react';
import { inputStyle } from './styles/Styles';
import MenuProyecciones from './sidebar/MenuProyeccion';
import ListProyecciones from './list/ProyeccionesList';

const Proyecciones: FC = () => {
    const [searchValue, setSearch] = useState<string>('texto de prueba');

    const onSearch = (value: string): void => {
        setSearch(value)
    }

    console.log(searchValue);

    return (
        <Fragment>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={6}>
                    <MenuProyecciones />
                </Col>
                <Col span={18}>
                    <Input 
                        style={inputStyle}
                        placeholder="Buscar proyección"
                        id="1"
                        onChange={(e: ChangeEvent<HTMLInputElement>): void => onSearch(e.target.value)} />
                    <ListProyecciones />
                </Col>
            </Row>
        </Fragment >
    )
}

export default Proyecciones;