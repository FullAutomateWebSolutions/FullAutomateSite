
import { Typography, Card, Row, Col } from 'antd';

const mockProjects = [
  { title: 'Site para Loja X', description: 'Institucional moderno e rápido' },
  { title: 'Landing Page Y', description: 'Alta conversão para campanha' },
];

const Portfolio = () => (
  <div>
    <Typography.Title level={2}>Portfólio</Typography.Title>
    <Row gutter={[16, 16]}>
      {mockProjects.map((project, index) => (
        <Col span={12} key={index}>
          <Card title={project.title}>{project.description}</Card>
        </Col>
      ))}
    </Row>
  </div>
);

export default Portfolio;