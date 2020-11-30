import { Menu, Button } from 'antd';
import { FundProjectionScreenOutlined, DollarOutlined, TeamOutlined, CreditCardOutlined, SettingOutlined } from '@ant-design/icons';
import { Fragment, FC } from 'react';
import Link from 'next/link';

const { SubMenu } = Menu;

const Sidebar: FC = () => {
  return (
    <Fragment>
      <Menu theme="light" mode="inline">
        <Menu.Item key="dashboard" icon={<FundProjectionScreenOutlined />} >
          <Link href={'/Dashboard/inicio'} >
            <a href="#!" >Dashboard</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="deuda" icon={<CreditCardOutlined />}>
          <Link href={`/Dashboard/Deudas/${'1'}`} >
            <a href="#!" >Deudas</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="pago" icon={<DollarOutlined />}>
          <Link href={`/Dashboard/Pagos/${'1'}`} >
            <a href="#!" >Pagos</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="cliente" icon={<TeamOutlined />}>
          <Link href={`/Dashboard/Clientes/${'1'}`} >
            <a href="#!" >Clientes</a>
          </Link>
        </Menu.Item>
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
      </Menu>
    </Fragment>
  )
}

export default Sidebar;