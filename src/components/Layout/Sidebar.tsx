import { Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChalkboard, faMoneyCheckAlt, faHandHoldingUsd, faUser, faCogs } from '@fortawesome/free-solid-svg-icons'
import { Fragment, FC } from 'react';

const { SubMenu } = Menu;

const Sidebar: FC = () => {
    return(
        <Fragment>
            <Menu theme="light" mode="inline">
              <Menu.Item key="dashboard" icon={<FontAwesomeIcon icon={faChalkboard} />} >
                <div>Dashboard</div>
                </Menu.Item>
              <Menu.Item key="aDeuda" icon={<FontAwesomeIcon icon={faMoneyCheckAlt} />} >
                <div>Deudas</div>
                </Menu.Item>
              <Menu.Item key="aPago" icon={<FontAwesomeIcon icon={faHandHoldingUsd} />}>
                <div>Pagos</div>
              </Menu.Item>
              <Menu.Item key="aCliente" icon={<FontAwesomeIcon icon={faUser} />}>
                <div>Clientes</div>
              </Menu.Item>
            <SubMenu key="sub3" icon={<FontAwesomeIcon icon={faCogs} />} >
              <Menu.Item key="oAyuda">Ayuda</Menu.Item>
              <Menu.Item key="oError">Reportar error</Menu.Item>
              <Menu.Item key="oCliente">Clientes</Menu.Item>
            </SubMenu>
          </Menu>
        </Fragment>
    )
}

export default Sidebar;