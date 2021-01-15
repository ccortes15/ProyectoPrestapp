import { Layout, Breadcrumb, Grid } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { Fragment, FC, useState } from 'react';
import styles from './styles/Styles.module.css';
import {contentStyle, headerStyle, sidebarStyle} from './styles/Style';
import HeaderContent from './Header';
import SidebarContent from './Sidebar';

const {useBreakpoint} = Grid;
const { Header, Content, Sider, Footer } = Layout;

const LayoutAdmin: FC = (props) => {
    const [collapsed, setCollapsed] = useState(true)
    const screens = useBreakpoint();

    const getSize = () => {
        return Object.entries(screens)
            .filter(screen => !!screen[1])
            .map(screen => (screen[0]))
    }

    return (
        <Fragment>
            <Layout>
                <Sider
                    theme="dark"
                    style={sidebarStyle}
                    width={150}
                    collapsible
                    collapsed={collapsed}
                    trigger={getSize().length > 1 
                        ? collapsed ? <RightOutlined /> : <LeftOutlined /> 
                        : null
                    }
                    onCollapse={() => setCollapsed(!collapsed)} >
                    <SidebarContent />
                </Sider>

                <Layout style={{ marginLeft: collapsed ? 80 : 150, transition: 'margin-left 0.2s ease ' }}>
                    <Header style={headerStyle} className="header">
                        <HeaderContent />
                    </Header>
                    <Content
                        style={contentStyle}
                    >
                        <Breadcrumb separator=">">
                            {/* {getBread(path).map((bread: string, i: number) => (
                                <Breadcrumb.Item key={i} href="">
                                    {bread}
                                </Breadcrumb.Item>
                            ))} */}
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: getSize().length > 1 ? 20 : 2, minHeight: 360 }}>
                            {props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center', backgroundColor: '#ffff', paddingBottom: 0 }}>©{new Date().getFullYear()} Created by Finanset</Footer>
                </Layout>
            </Layout>
        </Fragment>
    )
};

export default LayoutAdmin;