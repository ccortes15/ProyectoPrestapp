import { Drawer, Row, Col, Space, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import { FC, useState } from 'react';
import FormLogin from './FormLogin';
import styles from './styles/Style.module.css'

type TitleType = 'Iniciar sesión' | 'Registrarme'

const Login: FC = () => {
  const [title, setTitle] = useState<TitleType>('Iniciar sesión')
  const [visible, setVisible] = useState<boolean>(false);

  const clickLogin = ():void => {
    setTitle('Iniciar sesión');
    setVisible(true)
  }

  const clickRegister = ():void => {
    setTitle('Registrarme')
    setVisible(true)
  }

  return (
    <div className={styles.loginStyle} >
      <Row justify="center">
        <Col>
          <div className={styles.titleStyle}>
            ¡Bienvenidos a Finanset!
            </div>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Space size="small">
            <Button type="primary" className={styles.buttonLoginStyle} onClick={clickLogin}>Iniciar sesión</Button>
            <Button type="primary" className={styles.buttonLoginStyle} onClick={clickRegister} >Registrarme</Button>
          </Space>
        </Col>
      </Row>

      <Drawer
        onClose={() => setVisible(false)}
        title={title}
        placement={'bottom'}
        visible={visible}
      >
        <FormLogin />
      </Drawer>
    </div>
  )
};

export default Login;