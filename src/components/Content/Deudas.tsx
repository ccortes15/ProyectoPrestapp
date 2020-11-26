import { Input, Row, Col } from 'antd';
import { ChangeEvent, FC, Fragment, useState } from 'react';
import { inputStyle } from './styles/Styles';
import MenuDeudas from './sidebar/MenuDeuda';
import ContentList from './list/ContentList';

const Deudas: FC = () => {
    const [searchValue, setSearch] = useState<string>('texto de prueba');

    const onSearch = (value: string): void => {
        setSearch(value)
    }

    console.log(searchValue);

    return (
        <Fragment>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={5}>
                    <MenuDeudas />
                </Col>
                <Col span={19}>
                    <Input 
                        style={inputStyle}
                        placeholder="Buscar deuda"
                        id="1"
                        onChange={(e: ChangeEvent<HTMLInputElement>): void => onSearch(e.target.value)} />
                    <ContentList />
                </Col>
            </Row>
        </Fragment >
    )
}

export default Deudas;