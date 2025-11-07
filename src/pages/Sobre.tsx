import { Card, Typography, Row, Col, Avatar, Image } from "antd";

const { Title, Paragraph } = Typography;

export function Sobre() {
  return (
    <div>
      <section
        id="sobre"
        style={{
          marginBottom: 30,
          marginTop: 30,
          justifyItems: "center",
        }}
      >
        <Card
          bordered={false}
          extra={
            <Image src="https://http2.mlstatic.com/D_698574-MLA88582498013_072025-M.webp" />
          }
          title={<Title level={2}>Sobre</Title>}
        >
          <Row gutter={[16, 16]} align="middle" justify="center">
            {/* Foto do Perfil */}
            <Col
              xs={{ span: 24, order: 1 }} // em telas pequenas, ocupa 100% e vem primeiro
              md={{ span: 8, order: 0 }}  // em telas médias/grandes, fica na esquerda
              style={{ textAlign: "center" }}
            >
              <Avatar
                size={180}
                src="https://media.licdn.com/dms/image/v2/D4D03AQF4QZYtLPoTWQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718401389262?e=1764201600&v=beta&t=qBmzl8LB35q4gmDSW3bfEs1FaTQcv3ZnfXbdonvI100"
                alt="Alex Sandro"
                style={{
                  border: "2px solid rgba(18, 233, 208, 0.94)",
                }}
              />
            </Col>

            {/* Descrição Profissional */}
            <Col
              xs={{ span: 24, order: 2 }} // em telas pequenas, vem abaixo da imagem
              md={{ span: 16, order: 0 }} // em telas médias/grandes, fica à direita
            >
              <Title level={3}>
                Alex Sandro — Desenvolvedor Web Full Stack
              </Title>
              <Paragraph className="text-lg">
                Sou <strong>Alex Sandro</strong>, desenvolvedor web full stack e
                fundador da{" "}
                <strong>Full Automate Web Solutions</strong>.
                Tenho experiência no desenvolvimento de{" "}
                <strong>sistemas web modernos</strong>, dashboards
                administrativos, integrações com APIs e automação de processos
                utilizando <strong>React, TypeScript, Node.js e Firebase</strong>.
              </Paragraph>
              <Paragraph>
                Ao longo da minha trajetória, trabalhei em projetos voltados para{" "}
                <strong>otimização de fluxos internos</strong>,{" "}
                <strong>painéis de controle personalizados</strong> e{" "}
                <strong>customização de plataformas já existentes</strong>, sempre
                com foco em performance, usabilidade e design limpo.
              </Paragraph>
              <Paragraph>
                Meu propósito é ajudar empresas e profissionais a{" "}
                <strong>
                  transformarem ideias em soluções digitais reais
                </strong>
                , que simplificam o dia a dia e impulsionam resultados.
              </Paragraph>
            </Col>
          </Row>
        </Card>
      </section>
    </div>
  );
}
