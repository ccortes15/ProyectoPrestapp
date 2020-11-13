import { Form, Input, Button, Checkbox, Card } from 'antd';
import { Fragment, FC, CSSProperties } from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Login: FC = () => {
  const onFinish = (values: Object) => {
    console.log('Received values of form: ', values);
  }

  const styleLogin: React.CSSProperties = {
    display: 'flex',
    width: '25%',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'black'
  }

  return (
    <Fragment>
      <Card style={styleLogin}>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
      </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
      </Button>
      Or <a href="">register now!</a>
        </Form.Item>
      </Form>
      </Card>
    </Fragment>
  )
};

export default Login;