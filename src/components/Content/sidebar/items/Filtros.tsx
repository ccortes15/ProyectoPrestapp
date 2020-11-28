import { Form, Button } from 'antd';
import { FC, useState } from 'react';
import FormItems from './FormItems';

interface FiltrosProps {
    isPago?: Boolean;
}

const FiltrosDeuda: FC<FiltrosProps> = ({ isPago }) => {
    const [form] = Form.useForm();
    const [minSlider] = useState<number>(5000);
    const [maxSlider] = useState<number>(25000);


    return (
        <Form
            layout="vertical"
            form={form}
            initialValues={{
                cantidad: {
                    slider: [minSlider, maxSlider]
                }
            }}
        >
            <FormItems isPago={isPago} />

            <Form.Item>
                <Button type="primary" block>Filtrar datos</Button>
            </Form.Item>
        </Form>
    )
}

export default FiltrosDeuda;