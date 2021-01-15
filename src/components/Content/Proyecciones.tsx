import { Row, Col, Button } from 'antd';
import { FC, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply } from '@fortawesome/free-solid-svg-icons'
import LineChart from './Charts/LineChart';
import BarChart from './Charts/BarChart';
import DoughChart from './Charts/DougChart';
import Link from 'next/link';

const Proyecciones: FC = () => {
    return (
        <Fragment>
            <Row justify="center" style={{ marginBottom: 8 }}>
                <Col xl={{ span: 20 }} lg={{ span: 20 }} md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                    <Link href={`/Dashboard/${'Inicio'}`} >
                        <Button type="dashed" icon={<FontAwesomeIcon icon={faReply} style={{ marginRight: 4 }} />} block >
                            Regresar a Inicio
                        </Button>
                    </Link>
                </Col>
            </Row>
            <Row justify="center">
                <Col xl={{ span: 20 }} lg={{ span: 20 }} md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                    <BarChart />
                    <LineChart />
                    <DoughChart />
                </Col>
            </Row>
        </Fragment >
    )
}

export default Proyecciones;