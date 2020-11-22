import { Row, Col, Card, Typography, Avatar, Tooltip } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { Fragment, FC } from 'react';

const { Title } = Typography;

const DashboardCards: FC = () => {
    const avatarStyle = { background: 'transparent', color: '#1890ff' }

    return (
        <Fragment>
            <Row gutter={[16, 16]}>
                <Col span={10}>
                    <Card title="Pagos pendientes" bordered={false}>
                        <Title level={3}>10</Title>
                    </Card>
                </Col>
                <Col span={11}>
                    <Card title="Cantidad pendiente" bordered={false}>
                        <Title level={3}>$20,000</Title>
                    </Card>
                </Col>
                <Col span={3}>
                    <Row justify="end">
                        <Col>
                            <Tooltip title="Ir a pagos" placement="top">
                                <Avatar shape="square" style={avatarStyle} icon={<FontAwesomeIcon icon={faExternalLinkAlt} />} />
                            </Tooltip>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={7}>
                    <Card title="Deudas Activas" bordered={false}>
                        <Title level={3}>64</Title>
                    </Card>
                </Col>
                <Col span={7}>
                    <Card title="Deudas Atrasadas" bordered={false}>
                        <Title level={3}>14</Title>
                    </Card>
                </Col>
                <Col span={7}>
                    <Card title="Total Invertido" bordered={false}>
                        <Title level={3}>$150,000</Title>
                    </Card>
                </Col>
                <Col span={3}>
                    <Row justify="end">
                        <Col>
                            <Tooltip title="Ir a deudas" placement="top">
                                <Avatar shape="square" style={avatarStyle} icon={<FontAwesomeIcon icon={faExternalLinkAlt} />} />
                            </Tooltip>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={10}>
                    <Card title="Clientes Activos" bordered={false}>
                        <Title level={3}>14</Title>
                    </Card>
                </Col>
                <Col span={11}>
                    <Card title="Clientes Inactivos" bordered={false}>
                        <Title level={3}>6</Title>
                    </Card>
                </Col>
                <Col span={3}>
                    <Row justify="end">
                        <Col>
                            <Tooltip title="Ir a clientes" placement="top">
                                <Avatar shape="square" style={avatarStyle} icon={<FontAwesomeIcon icon={faExternalLinkAlt} />} />
                            </Tooltip>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    )
}

export default DashboardCards;