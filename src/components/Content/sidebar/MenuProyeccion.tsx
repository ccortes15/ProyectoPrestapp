import { FC, Fragment, ReactElement, useState } from 'react';
import { Collapse, Row, Col, Checkbox, Tag, Select } from 'antd';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { collapseStyle } from '../styles/Styles';

const { Panel } = Collapse;
const { Option} = Select;

const ProyeccionesSidebar: FC = () => {
    const [selectValue, setSelect] = useState<string>('1');
    const [checkValue, setCheck] = useState<CheckboxValueType[]>([]);

    type Filtros = {
        tag: string;
        color: string
    }

    type OptionType = {
        value: string;
        label: string;
    };

    const options: OptionType[] = [
        { value: "ordenAZ", label: "De A - Z" },
        { value: "ordenZA", label: "De Z - A" },
        { value: "mayorMenor", label: "Mayor a menor" },
        { value: "menorMayor", label: "Menor a mayor" },
    ];

    const filtros: Filtros[] = [
        { tag: 'ropa', color: 'red' },
        { tag: 'comida', color: 'blue' },
        { tag: 'perfumes', color: 'green' },
        { tag: 'efectivo', color: 'magenta' }
    ]

    const selectChange = (value: string): void => {
        setSelect(value);
    }

    const checkChange = (value: CheckboxValueType[]): void => {
        setCheck(value)
    }
    
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
                    <Select style={{ width: '100%' }} placeholder="Organizar por:" onChange={selectChange} allowClear>
                        {options.map((opt: OptionType, i: number) => (
                            <Option key={i} value={opt.value}>{opt.label}</Option>
                        ))}
                    </Select>
                </Panel>
                <Panel header="Filtros" key="2" >
                    <Checkbox.Group style={{ width: '100%' }} onChange={(checkedValue: CheckboxValueType[]): void => checkChange(checkedValue)}>
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