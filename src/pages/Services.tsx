import { Typography, Col, Row, Card } from "antd";
import siteInstitucional from '../assets/siteInstitucional.png';
import landingPage from '../assets/landingPage.png';
import manutencao from '../assets/manutencao.png';

const servicess = [
  // {
  //   title: "Criação de Sites Profissionais",
  //   description: "Sites modernos, responsivos e otimizados (React, Vite, Ant Design)",
  //   img: siteInstitucional,
  // },
  {
    title: "Dashboards e Sistemas Internos",
    description: "Painéis administrativos completos com login, CRUD, filtros e integrações",
    img: siteInstitucional,
  },
    {
    title: "Customização de Plataformas",
    description: "Adaptação visual, novos módulos e melhorias em sistemas já existentes",
    img: landingPage,
  },
   {
    title: "Integrações e Automação",
    description: "Conexão com APIs, Firebase, bancos de dados e serviços em nuvem",
    img: landingPage,
  },
  
  {
    title: "Manutenção e Suporte",
    description: "Mantemos seu site sempre atualizado e no ar.",
    img: manutencao,
    obs: [
      "Configuração e publicação em Vercel, e outros provedores",
      "Landing pages para campanhas",
      "Manutenção de sites existentes",
      "Hospedagem e suporte técnico",
    ],
  },
];

const Services = () => (
  <div>
    <section id="servicos" style={{ marginBottom: 60, textAlign: 'center' }}>
      <Card title={<Typography.Title level={2}>Serviços</Typography.Title>}>
      
      <Row  gutter={[18, 18]} justify="center" align={"stretch"}>
        {servicess.map((e, i) => (
          <Col key={i}  style={{ display: 'flex', justifyContent: 'center' }}>
            <Card
            
              hoverable
              style={{ width: 300  }}
              cover={<img alt={e.title} src={e.img} />}
            >
              <Card.Meta title={e.title} description={e.description} />
            </Card>
          </Col>
        ))}
      </Row>
      </Card>
    </section>
  </div>
);

export default Services;
