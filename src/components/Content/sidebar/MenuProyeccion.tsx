import { FC, Fragment, ReactElement, useState } from 'react';
import { Collapse, Row, Col, Checkbox, Radio, Tag } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { collapseStyle, radioStyle } from '../styles/Styles';

const { Panel } = Collapse;

const ProyeccionesSidebar: FC = () => {
    const [radioValue, setRadio] = useState<string>('1');

    type Filtros = {
        tag: string;
        color: string
    }

    const filtros: Filtros[] = [
        { tag: 'ropa', color: 'red' },
        { tag: 'comida', color: 'blue' },
        { tag: 'perfumes', color: 'green' },
        { tag: 'efectivo', color: 'magenta' }
    ]

    const onChange = (value: string): void => {
        setRadio(value);
    };

    const capitalizeTag = (tag: string): string => {
        const fLetter = tag.substring(0, 1).toUpperCase();
        return fLetter + tag.substr(1)
    }

    return (
        <Fragment>
            <Collapse
                style={collapseStyle}
                defaultActiveKey={['1']}
                expandIconPosition={'right'}
            >
                <Panel header="Organizar" key="1" >
                    <Radio.Group onChange={(e: RadioChangeEvent): any => onChange(e.target.value)} value={radioValue} >
                        <Radio style={radioStyle} value={'1'}>
                            Título (A - Z)
                                    </Radio>
                        <Radio style={radioStyle} value={'2'}>
                            Título (Z - A)
                                    </Radio>
                        <Radio style={radioStyle} value={'3'}>
                            Menor a mayor ($ - $$$)
                                    </Radio>
                        <Radio style={radioStyle} value={'4'}>
                            Mayor a menor ($$$ - $)
                                    </Radio>
                    </Radio.Group>
                </Panel>
                <Panel header="Filtros" key="2" >
                    <Checkbox.Group style={{ width: '100%' }} onChange={(checkedValue: CheckboxValueType[]): void => console.log(checkedValue)}>
                        <Row>
                            {filtros.map((filtro: Filtros, i: number): ReactElement => (
                                <Col key={i} span={24}>
                                    <Checkbox style={{ padding: '2px' }} value={filtro.tag}>
                                        <Tag color={filtro.color}>
                                            {capitalizeTag(filtro.tag)}
                                        </Tag>
                                    </Checkbox>
                                </Col>
                            ))}
                        </Row>
                    </Checkbox.Group>
                </Panel>
            </Collapse>
        </Fragment>
    )
}

export default ProyeccionesSidebar;