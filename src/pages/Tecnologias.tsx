
import { Typography, Card , Image} from 'antd';

const mockProjects = [
  { title: 'Tecnologias', description: ' React • TypeScript • Ant Design • Firebase • Node.js • Fastify • API REST ' },
  // { title: 'Sobre / Quem Sou', description: 'Sou desenvolvedor web especializado em React, e ajudo empresas a transformarem processos manuais em plataformas modernas e automatizadas.' },
];

const Tecnologias = () => (
  <div>
    <section id="tecnologias" style={{ marginBottom: 30 }}>
    
    {/* <Row gutter={[16, 16]}> */}
      {mockProjects.map((project, index) => (
        // <Col span={12} key={index}>
          <Card key={index} 
           extra={<Image src="https://http2.mlstatic.com/D_698574-MLA88582498013_072025-M.webp"/>}
           title={<Typography.Title level={2}>{project.title}</Typography.Title>}>{project.description}</Card>
        // </Col>
      ))}
    {/* </Row> */}
    </section>
  </div>
);

export default Tecnologias;
/// vem facil vai facil 