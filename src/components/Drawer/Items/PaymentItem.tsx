import React, { ChangeEvent, Fragment, useState } from 'react'
import { Form, Col, Row, Input, Select, DatePicker, InputNumber } from 'antd';

const { Option } = Select;

interface Props {

}

const listaInfClientes = [
    {
        id: 1,
        nombre: "Robert Velasco",
        telefono: 3121451244,
        correo: "robertoantonio_velasco@ucol.mx",
        deuda: "deuda pendiente A"
    },
    {
        id: 2,
        nombre: "Adrian Cortes",
        telefono: 3121457874,
        correo: "ccortes15@ucol.mx",
        deuda: "deuda pendiente B"

    },
    {
        id: 3,
        nombre: "Miguel Rodriguez",
        telefono: 3141547855,
        correo: "miguelantonio_rodriguez@ucol.mx",
        deuda: "deuda pendiente C"

    }
]

const PaymentItem: React.FC<Props> = () => {

    const [ cliente, setCliente ] = useState<string>("")
    const [ deuda, setDeuda ] = useState<string>("")
    const [ total, setTotal ] = useState<number>()
    const [ descripcion, setDescripcion ] = useState<ChangeEvent<HTMLTextAreaElement>>()

        return (
            <Fragment>
                <Form layout="vertical" hideRequiredMark>
                <Row gutter={16}>
                        <Col span={12}>
                            <h3
                                style = {{
                                    marginBottom: "20px"

                            }} >Datos del pago</h3>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="cliente"
                                label="Elige cliente"
                                rules={[{ required: true, message: 'Elige al cliente' }]}
                            >
                                <Select
                                    onChange={(value: string) => setCliente(value)}
                                    placeholder="Seleccione un cliente"
                                    allowClear
                                    >
                                        {listaInfClientes.map((cliente, index) => (
                                            <Option key={index} value = {cliente.nombre} >{cliente.nombre}</Option>
                                        ))}
                                </Select>                       
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                        <Form.Item
                            name="deuda"
                            label="Elige deuda"
                            rules={[{ required: true, message: 'Elige la deuda del cliente' }]}
                        >
                            <Select
                                    onChange={(value: string) => setDeuda(value)}
                                    placeholder="Seleccione deuda respectiva"
                                    allowClear
                                    >
                                        {listaInfClientes.map((cliente, index) => (
                                            <Option key={index} value = {cliente.deuda} >{cliente.deuda}</Option>
                                        ))}
                                </Select> 
                        </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="cantidadPago"
                                label="Cantidad del pago"
                                rules={[{ required: true, message: 'Por favor ingresa la cantidad a pagar' }]}
                            >
                                <InputNumber
                                    style={{ width: '100%' }}
                                    onChange={(value: number) => setTotal(value)}
                                    placeholder="Ingresa cantidad a pagar"
                                />                     
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                        <Form.Item
                            name="description"
                            label="Descripción"
                            rules={[
                            {
                                required: true,
                                message: 'Ingresa una descrión o comentario del pago',
                            },
                            ]}
                        >
                            <Input.TextArea 
                                rows={4} 
                                placeholder="please enter url description"
                                onChange={ (value: ChangeEvent<HTMLTextAreaElement>) => setDescripcion(value) }
                            />
                        </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Fragment>
        ) 
}

export default PaymentItem