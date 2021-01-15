import { List, Avatar, Button, Skeleton, Descriptions, Input, Row, Col, Grid } from 'antd';
import { EditOutlined, DeleteOutlined, AudioOutlined } from '@ant-design/icons';
import { FC, useState, useEffect, Fragment, ChangeEvent, ReactNode } from 'react';
import { listStyle } from '../styles/Styles';

const { Search } = Input;
const { useBreakpoint } = Grid;

interface SendData {
    label: ReactNode;
    value: string;
}

interface PropsValue {
    id: string;
    data: SendData[];
}

interface ListProps {
    data: PropsValue[];
    typeContent?: 'deuda' | 'cliente' | 'pago';
}

const ProyeccionesList: FC<ListProps> = ({ data, typeContent }) => {
    const [initLoading, setInitLoading] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const [dataList, setDataList] = useState<PropsValue[]>([]);
    const [list, setList] = useState<PropsValue[]>([]);
    const [searchValue, setSearch] = useState<string>('');
    const screens = useBreakpoint();

    const getSize = () => {
        return Object.entries(screens)
        .filter(screen => !!screen[1])
        .map(screen => (
            screen[0]
        ))
    }

    useEffect(() => (
        getData(data)
    ), [])

    const getData = (dataList: PropsValue[]): void => {
        let values = [];
        console.log(dataList)
        for (let i = 0; i < dataList.length; i++) {
            values.push(dataList[i].data)
        }
        setInitLoading(false);
        setDataList(dataList);
        setList(dataList);
    }

    const onLoadMore = () => {
        setLoading(true);
        //setList(data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))))
        const load = (res: PropsValue[]) => {
            const dataValue = dataList.concat(res);
            setDataList(dataValue);
            setList(dataValue);
            window.dispatchEvent(new Event('resize'));
            setLoading(false);
        };

        load(data)
    };

    const loadMore =
        !initLoading && !loading ? (
            <div
                style={{
                    textAlign: 'center',
                    marginTop: 12,
                    height: 32,
                    lineHeight: '32px',
                }}
            >
                <Button onClick={onLoadMore}>cargar más</Button>
            </div>
        ) : null;

    return (
        <Fragment>
            <Search
                style={{ marginBottom: 10 }}
                placeholder="Buscar"
                size="large"
                onSearch={(value) => console.log(value)}
                suffix={<AudioOutlined style={{ fontSize: 16, color: '#1890ff' }} />}
                enterButton
            />
            <List
                loading={initLoading}
                itemLayout="vertical"
                loadMore={loadMore}
                dataSource={list}
                renderItem={item => (
                    <List.Item
                        style={listStyle}
                    >
                        <Skeleton avatar title={false} loading={loading} active>
                            <List.Item.Meta
                                avatar={typeContent === 'cliente'
                                    ? <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                    : null
                                }
                                title={<Row>
                                    <Col xl={{span:14}} lg={{span:14}} md={{span:12}} sm={{span:24}} xs={{span:24}}>
                                        <a href="https://ant.design">{`${typeContent.toUpperCase()}: ${item.id}`}</a>
                                    </Col>
                                    <Col xl={{span:6, offset: 4}} lg={{span:7, offset: 3}} md={{span:9, offset: 3}} sm={{span:24}} xs={{span:24}}>
                                        <span>
                                            <Button type="primary" icon={<EditOutlined />} key="list-loadmore-edit" href="#!" >
                                                {''}
                                            </Button>
                                            <Button type="primary" icon={<DeleteOutlined />} key="list-loadmore-more" href="#!" style={{ marginLeft: 4 }} danger>
                                                {''}
                                            </Button>
                                        </span>
                                    </Col>
                                </Row>}
                            />
                            <Descriptions 
                                column={{ xxl: 3, xl: 3, lg: 3, md: 2, sm: 2, xs: 1 }} 
                                layout={getSize().length > 1 ? 'horizontal' : 'vertical'}>
                                {item.data.map((dato: SendData, i: number) => (
                                    <Descriptions.Item key={i} label={dato.label}>{dato.value}</Descriptions.Item>
                                ))}
                            </Descriptions>
                        </Skeleton>
                    </List.Item>
                )}
            />
        </Fragment>
    )
}

export default ProyeccionesList;