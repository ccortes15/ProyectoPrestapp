import React, { Fragment } from 'react'
import { Form, Col, Row, Input, Select, DatePicker, Button, InputNumber } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const { Option } = Select;

interface Props {

}

const DebtItem: React.FC<Props> = () => {
        return (
            <Fragment>
                <Form layout="vertical" hideRequiredMark>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="Cliente"
                                label="Cliente"
                                rules={[{ required: true, message: 'Favor de elegir un cliente' }]}
                            >
                                <Select
                                    placeholder="Seleccione un cliente"
                                    //onChange={onGenderChange}
                                    allowClear
                                    >
                                    <Option value="">Adrian Cortez</Option>
                                    <Option value="">Miguel Rodriguez</Option>
                                    <Option value="">Roberto Velasco</Option>
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
                                        Agregar Cliente
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
                                //onChange={onChange}
                                />
                            </Form.Item>
                        </Col>
                       
                        <Col span={12}>
                        <Form.Item
                            name="frecuencia"
                            label="Frecuencia de pago"
                            rules={[{ required: true, message: 'Favor de elegir frecuencia' }]}
                        >
                            <Select placeholder="Favor de elegir frecuencia">
                            <Option value="Semanal">Semanal</Option>
                            <Option value="Quincenal">Quincenal</Option>
                            <Option value = "Mensual">Mensual</Option>
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
                                //onChange={onChange} 
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
                            />
                        </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                        <Form.Item
                            name="description"
                            label="Descripción"
                        >
                            <Input.TextArea rows={4} placeholder="Escribe una descripción o un comentario de la deuda" />
                        </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Fragment>
        )
}

export default DebtItem