
import Services from "./Services";
import Contact from "./Contact";
import CarouselInicial from "./CarouselInicial";
import Home from "./Home";
import Tecnologias from "./Tecnologias";
import { Sobre } from "./Sobre";
import { PortfolioSection } from "./PortfolioSection";


const OnePage = () => {
  return (
    <div>
      <Home/>
      <CarouselInicial/>
      <Services />
      <Tecnologias/>
      
      <PortfolioSection/>
      
      <Sobre/>
      <Contact />

    </div>
  );
};

export default OnePage;
