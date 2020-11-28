import React, { FC, Fragment, useState, ChangeEvent } from 'react'
import { Row, Col, List, Button, Input } from 'antd'
import { wrap } from 'module'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

type Props = {

}

const data = [
    'Perfil',
    'Privacidad',
    'Seguridad',
    'Preferencia',
    'Paquetes FINANSET Plus',
]

const Perfil: FC<Props> = () => {

    const [ nombreU, setNombre ] = useState<ChangeEvent<HTMLInputElement>>()
    const [ contra, setContra ] = useState<ChangeEvent<HTMLInputElement>>()
    const [ correoE, setCorreo ] = useState<ChangeEvent<HTMLInputElement>>()

        return (
            <Fragment>
                <Row gutter={16}>
                    <Col span={4}>
                        <List
                            header={
                                <div style={{fontWeight:"bold"}} >
                                    Configuración de perfil
                                    <div style={{borderBottom:"1px solid gold"}} ></div>
                                </div>
                            }
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <Button type="link" style={{color:"#AFAFAF", }}>{item}</Button>
                                </List.Item>  
                            )}
                        />
                    </Col>
                    <Col span={20} style={{backgroundColor:"#AFAFAF"}}>
                        <Row gutter={16}>
                            <Col span={20} style={{margin: "30px 0px 10px 40px"}}>
                                    <h2>Información de usuario</h2>
                                    <div style={{borderBottom:"1px solid gold"}} ></div>
                            </Col>
                            <Col span={6} style={{margin: "20px 0px 40px 40px"}} >
                                <Row gutter={10}>
                                    <img src="/Img/kiss.jpg" width="200px" height="200px" style={{borderRadius:"100%"}} alt="..."/>
                                    <Button style={{bottom:"40px", left: "10px"}} icon={<FontAwesomeIcon icon={faEdit} style={{marginRight:"8px"}}/>} > Edit </Button>  
                                </Row>
                                <Row gutter={[10,10]} style={{margin:"10px 0px 10px 0px"}}>
                                    <h4>Nombre</h4>
                                    <Input
                                        onChange={ (value: ChangeEvent<HTMLInputElement>) => setNombre(value) }
                                        type="text" 
                                        placeholder="Nombre" 
                                    /> 
                                </Row>
                                <Row gutter={[10,10]} style={{margin:"10px 0px 10px 0px"}}>
                                    <h4>Correo</h4>
                                    <Input 
                                        onChange={ (value: ChangeEvent<HTMLInputElement>) => setCorreo(value) }
                                        type="email" 
                                        placeholder="Correo" 
                                    />
                                </Row>
                                <Row gutter={[10,10]} style={{margin:"10px 0px 10px 0px"}}>
                                    <h4>Contraseña</h4>
                                    <Input
                                        onChange= { ( value: ChangeEvent<HTMLInputElement> ) => setContra(value) }
                                        type="password"
                                        placeholder="Contraseña" 
                                    />
                                    <Button 
                                        style={{color:"darkgoldenrod", right:"16px"}} 
                                        type="link" 
                                        icon={<FontAwesomeIcon icon={faEdit} style={{marginRight:"8px"}} />} 
                                    > 
                                        Cambiar contraseña 
                                    </Button>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Fragment>
        )
}

export default Perfil