import { Carousel } from "antd";

// import Home from "./Home";

// const wrapperStyle: React.CSSProperties = {
//   width: '100%',
//   maxWidth: '1200px', // largura máxima
//   margin: '0 auto 60px auto',
//   borderRadius: '12px',
//   overflow: 'hidden',
//   boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
// };

// const contentStyle: React.CSSProperties = {
//   height: "280px",
//   width: "100%",
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
// };

// const imageStyle: React.CSSProperties = {
//   width: '100%',
//   height: '100%',
//   objectFit: 'cover',
// };

  //  <div style={contentStyle2}>
  //         <img src={a} alt="Slide 3" style={imageStyle} />
  //       </div>

const contentStyle2: React.CSSProperties = {
  height: "300px",
  // color: "#fff",
  lineHeight: "300px",
  // textAlign: "center",
  //  background: 'linear-gradient(to right, rgba(42, 157, 143, 0.08), rgba(11, 65, 92, 0.08))',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};


const CarouselInicial = () => {
  return (
    // <div style={wrapperStyle}>
      <Carousel autoplay autoplaySpeed={1000} dots>
        {/* <div style={contentStyle2}> */}
          {/* <Home/> */}
        {/* </div> */}
        <div style={contentStyle2}>
          <h3 >Site Institucional — a partir de R$ 750</h3>
            <h4>Inclui: página inicial, sobre, serviços e contato + hospedagem básica</h4>
        </div>
         <div style={contentStyle2}>
          <h3 >Painel Administrativo / Dashboard — a partir de R$ 1.200</h3>
            <h4>Inclui: login, tabelas, filtros, CRUD e integrações personalizadas</h4>

        </div>
          <div style={contentStyle2}>
          <h3 >Customização de Plataforma Existente — sob orçamento</h3>
            <h4>Adaptação de telas, criação de módulos e melhorias visuais</h4>

        </div>
     
      </Carousel>
    // </div>
  );
};

export default CarouselInicial;
