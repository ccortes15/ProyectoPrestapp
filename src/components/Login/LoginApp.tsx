import { Form, Input, Button, Row, Col, Card, Alert, Typography } from 'antd';
import { Fragment, FC, CSSProperties } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { GoogleOutlined, FacebookFilled } from '@ant-design/icons'

const { Title } = Typography;

const Login: FC = () => {

  const styleLogin: CSSProperties = {
    width: '350px',
    height: '100%',
    margin: 'auto',
    marginTop: '5%',
    background: '#FFFFFF',
    border: '1px solid #000000',
    boxSizing: 'border-box',
    boxShadow: '0px 8px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '20px'
  }

  return (
    <Fragment>
      <Card style={styleLogin} cover={<img alt="example" style={{ width: '100px', margin: 'auto', marginTop: '5%' }} src="/logo.png" />}>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          //onFinish={onFinish}
        >
          <Form.Item
            name="user"
            rules={[{ required: true, message: 'Favor de ingresar un usuario' }]}
          >
            <Input prefix={<FontAwesomeIcon icon={faUser} />} placeholder="Usuario" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Favor de ingresar una Contraseña' }]}
          >
            <Input
              prefix={<FontAwesomeIcon icon={faLock} />}
              type="password"
              placeholder="Contraseña"
            />
          </Form.Item>

          <Form.Item >
            <Row justify="center">
              <Col>
                <Button type="primary" htmlType="submit" >
                  Entrar
            </Button>
              </Col>
            </Row>

          </Form.Item>

          <Form.Item>
            <Row justify="center">
              <Col>
                <Button type="link" htmlType="submit" icon={<FontAwesomeIcon style={{ marginRight: 4 }} icon={faExternalLinkAlt} />}>
                  Registrarme
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
        <Alert
          message={
            <Title level={4} style={{ textAlign: 'center' }}>Tambien puedes ingresar con:</Title>
          }
          description={
            <>
              <Row justify="center">
                <Col>
                  <Button type="primary" htmlType="submit" style={{ marginBottom: 4 }} icon={<GoogleOutlined />}>
                    Sign in with Google
                  </Button>
                </Col>
              </Row>
              <Row justify="center">
                <Col>
                  <Button type="primary" htmlType="submit" style={{ marginBottom: 4 }} icon={<FacebookFilled />}>
                    Sign in with Facebook
                  </Button>
                </Col>
              </Row>

            </>
          }
          type="info"
        />
      </Card>
    </Fragment>
  )
};

export default Login;