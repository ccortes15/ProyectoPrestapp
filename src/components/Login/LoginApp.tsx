import { Form, Input, Button, Checkbox, Row, Col, Card, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useRouter } from 'next/router';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const inputLayout = {
  wrapperCol: {
    span: 24,
  },
};

const Login = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onFinish = (values) => {
    const user = {
      username: values.username,
      password: values.password,
    };
    // signIn('credentials', user)
    //   .then(() => {
    //     console.log('Succefully signIn');
    //     router.reload();
    //     return;
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     message.error(error);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  };

  const onFinishFailed = (errorInfo) => {
    setLoading(false);
    console.log('Failed:', errorInfo);
  };

  return (
    <Row justify="center" style={{ paddingTop: 20 }}>
      <Col>
        <Card
          style={{
            boxShadow: '0px 5px 6px 1px rgba(0,0,0,0.21)',
          }}
          cover={<img alt="logoLogin" src="/logo-comepo.png" />}>
          <Form
            {...layout}
            className="login-form"
            name="login"
            initialValues={{
              remember: true,
            }}
            method="POST"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}>
            <Form.Item
              {...inputLayout}
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Ingrese un usuario válido',
                },
              ]}>
              <Input
                placeholder="Usuario"
                name="username"
                prefix={<UserOutlined className="site-form-item-icon" />}
              />
            </Form.Item>

            <Form.Item
              {...inputLayout}
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Ingrese una contraseña',
                },
              ]}>
              <Input.Password
                placeholder="Contraseña"
                name="password"
                prefix={<LockOutlined className="site-form-item-icon" />}
              />
            </Form.Item>

            <Form.Item {...inputLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...inputLayout}>
              <Button
                type="primary"
                style={{
                  backgroundColor: '#35997B',
                  boxShadow: '0px 5px 6px 1px rgba(0,0,0,0.21)',
                  border: 'none',
                }}
                htmlType="submit"
                className="login-form-button"
                onClick={() => {
                  setLoading(true);
                }}
                block
                loading={loading}>
                Enviar
              </Button>
            </Form.Item>

            <br/>

            <Form.Item {...inputLayout}>
              <Button
                type="ghost"
                style={{
                  backgroundColor: 'white',
                  boxShadow: '0px 5px 6px 1px rgba(0,0,0,0.21)',
                  border: 'none',
                }}
                className="login-form-button"
                onClick={() => {
                  setLoading(true);
                }}
                block
                loading={loading}>
                Inicia sesión con Google
              </Button>
            </Form.Item>

          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;