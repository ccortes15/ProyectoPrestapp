import { Layout, Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Fragment, FC } from 'react';
import HeaderContent from './Header';
import SidebarContent from './Sidebar';

const { Header, Content, Sider } = Layout;

const Login: FC = (props) => {
    return (
        <Fragment>
            <Layout>
                <Header style={{ background: 'white', height: '100%', borderBottom: '1px solid #18335C' }} className="header">
                    <HeaderContent />
                </Header>
                <Layout>
                    <Sider style={{ background: 'white' }} collapsible collapsed={true} trigger={null}>
                        <SidebarContent />
                    </Sider>
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