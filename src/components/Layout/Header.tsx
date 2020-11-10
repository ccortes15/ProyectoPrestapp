import { Menu, Row, Col } from 'antd';
import { PlusOutlined, NotificationOutlined, UserOutlined, UserAddOutlined, SettingOutlined, LogoutOutlined, HistoryOutlined } from '@ant-design/icons';
import { Fragment, FC } from 'react';

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
                            <Menu theme="dark" mode="horizontal" style={{ float: 'right' }}>
                                <SubMenu title="Agregar" key="add" icon={<PlusOutlined />}>
                                    <Menu.Item key="addDebt" icon={<PlusOutlined />}>
                                        Agregar deuda
                                    </Menu.Item>
                                    <Menu.Item key="addPay" icon={<PlusOutlined />}>
                                        Agregar pago
                                    </Menu.Item>
                                    <Menu.Item key="addClient" icon={<UserAddOutlined />}>
                                        Agregar cliente
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