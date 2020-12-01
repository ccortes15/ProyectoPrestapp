import { Form, Input, Button, Row, Col, Card } from 'antd';
import { Fragment, FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock} from '@fortawesome/free-solid-svg-icons'
import { GoogleOutlined, FacebookFilled } from '@ant-design/icons'
import styles from './styles/Style.module.css'

const FormLogin: FC = () => {
    return (
        <Fragment>
            <Row gutter={16}>
                <Col span={12}>
                    <Form
                        name="normal_login"
                        layout="horizontal"
                        initialValues={{ remember: true }}
                    //onFinish={onFinish}
                    >
                        <Form.Item
                            name="user"
                            rules={[{ required: true, message: 'Favor de ingresar un usuario' }]}
                        >
                            <Input className={styles.inputStyle} prefix={<FontAwesomeIcon icon={faUser} />} placeholder="Usuario" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Favor de ingresar una Contraseña' }]}
                        >
                            <Input
                                className={styles.inputStyle}
                                prefix={<FontAwesomeIcon icon={faLock} />}
                                type="password"
                                placeholder="Contraseña"
                            />
                        </Form.Item>

                        <Form.Item >
                            <Row justify="center">
                                <Col>
                                    <Button type="primary" className={styles.buttonStyle} htmlType="submit" >
                                        Entrar
                                    </Button>
                                </Col>
                            </Row>

                        </Form.Item>
                    </Form>
                </Col>

                <Col span={12}>
                    <Card style={{ width: '50%', margin: 'auto' }}>
                    <Button type="primary" className={styles.buttonFacebookStyle} icon={<FacebookFilled />} block>
                            Ingresar con Facebook
                            </Button>
                        <Button type="primary" className={styles.buttonGoogleStyle} icon={<GoogleOutlined />} block>
                            Ingresar con Google
                            </Button>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}

export default FormLogin;