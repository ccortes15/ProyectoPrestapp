import { List, Avatar, Button, Skeleton, Input, Descriptions } from 'antd';
import { FC, useState, useEffect, Fragment, ChangeEvent} from 'react';
import { inputStyle } from '../styles/Styles';

interface SendData {
    label: string;
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

    useEffect(() => (
        getData(data)
    ), [])

    // const onSearch = useMemo(() => {

    //     if(!searchValue) return dataList;

    // }, [searchValue, dataList]) 

    const getData = (dataList: PropsValue[]): void => {
        let values = [];
        console.log(dataList)
        for(let i = 0; i < dataList.length; i++){
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
            <Input
                style={inputStyle}
                placeholder={`Buscar ${typeContent}`}
                id="1"
                value={searchValue}
                onChange={(e: ChangeEvent<HTMLInputElement>): void => setSearch(e.target.value)} />
            <List
                loading={initLoading}
                itemLayout="vertical"
                loadMore={loadMore}
                dataSource={list}
                renderItem={item => (
                    <List.Item
                        extra={
                            <span>
                                <a key="list-loadmore-edit" href="#!">Editar</a>
                                <a key="list-loadmore-more" href="#!" style={{ marginLeft: 4, color: 'red' }}>Eliminar</a>
                            </span>
                        }
                    >
                        <Skeleton avatar title={false} loading={loading} active>
                            <List.Item.Meta
                                avatar={typeContent === 'cliente'
                                    ? <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                    : null
                                }
                                title={<a href="https://ant.design">{`${typeContent.toUpperCase()}: ${item.id}`}</a>}
                            />
                            <Descriptions>
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