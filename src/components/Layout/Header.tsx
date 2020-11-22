import { Menu, Row, Col } from 'antd';
import { PlusOutlined, NotificationOutlined, UserOutlined, UserAddOutlined, SettingOutlined, LogoutOutlined, HistoryOutlined } from '@ant-design/icons';
import { Fragment, FC } from 'react';
import FormContainer from '../Drawer/FormContainer';
import ClientItem from './../Drawer/Items/ClientItem'
import DebtItem from './../Drawer/Items/DebtItem'
import PaymentItem from './../Drawer/Items/PaymentItem'

const {SubMenu} = Menu;

const Header: FC = () => {
    return (
        <Fragment>
            <Row>
                <Col flex="100px">
                    Logo
                </Col>
                <Col flex="auto">
                    <Row justify="end">
                        <Col>
                            <Menu theme="light" mode="horizontal" style={{ float: 'right' }}>
                                <SubMenu title="Agregar" key="add" icon={<PlusOutlined />}>
                                    <Menu.Item key="addDebt" icon={<PlusOutlined />}>
                                        <FormContainer transcType = {"Deuda"} ao = {"a"}>
                                            <DebtItem/>
                                        </FormContainer>
                                    </Menu.Item>
                                    <Menu.Item key="addPay" icon={<PlusOutlined />}>
                                        <FormContainer transcType = {"Pago"} ao = {"o"}>
                                            <PaymentItem/>
                                        </FormContainer>
                                    </Menu.Item>
                                    <Menu.Item key="addClient" icon={<UserAddOutlined />}>
                                        <FormContainer transcType = {"Cliente"} ao = {"o"}>
                                            <ClientItem/>
                                        </FormContainer>
                                    </Menu.Item>
                                </SubMenu>
                                <Menu.Item key="notification" icon={<NotificationOutlined/>}>
                                    Notificaciones
                                </Menu.Item>
                                <SubMenu title="Usuario" key="user" icon={<UserOutlined/>}>
                                    <Menu.Item key="config" icon={<SettingOutlined />}>
                                        Configuración
                                    </Menu.Item>
                                    <Menu.Item key="addPay" icon={<HistoryOutlined />}>
                                        Historial
                                    </Menu.Item>
                                    <Menu.Item key="addClient" icon={<LogoutOutlined />}>
                                        Cerrar sesión
                                    </Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Fragment>
    )
}

export default Header;