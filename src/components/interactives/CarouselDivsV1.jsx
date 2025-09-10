import React from "react";
import { Carousel } from "primereact/carousel";
import "../../index.css";

export default function CarouselDivsV1({ children }) {
  // Configuração de responsividade
  const responsiveOptions = [
    {
      breakpoint: "2500px",
      numVisible: 3,
      numScroll: 1, // 👈 andar de 1 em 1
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  // Template de cada item
  const itemTemplate = (item) => {
    return (
      <div className="border-1 rounded text-center py-5 px-3 h-full w-auto">
        <div className="flex justify-center items-center h-auto">{item}</div>
      </div>
    );
  };

  return (
    <div>
      <Carousel
        value={children}
        numVisible={3}
        numScroll={1} // 👈 garante que o último não some
        responsiveOptions={responsiveOptions}
        className="text-colorWhite"
        circular
        // autoplayInterval={8000} // habilite se quiser autoplay
        itemTemplate={itemTemplate}
        showNavigators={true} // habilita arrows
        showIndicators={false}
        prevIcon={<span style={{ color: "#F49F22", fontSize: "200%" }}>❮</span>}
        nextIcon={<span style={{ color: "#F49F22", fontSize: "200%" }}>❯</span>}
      />
    </div>
  );
}
