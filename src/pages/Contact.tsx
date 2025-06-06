
import { Typography, Button,  FloatButton } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';

const Contact = () => (
  <div>
  <section id="contato" style={{ textAlign: 'center' }}>
        <Typography.Title level={2}>Fale Conosco</Typography.Title>
        <Typography.Paragraph>
          Entre em contato pelo WhatsApp ou email, e vamos começar seu projeto!
        </Typography.Paragraph>

         <FloatButton icon={<WhatsAppOutlined />} type="primary" href="https://wa.me/5511981007578" target="_blank" style={{ insetInlineEnd: 24 }} />
        <Button type="primary" href="https://wa.me/5511981007578" target="_blank">WhatsApp</Button>
        <br /><br />
        <Button type="text" href="mailto:atendimento@fullautomate.com">fullautomatewebsolutions@gmail.com</Button>
      </section>
  </div>
);

export default Contact;
