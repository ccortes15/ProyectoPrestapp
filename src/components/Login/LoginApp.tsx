import { Fragment, FC, useState } from 'react';
import React from "react";
import { Card, Form, Input, Button, Checkbox, Row, Col } from "antd";


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login: React.FC = () => {
  
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return(

    <Row justify = "center" style = {{ marginTop: "60px"}}>
      <Col>
        <Card className = "Login" title= "Inicio de sesión" >
          <Row style = {{background: "black", width: "80px", height: "80px", margin: "20px 0px 20px 50px"}}>
            
          </Row>
          <Row>
            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Row>

            <br/>

          <Row justify = "center" style = {{margin: "0px 20px 0px 20px", padding: "10px", borderTop: "1px solid lightgrey" }}>
            OR
          </Row>
          <Row justify = "center" style = {{margin: "0px 20px 0px 20px", padding: "10px"}}>
            <Button>Sign in with Google</Button>
          </Row>
        </Card>
      </Col>
    </Row>

  )

};

export default Login;
