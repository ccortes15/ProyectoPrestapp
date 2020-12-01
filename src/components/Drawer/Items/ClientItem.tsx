import React, { ChangeEvent, ChangeEventHandler, Fragment, useState } from 'react'
import { Form, Col, Row, Input, Select } from 'antd';
import { __values } from 'tslib';
import { Option } from 'antd/lib/mentions';

const listaTerritorios = [
    {
        estado: "Aguascalientes",
        municipio:"Aguascalientes"
    },
    {
        estado: "Baja california",
        municipio:"Tijuana"
    },
    {
        estado: "CDMX",
        municipio:"Cuahctemoc"        
    },
    {
        estado: "Colima",
        municipio:"Colima"
    },
    {
        estado: "Durango",
        municipio:"Durango"
    },
    {
        estado: "Guanajuato",
        municipio:"Guanajuato"
    },
    {
        estado: "Hidalgo",
        municipio:"Pachuca de soto"
    },
    {
        estado: "Michoacan",
        municipio:"Michoacan"
    },
    {
        estado: "Puebla",
        municipio:"Puebla"
    },
    {
        estado: "Yucatan",
        municipio:"Quintana Roo"
    }
]

const ClientItem: React.FC = () => {

    const [ nombre, setNombre ] = useState<ChangeEvent<HTMLInputElement>>()
    const [ correoE, setCorreoE ] = useState<ChangeEvent<HTMLInputElement>>()
    const [ telefono, setTelefono ] = useState<ChangeEvent<HTMLInputElement>>()
    const [ calleNum, setCalleNum ] = useState<ChangeEvent<HTMLInputElement>>()
    const [ localidad, setLocalidad ] = useState<ChangeEvent<HTMLInputElement>>()
    const [ estado, setEstado ] = useState<string>('')
    const [ municipio, setMunicipio ] = useState<string>('')

        return (
            <Fragment>
                <Form layout="vertical" hideRequiredMark>
                    <Row gutter={16}>
                        <Col span={12}>
                            <h3 
                                style = {{
                                    marginBottom: "20px"

                            }} >Datos personales</h3>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="nombreCompleto"
                                label="Nombre completo"
                                rules={[{ required: true, message: 'Ingresar nombre completo de cliente' }]}
                            >
                                <Input
                                    onChange={ (value: ChangeEvent<HTMLInputElement>) => setNombre(value) }
                                    placeholder="Nombre completo" 
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="correo"
                                label="Correo electrónico"
                                rules={[{ required: true, message: 'Favor de ingresar correo electrónico' }]}
                            >
                                <Input
                                    onChange={ (value: ChangeEvent<HTMLInputElement>) => setCorreoE(value) }
                                    type="text"
                                    placeholder="Ingresa correo electrónico"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                        <Form.Item
                            name="owner"
                            label="Telefono"
                            rules={[{ required: true, message: 'Por favor ingrese telefono de cliente' }]}
                        >
                            <Input
                                style={{ width: '100%' }}
                                type="tel" 
                                placeholder="Ingrese telefono"
                                onChange={ (value: ChangeEvent<HTMLInputElement>) => setTelefono(value) }
                            />
                        </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <div style={{borderTop: "2px solid lightgray", marginBottom: "20px"}} />
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <h3
                                style = {{
                                    marginBottom: "20px"

                            }} >Datos de residencia</h3>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="calleDir"
                                label="Calle y número"
                                rules={[{ required: true, message: 'Favor de ingresar calle y número' }]}
                            >
                                <Input
                                    onChange={ (value: ChangeEvent<HTMLInputElement>) => setCalleNum(value) }
                                    style={{ width: '100%' }} 
                                    placeholder="Ingresar calle y número del cliente"
                                />
                            </Form.Item>
                            </Col>
                            <Col span={12}>
                            <Form.Item
                                name="localidad"
                                label="Colonia o localidad"
                                rules={[{ required: true, message: 'Favor de ingresar localidad o colonia' }]}
                            >
                                <Input
                                    onChange={ (value: ChangeEvent<HTMLInputElement>) => setLocalidad(value) }
                                    style={{ width: '100%' }} 
                                    placeholder="Favor de ingresar localidad o colonia"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="estado"
                                label="Estado"
                            >
                                <Select
                                    onChange={(value: string) => setEstado(value)}
                                    style={{
                                        fontWeight: "normal"
                                    }} 
                                    placeholder="Seleccione un cliente"
                                    allowClear
                                    >
                                        {listaTerritorios.map((estado, index) => (
                                            <Option key={"3"} value = {estado.estado} >{estado.estado}</Option>
                                        ))}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="municipio"
                                label="Municipio"
                            >
                                <Select
                                    onChange={(value: string) => setEstado(value)}
                                    style={{
                                        fontWeight: "normal"
                                    }} 
                                    placeholder="Seleccione un cliente"
                                    allowClear
                                    >
                                        {listaTerritorios.map((territorio, index) => (
                                            <Option key={"3"} value = {territorio.municipio} >{territorio.municipio}</Option>
                                        ))}
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Fragment>
        ) 
}

export default ClientItem