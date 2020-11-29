import { FC, Fragment } from 'react';
import { Collapse, Select } from 'antd';
import { collapseStyle } from '../styles/Styles';

const { Panel } = Collapse;
const { Option } = Select;
interface MenuProps {
    isCliente?: Boolean;
}

interface OptionType {
    value: string;
    label: string;
};

const MenuSidebar: FC<MenuProps> = ({children, isCliente}) => {  
    const options: OptionType[] = [
        { value: "ordenAZ", label: "De A - Z" },
        { value: "ordenZA", label: "De Z - A" },
        { value: "mayorMenor", label: "Mayor a menor" },
        { value: "menorMayor", label: "Menor a mayor" },
    ];

    return (
        <Fragment>
            <Collapse
                style={collapseStyle}
                defaultActiveKey={['1', '2']}
                expandIconPosition={'right'}
            >
                <Panel header="Organizar" key="1" >
                    <Select style={{ width: '100%' }} placeholder="Organizar por:" onChange={(value: string): void => (console.log(value))} allowClear>
                        {options.map((opt: OptionType, i: number) => (
                            <Option key={i} value={opt.value}>{opt.label}</Option>
                        ))}
                    </Select>
                </Panel>
                {isCliente ? null 
                : <Panel header="Filtros" key="2" >
                    {children}
                </Panel>}
                
            </Collapse>
        </Fragment>
    )
}

export default MenuSidebar;