import { FC, Fragment, useState } from 'react';
import { Row, Col, Checkbox, Tag } from 'antd';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import {capitalizeTag} from '../../functions/Functions';


const FiltrosProye: FC = () => {
    const [checkValue, setCheck] = useState<CheckboxValueType[]>([]);

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

    const checkChange = (value: CheckboxValueType[]): void => {
        setCheck(value)
    }

    return (
        <Fragment>
            <Checkbox.Group style={{ width: '100%' }} onChange={(checkedValue: CheckboxValueType[]): void => checkChange(checkedValue)}>
                <Row>
                    {filtros.map((filtro: Filtros, i: number) => (
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
        </Fragment>
    )
}

export default FiltrosProye;