
import { Typography, Button, Space } from 'antd';
import { WhatsAppOutlined, MailOutlined } from '@ant-design/icons';

const Contact = () => (
  <div>
    <Typography.Title level={2}>Entre em Contato</Typography.Title>
    <Space direction="vertical" size="large">
      <Button type="primary" icon={<WhatsAppOutlined />} size="large" href="https://wa.me/5599999999999" target="_blank">
        WhatsApp
      </Button>
      <Button icon={<MailOutlined />} size="large" href="mailto:atendimento@fullautomate.com">
        atendimento@fullautomate.com
      </Button>
    </Space>
  </div>
);

export default Contact;
