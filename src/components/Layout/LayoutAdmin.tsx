import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Fragment, FC, useState } from 'react';
import HeaderContent from './Header';
import SidebarContent from './Sidebar';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Login: FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Fragment>
            <Layout>
                <Sider collapsible collapsed={collapsed} onCollapse={(collapsed) => (setCollapsed(collapsed))}>
                    <SidebarContent />
                </Sider>

                <Layout>
                    <Header className="header">
                        <HeaderContent />
                    </Header>

                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            Bill is a cat.
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </Fragment>
    )
};

export default Login;