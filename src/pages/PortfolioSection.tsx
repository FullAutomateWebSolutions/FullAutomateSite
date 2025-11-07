
import { Card, Row, Col, Typography, Button } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import project from '../assets/project2.png';
import projectG from '../assets/projectG.jpg';
const {  Paragraph } = Typography;

export function PortfolioSection() {
  return (
    <div >
 <Card
    extra={<><img src="https://http2.mlstatic.com/D_698574-MLA88582498013_072025-M.webp"/></>}
     title={<Typography.Title level={2}>Projetos Recentes</Typography.Title>}>

      

      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={8}>
          <Card
            title="Dashboard de Inventário"
            hoverable
            cover={<video id="ember790_html5_api"  poster="https://media.licdn.com/dms/image/v2/D4D05AQEnYO4_U_pGWg/videocover-low/B4DZjt1c8IHYCI-/0/1756336874770?e=1763085600&amp;v=beta&amp;t=GEwVR4hoACBpdTsD_p3caLgc2jmaRgLcjoDozjrkHZ4" src="blob:https://www.linkedin.com/3dc8ee96-fff4-4b62-941c-64c37301b755" ></video>}
          >
            <Paragraph>
              Sistema interno desenvolvido em React + Firebase para controle de produtos, movimentações e estoque.
            </Paragraph>
            <Button
              type="link"
              icon={<GithubOutlined />}
              href="https://github.com/FullAutomateWebSolutions"
              target="_blank"
            >
              Ver no GitHub
            </Button>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card
            title="Portal Institucional"
            hoverable
            cover={<img alt="Portal" src={project} />}
          >
            <Paragraph>
              Site institucional moderno com Vite + Ant Design, responsivo e integrado ao Firebase Hosting.
            </Paragraph>
            {/* <Button
              type="link"
              icon={<GithubOutlined />}
              href="https://github.com/FullAutomateWebSolutions"
              target="_blank"
            >
              Ver no GitHub
            </Button> */}
          </Card>
        </Col>

         <Col xs={24} md={8}>
          <Card
            title="Portal CRUD e integrações personalizadas"
            hoverable
            cover={<img alt="Portal" src={projectG} />}
          >
            <Paragraph>
              Plataforma com componentes avançados e sistema de gestão de acessos RBAC (Role-Based Access Control)
               login, tabelas, filtros, CRUD e integrações personalizadas
            </Paragraph>
            {/* <Button
              type="link"
              icon={<GithubOutlined />}
              href="https://github.com/FullAutomateWebSolutions"
              target="_blank"
            >
              Ver no GitHub
            </Button> */}
          </Card>
        </Col>
      </Row>
    </Card>
      
    </div>
  );
}
