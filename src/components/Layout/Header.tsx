import { Menu, Row, Col } from 'antd';
import { PlusOutlined, NotificationOutlined, UserOutlined, UserAddOutlined, SettingOutlined, LogoutOutlined, HistoryOutlined, SearchOutlined } from '@ant-design/icons';
import { Fragment, FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
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
                                <Menu.Item key="search" icon={<SearchOutlined/>} />
                                <SubMenu title="Agregar" key="add" icon={<PlusOutlined />}>
                                    <Menu.Item key="addDebt" icon={<PlusOutlined />}>
                                        Agregar deuda
                                    </Menu.Item>
                                    <Menu.Item key="addPay" icon={<FontAwesomeIcon style={{marginRight:"15px"}} icon = {faDollarSign}/>}>
                                        <FormContainer transcType = {"pago"} ao = {"o"}>
                                            <PaymentItem/>
                                        </FormContainer>
                                    </Menu.Item>
                                    <Menu.Item key="addClient" icon={<UserAddOutlined />}>
                                        <FormContainer transcType = {"cliente"} ao = {"o"}>
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