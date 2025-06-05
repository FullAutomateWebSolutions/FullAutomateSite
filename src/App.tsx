// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import OnePage from './pages/OnePage';

const { Content } = Layout;

const App = () => (
  // <Layout style={{ minHeight: '100vh' }}>
  //   <Header />
  //   <Content style={{ padding: '20px' }}>
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/sobre" element={<About />} />
  //       <Route path="/servicos" element={<Services />} />
  //       <Route path="/portfolio" element={<Portfolio />} />
  //       <Route path="/contato" element={<Contact />} />
  //     </Routes>
  //   </Content>
  //   <Footer />
  // </Layout>

   <Layout style={{ minHeight: '100vh' }}>
    <Header />
    <Content style={{ padding: '40px 20px', background: '#fff' }}>
      <OnePage />
    </Content>
    <Footer />
  </Layout>
);

export default App;