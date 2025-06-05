import { Typography, Button, Carousel, Card, Row, Col } from 'antd';
import logo from '../assets/logo.png';

const contentStyle: React.CSSProperties = {
  height: '300px',
  color: '#fff',
  lineHeight: '300px',
  textAlign: 'center',
  background: '#364d79',
};

const parceiroStyle: React.CSSProperties = {
  height: 100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const OnePage = () => {
  return (
    <div>
      <section style={{ textAlign: 'center', marginBottom: 60 }}>
        <img src={logo} alt="Logo Full Automate" style={{ width: 100, marginBottom: 20 }} />
        <Typography.Title>Full Automate Web Solutions</Typography.Title>
        <Typography.Paragraph>
          É sempre possível melhorar — Sites rápidos, modernos e personalizados.
        </Typography.Paragraph>
        <Button type="primary" size="large">Solicite um orçamento</Button>
      </section>

      <Carousel autoplay style={{ marginBottom: 60 }} autoplaySpeed={5000}>
        <div><h3 style={contentStyle}>Soluções Web que Crescem com Você</h3></div>
        <div><h3 style={contentStyle}>Design Responsivo e Profissional</h3></div>
        <div><h3 style={contentStyle}>Foco na Performance e Conversão</h3></div>
      </Carousel>

      <section id="servicos" style={{ marginBottom: 60 }}>
        <Typography.Title level={2}>Serviços</Typography.Title>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={8}><Card title="Site Institucional">Ideal para apresentar sua empresa com estilo e clareza.</Card></Col>
          <Col xs={24} md={8}><Card title="Landing Page">Alta conversão para suas campanhas e lançamentos.</Card></Col>
          <Col xs={24} md={8}><Card title="Manutenção e Suporte">Mantemos seu site sempre atualizado e no ar.</Card></Col>
        </Row>
      </section>

      <section id="portfolio" style={{ marginBottom: 30 }}>
        <Typography.Title level={2}>Portfólio</Typography.Title>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}><Card title="Projeto Loja X">Site moderno e funcional para e-commerce local.</Card></Col>
          <Col xs={24} md={12}><Card title="Campanha Y">Landing page que gerou +300% de conversão.</Card></Col>
        </Row>
      </section>

      <Carousel autoplay dots={false} autoplaySpeed={3000} slidesToShow={3} style={{ marginBottom: 60 }}>
        <div style={parceiroStyle}><img src="/parceiro1.png" alt="Parceiro 1" style={{ width: 80 }} /></div>
        <div style={parceiroStyle}><img src="/parceiro2.png" alt="Parceiro 2" style={{ width: 80 }} /></div>
        <div style={parceiroStyle}><img src="/parceiro3.png" alt="Parceiro 3" style={{ width: 80 }} /></div>
      </Carousel>

      <section id="contato" style={{ textAlign: 'center' }}>
        <Typography.Title level={2}>Fale Conosco</Typography.Title>
        <Typography.Paragraph>
          Entre em contato pelo WhatsApp ou email, e vamos começar seu projeto!
        </Typography.Paragraph>
        <Button type="primary" href="https://wa.me/5511981007578" target="_blank">WhatsApp</Button>
        <br /><br />
        <Button href="mailto:atendimento@fullautomate.com">atendimento@fullautomate.com</Button>
      </section>
    </div>
  );
};

export default OnePage;