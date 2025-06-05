import React, { useState } from 'react';
import { Layout, Menu, Drawer, Button, Grid } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import logo from '../assets/logo.png';

const { Header: AntHeader } = Layout;
const { useBreakpoint } = Grid;

const Header = () => {
  const [visible, setVisible] = useState(false);
  const screens = useBreakpoint();

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  const isMobile = !screens.md;

  return (
    <AntHeader style={{ position: 'fixed', zIndex: 1000, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff', boxShadow: '0 2px 8px #f0f1f2', padding: '0 20px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Logo" style={{ height: 40, marginRight: 12 }} />
        <h2 style={{ margin: 0 }}>Full Automate</h2>
      </div>
      {isMobile ? (
        <>
          <Button icon={<MenuOutlined />} onClick={showDrawer} />
          <Drawer placement="right" onClose={onClose} visible={visible}>
            <Menu mode="vertical" onClick={onClose}>
              <Menu.Item key="servicos"><a href="#servicos">Serviços</a></Menu.Item>
              <Menu.Item key="portfolio"><a href="#portfolio">Portfólio</a></Menu.Item>
              <Menu.Item key="contato"><a href="#contato">Contato</a></Menu.Item>
            </Menu>
            
          </Drawer>
        </>
      ) : (
        <Menu mode="horizontal" style={{ borderBottom: 'none' }}>
          <Menu.Item key="servicos"><a href="#servicos">Serviços</a></Menu.Item>
          <Menu.Item key="portfolio"><a href="#portfolio">Portfólio</a></Menu.Item>
          <Menu.Item key="contato"><a href="#contato">Contato</a></Menu.Item>
        </Menu>
      )}
    </AntHeader>
  );
};

export default Header;