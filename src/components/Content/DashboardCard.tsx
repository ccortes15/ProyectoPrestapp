import { Row, Col, Card, Typography, Tooltip, Button, Grid } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { Fragment, FC } from 'react';
import Link from 'next/link';

const { Title } = Typography;
const { useBreakpoint } = Grid;

const DashboardCards: FC = () => {
    const screens = useBreakpoint();
    const warningCard = { borderRadius: 5, background: '#F2C407', border: 'none', marginBottom: 5 };
    const successCard = { borderRadius: 5, background: '#16a596', border: 'none', marginBottom: 5 };
    const dangerCard = { borderRadius: 5, background: '#F23D38', border: 'none', marginBottom: 5 };
    const primaryCard = { borderRadius: 5, background: '#148EDB', border: 'none', marginBottom: 5 };

    const getSize = () => {
        return Object.entries(screens)
            .filter(screen => !!screen[1])
            .map(screen => (screen[0]))
    }

    const getButton = (title : string) => {
        return <Tooltip title={title} placement="top">
            <Button
                type="link"
                icon={<FontAwesomeIcon icon={faExternalLinkAlt} style={getSize().length > 1 ? null : { marginRight: 4 }} />}
                block={getSize().length > 1 ? false : true}>
                {getSize().length > 1 ? null : title}
            </Button>
        </Tooltip>
    }

    const pagoCard = [
        {
            xl: { span: 11, order: 1 },
            lg: { span: 11, order: 1 },
            md: { span: 23, order: 1 },
            sm: { span: 24, order: 1 },
            xs: { span: 24, order: 1 },
            title: 'Pagos pendientes',
            content: 10
        },
        {
            xl: { span: 11, offset: 1, order: 2 },
            lg: { span: 11, offset: 1, order: 2 },
            md: { span: 24, offset: 0, order: 3 },
            sm: { span: 24, offset: 0, order: 2 },
            xs: { span: 24, offset: 0, order: 2 },
            title: 'Cantidad pendiente',
            content: '$25,200'
        },
    ]

    const deudaCard = [
        {
            xl: { span: 7, offset: 0, order: 1 },
            lg: { span: 7, offset: 0, order: 1 },
            md: { span: 23, offset: 0, order: 1 },
            sm: { span: 24, offset: 0, order: 1 },
            xs: { span: 24, offset: 0, order: 1 },
            title: 'Deudas activas',
            content: 64,
            style: successCard
        },
        {
            xl: { span: 7, offset: 1, order: 2 },
            lg: { span: 7, offset: 1, order: 2 },
            md: { span: 11, offset: 0, order: 3 },
            sm: { span: 24, offset: 0, order: 2 },
            xs: { span: 24, offset: 0, order: 2 },
            title: 'Deudas atrasadas',
            content: 14,
            style: dangerCard
        },
        {
            xl: { span: 7, offset: 1, order: 3 },
            lg: { span: 7, offset: 1, order: 3 },
            md: { span: 12, offset: 1, order: 4 },
            sm: { span: 24, offset: 0, order: 3 },
            xs: { span: 24, offset: 0, order: 3 },
            title: 'Total invertido',
            content: '$125,000',
            style: primaryCard
        },
    ]

    const clienteCard = [
        {
            xl: { span: 11, order: 1 },
            lg: { span: 11, order: 1 },
            md: { span: 23, order: 1 },
            sm: { span: 24, order: 1 },
            xs: { span: 24, order: 1 },
            title: 'Clientes activos',
            content: 14,
            style: successCard
        },
        {
            xl: { span: 11, offset: 1, order: 2 },
            lg: { span: 11, offset: 1, order: 2 },
            md: { span: 24, offset: 0, order: 3 },
            sm: { span: 24, offset: 0, order: 2 },
            xs: { span: 24, offset: 0, order: 2 },
            title: 'Clientes inactivos',
            content: 6,
            style: dangerCard
        }
    ]

    return (
        <Fragment>
            <Row style={{ marginBottom: 8 }}>
                <Col span={24}>
                    <Link href={`/Dashboard/Proyecciones/${'1'}`} >
                        <Button type="dashed" icon={<FontAwesomeIcon icon={faExternalLinkAlt} style={{ marginRight: 4 }} />} block >
                            Ir a proyecciones
                        </Button>
                    </Link>
                </Col>
            </Row>
            <Row style={{ marginBottom: 8 }}>
                {pagoCard.map((pago, index) => (
                    <Col key={index} xl={pago.xl} lg={pago.lg} md={pago.md} sm={pago.sm} xs={pago.xs}>
                        <Card title={pago.title} bordered={false} style={warningCard}>
                            <Title level={3}>{pago.content}</Title>
                        </Card>
                    </Col>
                ))}
                <Col xl={{ span: 1, order: 3 }} lg={{ span: 1, order: 3 }} md={{ span: 1, order: 2 }} sm={{ span: 24, order: 3 }} xs={{ span: 24, order: 3 }}>
                    <Row justify="end">
                        <Col>
                            {getButton('Ir a pagos')}
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{ marginBottom: 8 }}>
                {deudaCard.map((deuda, index) => (
                    <Col key={index + index} xl={deuda.xl} lg={deuda.lg} md={deuda.md} sm={deuda.sm} xs={deuda.xs}>
                        <Card title={deuda.title} style={deuda.style} bordered={false}>
                            <Title level={3}>{deuda.content}</Title>
                        </Card>
                    </Col>
                ))}
                <Col xl={{ span: 1, order: 4 }} lg={{ span: 1, order: 4 }} md={{ span: 1, order: 2 }} sm={{ span: 24, order: 4 }} xs={{ span: 24, order: 4 }}>
                    <Row justify="end">
                        <Col>
                            {getButton('Ir a deudas')}
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{ marginBottom: 8 }}>
                {clienteCard.map((cliente, index) => (
                    <Col key={index + index + index} xl={cliente.xl} lg={cliente.lg} md={cliente.md} sm={cliente.sm} xs={cliente.xs}>
                        <Card title={cliente.title} style={cliente.style} bordered={false}>
                            <Title level={3}>{cliente.content}</Title>
                        </Card>
                    </Col>
                ))}
                <Col xl={{ span: 1, order: 3 }} lg={{ span: 1, order: 3 }} md={{ span: 1, order: 2 }} sm={{ span: 24, order: 3 }} xs={{ span: 24, order: 3 }}>
                    <Row justify="end">
                        <Col>
                            {getButton('Ir a clientes')}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    )
}

export default DashboardCards;