import { Layout, Breadcrumb } from 'antd';
//import { HomeOutlined } from '@ant-design/icons';
import { Fragment, FC, useState } from 'react';
import { sidebarStyle, contentStyle } from './styles/Style';
import HeaderContent from './Header';
import SidebarContent from './Sidebar';
//import { useRouter } from 'next/router'

const { Header, Content, Sider } = Layout;

const Login: FC = (props) => {
    const [collapsed, setCollapsed] = useState(true)
    // const router = useRouter()
    // const path = router.asPath;

    // const getBread = (route: string): string[] => {
    //     const bread = route.split("/")
    //     let values = [];
    //     let ref = "/";

    //     bread.shift();

    //     for(let b of bread){
    //         ref = ref + b + '/';

    //         values.push({
    //             bread: b,
    //             ref: ref
    //         })
    //     }

    //     return values;
    // }

    return (
        <Fragment>
            <Layout>
                <Sider
                    theme="light"
                    style={sidebarStyle}
                    width={150}
                    collapsible
                    collapsed={collapsed}
                    onCollapse={() => setCollapsed(!collapsed)} >
                    <SidebarContent />
                </Sider>

                <Layout style={{ marginLeft: collapsed ? 80 : 150, transition: 'all 0.2s ease ' }}>
                    <Header style={{ background: 'white' }} className="header">
                        <HeaderContent />
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={contentStyle}
                    >
                        <Breadcrumb separator=">">
                            {/* {getBread(path).map((bread: string, i: number) => (
                                <Breadcrumb.Item key={i} href="">
                                    {bread}
                                </Breadcrumb.Item>
                            ))} */}
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