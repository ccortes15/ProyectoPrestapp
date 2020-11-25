import React, { Fragment, useState, ChangeEvent } from 'react'
import { Form, Col, Row, Input, Select, DatePicker, Button, InputNumber } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import TextArea from 'antd/lib/input/TextArea';

const { Option } = Select;

type Props = {

}

const listaFrecuencias = [
    {
        frecuencia: "semanal"
    },
    {
        frecuencia: "quincenal"
    },
    {
        frecuencia: "mensual"
    }
]

const listaInfClientes = [
    {
        id: 1,
        nombre: "Robert Velasco",
        telefono: 3121451244,
        correo: "robertoantonio_velasco@ucol.mx"
    },
    {
        id: 2,
        nombre: "Adrian Cortes",
        telefono: 3121457874,
        correo: "ccortes15@ucol.mx",
    },
    {
        id: 3,
        nombre: "Miguel Rodriguez",
        telefono: 3141547855,
        correo: "miguelantonio_rodriguez@ucol.mx",
    }
]

const DebtItem: React.FC<Props> = () => {

    const [ cliente, setCliente ] = useState<string>("")
    const [ cantidadDeuda, setCantidad ] = useState<number>()
    const [ frecuencia, setFrecuencia ] = useState<string>()
    const [ cantidadPagos, setCantidadPagos ] = useState<number>()
    //const [ fechaInicio, setInicio ] = useState()
    //const [ fechaTerminancion, setTerminacion ] = useState()
    const [ descripción, setDescripcion ] = useState<ChangeEvent<HTMLTextAreaElement>>()

        return (
            <Fragment>
                <Form layout="vertical" hideRequiredMark>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="cliente"
                                style={{
                                    fontWeight: "bold"
                                }} 
                                label="Cliente"
                                rules={[{ required: true, message: 'Favor de elegir un cliente' }]}
                            >
                                <Select
                                    onChange={(value: string) => setCliente(value)}
                                    style={{
                                        fontWeight: "normal"
                                    }} 
                                    placeholder="Seleccione un cliente"
                                    allowClear
                                    >
                                        {listaInfClientes.map((cliente, index) => (
                                            <Option key={index} value = {cliente.nombre} >{cliente.nombre}</Option>
                                        ))}
                                </Select>
                                <Col style = {{display: "flex", flexDirection: "row-reverse"}}>
                                    <Button 
                                        style = {{
                                            display: "flex", 
                                            alignItems: "center",
                                            justifyContent: "center", 
                                            marginTop: "5px", 
                                            width: "90px", 
                                            height: "20px", 
                                            fontSize: "10px",
                                            flexDirection: "row",
                                        }} 
                                        type = "ghost"
                                    >
                                        <FontAwesomeIcon icon = {faPlus}/>
                                          Nuevo cliente
                                    </Button>
                                </Col>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                    <Col span={12}>
                            <Form.Item
                                name="cantidad"
                                label="Cantidad"
                                rules={[{ required: true, message: 'Favor de ingresar cantidad de deuda' }]}
                            >
                                <InputNumber
                                name = "cantidad"
                                style = {{
                                    width: "100%",
                                }}
                                defaultValue={1000}
                                formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                onChange={(value: number) => setCantidad(value)}
                                />
                            </Form.Item>
                        </Col>
                       
                        <Col span={12}>
                        <Form.Item
                            name="frecuencia"
                            label="Frecuencia de pago"
                            rules={[{ required: true, message: 'Favor de elegir frecuencia' }]}
                        >
                            <Select onChange={(value: string) => setFrecuencia(value)} placeholder="Favor de elegir frecuencia">
                                {listaFrecuencias.map((frecuencia, index) => (
                                    <Option key={index} value = {frecuencia.frecuencia} >{frecuencia.frecuencia}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                        <Form.Item
                            name="cantidadDePagos"
                            label="Cantidad de pagos"
                            rules={[{ required: true, message: 'Favor de ingresar cantidad de pagos' }]}
                        >
                            <InputNumber
                                name = "pagos"
                                style = {{
                                    width: "100%",
                                }}
                                min={1} 
                                max={99} 
                                defaultValue={8}
                                placeholder = "Ingresa cantidad de pagos"
                                onChange={(value: number) => setCantidadPagos(value)} 
                            />
                        </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="dateTime"
                                label="Fecha de terminación"
                                rules={[{ required: true, message: 'Favor de elegir la fecha de terminación' }]}
                            >
                                <DatePicker.RangePicker
                                style={{ width: '100%' }}
                                getPopupContainer={trigger => trigger.parentElement}
                                //onChange={(values: [inicio, fin]) => setTerminacion(values)}
                                placeholder={["Fecha inicio","Fecha terminación"]}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                        <Form.Item
                            name="descripcion"
                            label="Descripción"
                        >
                            <Input.TextArea 
                                onChange={(value: ChangeEvent<HTMLTextAreaElement> ) => setDescripcion(value)} 
                                rows={4} 
                                placeholder="Escribe una descripción o un comentario de la deuda" 
                            />
                        </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Fragment>
        )
}

export default DebtItem