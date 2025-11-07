
import { Typography, Card, Row, Col , Image} from 'antd';

const mockProjects = [
  { title: 'Site para Loja X', description: 'Institucional moderno e rápido' },
  { title: 'Landing Page Y', description: 'Alta conversão para campanha' },
];

const Portfolio = () => (
  <div>
    <section id="portfolio" style={{ marginBottom: 30 }}>
    
    <Card
    extra={<Image src="https://http2.mlstatic.com/D_698574-MLA88582498013_072025-M.webp"/>}
     title={<Typography.Title level={2}>Portfólio</Typography.Title>}>

    <Row gutter={[16, 16]}>
      {mockProjects.map((project, index) => (
        <Col span={12} key={index}>
          <Card  title={project.title}>{project.description}</Card>
        </Col>
      ))}
    </Row>
    </Card>
    </section>
  </div>
);

export default Portfolio;