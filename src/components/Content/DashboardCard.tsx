import { Row, Col, Card, Typography, Tooltip, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { Fragment, FC } from 'react';
import Link from 'next/link';

const { Title } = Typography;

const DashboardCards: FC = () => {
    const warningCard = { borderRadius: 5, background: 'white', border: '2px solid #F5EF40' };
    const successCard = { borderRadius: 5, background: 'white', border: '2px solid #08A83A' };
    const dangerCard = { borderRadius: 5, background: 'white', border: '2px solid #A80300' };

    const deudaCard = [
        {
            span: 10,
            title: 'Pagos pendientes',
            content: 10
        },
        {
            span: 11,
            title: 'Cantidad pendiente',
            content: '$25,200'
        },
    ]

    const pagoCard = [
        {
            title: 'Deudas activas',
            content: 64,
            style: successCard
        },
        {
            title: 'Deudas atrasadas',
            content: 14,
            style: dangerCard
        },
        {
            title: 'Total invertido',
            content: '$125,000',
            style: successCard
        },
    ]

    const clienteCard = [
        {
            span: 10,
            title: 'Clientes activos',
            content: 14,
            style: successCard
        },
        {
            span: 11,
            title: 'Clientes inactivos',
            content: 6,
            style: dangerCard
        }
    ]

    return (
        <Fragment>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Row justify="end">
                        <Col>
                            <Link href={`/Dashboard/proyecciones/${'1'}`} >
                                <Button type="dashed" icon={<FontAwesomeIcon icon={faExternalLinkAlt} style={{ marginRight: 4 }} />} >
                                    Ir a proyecciones
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                {deudaCard.map((deuda, index) => (
                    <Col key={index} span={deuda.span}>
                        <Card title={deuda.title} bordered={false} style={warningCard}>
                            <Title level={3}>{deuda.content}</Title>
                        </Card>
                    </Col>

                ))}
                <Col span={3}>
                    <Row justify="end">
                        <Col>
                            <Tooltip title="Ir a pagos" placement="top">
                                <Button type="link" icon={<FontAwesomeIcon icon={faExternalLinkAlt} />} />
                            </Tooltip>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                {pagoCard.map((pago, index) => (
                    <Col key={index+index} span={7}>
                        <Card title={pago.title} style={pago.style} bordered={false}>
                            <Title level={3}>{pago.content}</Title>
                        </Card>
                    </Col>

                ))}
                <Col span={3}>
                    <Row justify="end">
                        <Col>
                            <Tooltip title="Ir a deudas" placement="top">
                                <Button type="link" icon={<FontAwesomeIcon icon={faExternalLinkAlt} />} />
                            </Tooltip>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                {clienteCard.map((cliente, index) => (
                    <Col key={index+index+index} span={cliente.span}>
                        <Card title={cliente.title} style={cliente.style} bordered={false}>
                            <Title level={3}>{cliente.content}</Title>
                        </Card>
                    </Col>
                ))}
                <Col span={3}>
                    <Row justify="end">
                        <Col>
                            <Tooltip title="Ir a clientes" placement="top">
                                <Button type="link" icon={<FontAwesomeIcon icon={faExternalLinkAlt} />} />
                            </Tooltip>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    )
}

export default DashboardCards;