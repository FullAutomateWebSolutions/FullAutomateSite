import { Carousel, Typography } from "antd";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;

const slides = [
  {
    title: "Customização de Plataforma Existente",
    desc: "Adaptação de telas, criação de módulos e melhorias visuais sob medida",
    img: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1200&q=80",
  },
  
  {
    title: "Painel Administrativo / Dashboard ",
    desc: "Inclui: login, tabelas, filtros, CRUD e integrações personalizadas",
    img: "https://full-automate-site.vercel.app/assets/project2-Bb5Yszhv.png",
  },
  {
    title: "Site Institucional ",
    desc: "Inclui: página inicial, sobre, serviços e contato + hospedagem básica",
     img: "https://img.myloview.com.br/posters/hud-para-o-seu-fundo-azul-application-dashboard-space-o-design-do-futuro-700-106707713.jpg",
  }
  
];

const CarouselInicial = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1900px",
        margin: "0 auto 60px",
        // borderRadius: "16px",
        marginBottom: 30,
        marginTop: 30,
        overflow: "hidden",
        boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
      }}
    >
      <Carousel autoplay autoplaySpeed={5000} effect="fade" dots>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              style={{
                height: "380px",
                backgroundImage: `url(${slide.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* sobreposição escura para destacar o texto */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6))",
                }}
              />

              {/* Texto centralizado */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{
                  position: "relative",
                  zIndex: 2,
                  textAlign: "center",
                  color: "#fff",
                  padding: "0 20px",
                  maxWidth: "800px",
                }}
              >
                <Title level={2} style={{ color: "#fff", marginBottom: 10 }}>
                  {slide.title}
                </Title>
                <Paragraph style={{ color: "rgba(255,255,255,0.9)", fontSize: "18px" }}>
                  {slide.desc}
                </Paragraph>
              </motion.div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselInicial;
