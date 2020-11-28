import { Form, DatePicker, Select, Divider, Checkbox, Badge } from 'antd';
import { FC, Fragment } from "react";
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import SliderItems from './SliderItems';

const { Option } = Select;

interface FiltrosProps {
    isPago?: Boolean;
}

interface OptionsEtiqueta {
    name: string;
    color: string;
}

interface OptionSelectType {
    value: string;
    label: string;
};

const FormItems: FC<FiltrosProps> = ({isPago}) => {
    let inputValue: 'estatuto' | 'estatus' = isPago ? 'estatus' : 'estatuto';

    const estatusList: string[] = ['activo', 'inactivo', 'pendiente'];
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

    const capitalizeName = (name: string): string => {
        const names = name.split(' ');
        let result = '';

        const capitalizeTag = (tag: string): string => {
            const fLetter = tag.substring(0, 1).toUpperCase();
            return fLetter + tag.substr(1)
        }

        for (let n of names) {
            result = result + capitalizeTag(n) + ' '
        }
        return result
    }

    return (
        <Fragment>
            <Form.Item name={inputValue} label={capitalizeName(inputValue)}>
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
                    {getOptions(isPago ? estatusList : estatutoList).map((opt: OptionSelectType, i: number) => (
                        <Option key={i} value={opt.value}>{capitalizeName(opt.label)}</Option>
                    ))}
                </Select>
            </Form.Item>


            <Divider plain>
                Periodo
            </Divider>
            <Form.Item name="fechaInicio" label="Fecha inicio">
                <DatePicker format="DD/MM/YYYY" placeholder="Seleccionar fecha" />
            </Form.Item>
            <Form.Item name="fechaFin" label="Fecha fin">
                <DatePicker format="DD/MM/YYYY" placeholder="Seleccionar fecha" />
            </Form.Item>

            <Divider plain>
                Deuda
            </Divider>

            <Form.Item name="cliente" label="Cliente deudor">
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
                        <Option key={i} value={opt.value}>{capitalizeName(opt.label)}</Option>
                    ))}
                </Select>
            </Form.Item>

            <Form.Item name="cantidad" label="Cantidad">
                <SliderItems />
            </Form.Item>

            <Form.Item name="frecuenciaPago" label="Frecuencia de pago">
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
                        <Option key={i} value={opt.value}>{capitalizeName(opt.label)}</Option>
                    ))}
                </Select>
            </Form.Item>

            <Divider plain>
                Etiquetas
            </Divider>

            <Form.Item name="nombreEtiqueta" label="Nombre de etiqueta">
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
                        <Option key={i} value={opt.value}>{capitalizeName(opt.label)}</Option>
                    ))}
                </Select>
            </Form.Item>

            <Form.Item name="colorEtiqueta" label="Color de etiqueta">
                <Checkbox.Group style={{ width: '100%' }} onChange={(checkedValue: CheckboxValueType[]): void => console.log(checkedValue)}>
                    {getEtiqueta(etiquetaList, 'color').map((opt: OptionSelectType, i: number) => (
                        <div key={i}>
                            <Checkbox value={opt.value}>
                                <Badge color={opt.label} />
                            </Checkbox>
                        </div>

                    ))}
                </Checkbox.Group>
            </Form.Item>
        </Fragment>
    )
}

export default FormItems;