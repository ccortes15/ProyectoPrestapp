import { Menu, Button } from 'antd';
import { FundProjectionScreenOutlined, DollarOutlined, TeamOutlined, CreditCardOutlined, SettingOutlined } from '@ant-design/icons';
import { Fragment, FC } from 'react';

const { SubMenu } = Menu;

const Sidebar: FC = () => {
    return(
        <Fragment>
            <Menu theme="light" mode="inline">
              <Menu.Item key="dashboard" icon={<FundProjectionScreenOutlined />} >
                Dashboard
                </Menu.Item>
              <Menu.Item key="aDeuda" icon={<CreditCardOutlined />} >
                Deudas
                </Menu.Item>
              <Menu.Item key="aPago" icon={<DollarOutlined />}>
                Pagos
              </Menu.Item>
              <Menu.Item key="aCliente" icon={<TeamOutlined />}>
                Clientes
              </Menu.Item>
            <SubMenu key="sub3" title="Opciones" icon={<SettingOutlined />} >
              <Menu.Item key="oAyuda">Ayuda</Menu.Item>
              <Menu.Item key="oError">Reportar error</Menu.Item>
              <Menu.Item key="oCliente">Clientes</Menu.Item>
            </SubMenu>
          </Menu>
        </Fragment>
    )
}

export default Sidebar;