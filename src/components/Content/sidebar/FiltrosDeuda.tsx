import { Form, Button, DatePicker, Select, InputNumber, Divider, Checkbox, Badge } from 'antd';
import { FC } from 'react';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';


const { RangePicker } = DatePicker;
const { Option } = Select;

const FiltrosDeuda: FC = () => {
    const [form] = Form.useForm();

    type OptionSelectType = {
        value: string;
        label: string;
    };

    type OptionsEtiqueta = {
        name: string;
        color: string;
    }

    const estatutoList: string[] = ['estatuto1', 'estatuto2', 'estatuto3'];
    const frecuenciaList: string[] = ['semanal', 'quincenal', 'mensual'];
    const clienteList: string[] = ['miguel rodriguez', 'roberto antonio', 'adrian cortés'];

    const etiquetaList: OptionsEtiqueta[] = [
        { name: 'ropa', color: 'pink' },
        { name: 'comida', color: 'blue' },
        { name: 'efectivo', color: 'green' }
    ];

    const getOptions = (listValue: string[]): object[] => {
        const options: OptionSelectType[] = [];
        for (let i = 0; i < listValue.length; i++) {
            options.push({ value: listValue[i], label: listValue[i] });
        }
        return options
    }

    const getEtiqueta = (listValue: OptionsEtiqueta[], type: string): OptionSelectType[] => {
        const options: OptionSelectType[] = [];
        for (let i = 0; i < listValue.length; i++) {
            let value = listValue[i];
            options.push({ value: value[type], label: value[type] });
        }
        return options
    }

    return (
        <Form
            layout="vertical"
            form={form}
        >
            <Form.Item label="Fecha">
                <RangePicker placeholder={['Inicio', 'Fin']} />
            </Form.Item>
            <Form.Item label="Estatutos">
                <Select
                    style={{ width: '100%' }}
                    showSearch
                    placeholder="Estatutos:"
                    optionFilterProp="value"
                    filterOption={(inputValue, option) =>
                        option.value.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0
                    }
                    allowClear
                >
                    {getOptions(estatutoList).map((opt: OptionSelectType, i: number) => (
                        <Option key={i} value={opt.value}>{opt.label}</Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item label="Cantidad">
                <InputNumber
                    min={0}
                    defaultValue={0}
                    formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    onChange={(value) => console.log(value)}
                />
            </Form.Item>
            <Form.Item label="Cliente deudor">
                <Select
                    style={{ width: '100%' }}
                    showSearch
                    placeholder="Seleccione cliente"
                    optionFilterProp="value"
                    filterOption={(inputValue, option) =>
                        option.value.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0
                    }
                    allowClear
                >
                    {getOptions(clienteList).map((opt: OptionSelectType, i: number) => (
                        <Option key={i} value={opt.value}>{opt.label}</Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item label="Frecuencia de pago">
                <Select
                    style={{ width: '100%' }}
                    showSearch
                    placeholder="Seleccionar:"
                    optionFilterProp="value"
                    filterOption={(inputValue, option) =>
                        option.value.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0
                    }
                    allowClear
                >
                    {getOptions(frecuenciaList).map((opt: OptionSelectType, i: number) => (
                        <Option key={i} value={opt.value}>{opt.label}</Option>
                    ))}
                </Select>
            </Form.Item>
            <Divider plain>
                Etiquetas
            </Divider>
            <Form.Item label="Nombre de etiqueta">
                <Select
                    style={{ width: '100%' }}
                    showSearch
                    placeholder="Seleccionar:"
                    optionFilterProp="value"
                    filterOption={(inputValue, option) =>
                        option.value.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0
                    }
                    allowClear
                >
                    {getEtiqueta(etiquetaList, 'name').map((opt: OptionSelectType, i: number) => (
                        <Option key={i} value={opt.value}>{opt.label}</Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item label="Color de etiqueta">
                <Checkbox.Group style={{ width: '100%' }} onChange={(checkedValue: CheckboxValueType[]): void => console.log(checkedValue)}>
                    {getEtiqueta(etiquetaList, 'color').map((opt: OptionSelectType, i: number) => (
                        <div key={i}>
                            <Checkbox  value={opt.value}>
                                <Badge color={opt.label} />
                            </Checkbox>
                        </div>

                    ))}
                </Checkbox.Group>
            </Form.Item>
            <Form.Item>
                <Button type="primary" block>Filtrar datos</Button>
            </Form.Item>
        </Form>
    )
}

export default FiltrosDeuda;