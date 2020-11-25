import { Layout, Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Fragment, FC, useState } from 'react';
import HeaderContent from './Header';
import SidebarContent from './Sidebar';

const { Header, Content, Sider } = Layout;

const Login: FC = (props) => {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <Fragment>
            <Layout>
                <Sider style={{ background: 'white' }} theme="light" width={150} collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)} >
                    <SidebarContent />
                </Sider>

                <Layout>
                    <Header style={{ background: 'white' }} className="header">
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
                        <Breadcrumb>
                            <Breadcrumb.Item href="">
                                <HomeOutlined />
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href="">
                                <UserOutlined />
                                <span>Application List</span>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>Application</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 20, minHeight: 360 }}>
                            {props.children}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </Fragment>
    )
};

export default Login;