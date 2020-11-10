import { Menu } from 'antd';
import { SettingOutlined, FundProjectionScreenOutlined, ReconciliationOutlined } from '@ant-design/icons';
import { Fragment, FC } from 'react';

const { SubMenu } = Menu;

const Sidebar: FC = () => {
    return(
        <Fragment>
            <Menu theme="dark" mode="inline">
            <SubMenu key="sub1" icon={<ReconciliationOutlined />} title="Administración">
              <Menu.Item key="aDeuda">Deudas</Menu.Item>
              <Menu.Item key="aPago">Pagos</Menu.Item>
              <Menu.Item key="aCliente">Clientes</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<FundProjectionScreenOutlined />} title="Finanzas">
              <Menu.Item key="fProyecc">Proyecciones</Menu.Item>
              <Menu.Item key="fGrafico">Gráficos</Menu.Item>
              <Menu.Item key="fAcredor">Acredores</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<SettingOutlined />} title="Opciones">
              <Menu.Item key="oAyuda">Ayuda</Menu.Item>
              <Menu.Item key="oError">Reportar error</Menu.Item>
              <Menu.Item key="oCliente">Clientes</Menu.Item>
            </SubMenu>
          </Menu>
        </Fragment>
    )
}

export default Sidebar;