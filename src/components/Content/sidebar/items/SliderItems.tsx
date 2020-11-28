import { FC, useState } from 'react';
import { Select, Slider, Row, Col, Tag } from 'antd';

type Cantidad = {
    slider: [number, number];
}

type InputProps =  {
    value?: Cantidad;
}

const SliderItems: FC<InputProps> = ({ value = {}}) => {
    const [minSlider] = useState<number>(5000);
    const [maxSlider] = useState<number>(25000);
    const [minInput, setMinInput] = useState<number>(5000);
    const [maxInput, setMaxInput] = useState<number>(25000);
    const [slider, setSlider] = useState<[number,number]>([minSlider, maxSlider]);

    const getFormat = (value:number): string => {
        return `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    const onAfterChange = (value: number[]): void => {
        setMinInput(value[0]);
        setMaxInput(value[1]);
    }

    return (
        <span>
            <Slider
                range
                defaultValue={value.slider || slider}
                tipFormatter={getFormat}
                min={minSlider}
                max={maxSlider}
                onAfterChange={onAfterChange}
            />

            <Row gutter={16}>
                <Col span={12}>
                    <Tag color="green" >{getFormat(minInput)}</Tag>
                </Col>
                <Col span={12}>
                    <Row justify="end">
                        <Col>
                            <Tag color="green" >{getFormat(maxInput)}</Tag>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </span>
    );
};

export default SliderItems;