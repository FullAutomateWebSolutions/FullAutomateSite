import React from 'react';
import { Typography, List } from 'antd';

const services = [
  'Criação de sites institucionais',
  'Landing pages para campanhas',
  'Manutenção de sites existentes',
  'Hospedagem e suporte técnico',
];

const Services = () => (
  <div>
    <Typography.Title level={2}>Nossos Serviços</Typography.Title>
    <List
      dataSource={services}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  </div>
);

export default Services;