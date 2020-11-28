import { Input, Row, Col } from 'antd';
import { ChangeEvent, FC, Fragment, useState } from 'react';
import { inputStyle } from './styles/Styles';
import MenuSidebar from './sidebar/MenuSidebar';
import Filtros from './sidebar/items/Filtros';
import ContentList from './list/ContentList';

const Pagos: FC = () => {
    const [searchValue, setSearch] = useState<string>('texto de prueba');

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
                    <ContentList />
                </Col>
            </Row>
        </Fragment >
    )
}

export default Pagos;