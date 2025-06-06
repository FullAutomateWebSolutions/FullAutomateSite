
import { Typography, Button } from 'antd';
// import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => (
  // <motion.div
  //   initial={{ opacity: 0, y: 20 }}
  //   animate={{ opacity: 1, y: 0 }}
  //   transition={{ duration: 0.6 }}
  // >
  <>
    <Typography.Title level={1}>Soluções Web Personalizadas</Typography.Title>
    <Typography.Paragraph>
      Desenvolvemos sites modernos, rápidos e alinhados com a identidade da sua empresa.
    </Typography.Paragraph>
    <Link to="/contato">
      <Button type="primary" size="large">Solicitar Orçamento</Button>
    </Link>
    </>
  // </motion.div>
);

export default Home;