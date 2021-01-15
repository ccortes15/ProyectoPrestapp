import { Menu, Row, Col } from 'antd';
import { PlusOutlined, NotificationOutlined, UserOutlined, UserAddOutlined, SettingOutlined, LogoutOutlined, HistoryOutlined, SearchOutlined } from '@ant-design/icons';
import { Fragment, FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import FormContainer from '../Drawer/FormContainer';
import ClientItem from './../Drawer/Items/ClientItem'
import DebtItem from './../Drawer/Items/DebtItem'
import PaymentItem from './../Drawer/Items/PaymentItem'
import Link from 'next/link';
import styles from './styles/Styles.module.css'
import Title from 'antd/lib/typography/Title';

const { SubMenu } = Menu;

const Header: FC = () => {
    return (
        <Fragment>
            <Row justify="space-between">
                <Col xl={{ span: 4, offset: 0 }} lg={{ span: 4, offset: 1 }} md={{ span: 4, offset: 1 }} sm={{ span: 20, offset: 0 }} xs={{ span: 20, offset: 0 }}>
                    <Title style={{ color: 'white' }}>Finanset</Title>
                </Col>
                <Col xl={{ span: 7, offset: 0 }} lg={{ span: 8, offset: 0 }} md={{ span: 8, offset: 0 }} sm={{ span: 4, offset: 0 }} xs={{ span: 4, offset: 0 }}>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        style={{ backgroundColor: 'transparent' }}
                    >
                        <SubMenu title="Agregar" key="add" icon={<PlusOutlined />} className={styles.aItem}>
                            <Menu.Item key="addDebt" icon={<PlusOutlined />}>
                                <FormContainer transcType={"deuda"} ao={"a"} >
                                    <DebtItem />
                                </FormContainer>
                            </Menu.Item>
                            <Menu.Item key="addPay" icon={<FontAwesomeIcon style={{ marginRight: "15px" }} icon={faDollarSign} />}>
                                <FormContainer transcType={"pago"} ao={"o"}>
                                    <PaymentItem />
                                </FormContainer>
                            </Menu.Item>
                            <Menu.Item key="addClient" icon={<UserAddOutlined />}>
                                <FormContainer transcType={"cliente"} ao={"o"}>
                                    <ClientItem />
                                </FormContainer>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="notification" icon={<NotificationOutlined />} className={styles.headerItem}>
                            Notificaciones
                                </Menu.Item>
                        <SubMenu title="Usuario" key="user" icon={<UserOutlined />} className={styles.headerItem}>
                            <SubMenu key="sub3" title="Opciones" icon={<SettingOutlined />} >
                                <Menu.Item key="oAyuda">
                                    <Link href={`/Dashboard/Configuracion/Perfil`} >
                                        <a href="#!" >Perfil</a>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="oCliente">Privacidad</Menu.Item>
                                <Menu.Item key="oCliente">Seguridad</Menu.Item>
                                <Menu.Item key="oError">Preferencias</Menu.Item>
                            </SubMenu>
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

        </Fragment>
    )
}

export default Header;