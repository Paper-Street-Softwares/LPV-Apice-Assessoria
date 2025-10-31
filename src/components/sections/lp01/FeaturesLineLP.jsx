import React from "react";
import SectionArea from "../../sectionElements/SectionArea";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import Button from "../../interactives/Button";
import contentLp01 from "../../../content/contentLp01"; // seu arquivo de conteúdo

function FeaturesLineLP() {
  // Puxando os steps do contentLp01
  const steps = Object.values(contentLp01.features.cards);

  return (
    <div className="w-full flex flex-col gap-12 items-center">
      <div className="w-full flex justify-center bg-white tablet2:hidden">
        <div className="relative flex flex-col items-center w-[90%] max-w-[415px]">
          {/* Linha vertical central */}
          <div className="absolute left-[41%] phone2:left-[42.5%] phone3:left-[43.5%] tablet1:left-[44.5%] top-0 w-[2px] h-[445px] phone2:h-[420px] phone3:h-[400px] bg-black z-0" />

          {/* Itens */}
          {steps.map((step, i) => (
            <div key={i} className="flex w-full items-center mb-12 relative">
              {/* Ícone à esquerda da linha */}
              <div className="flex flex-col items-center relative w-1/2">
                <div className="flex items-center justify-center rounded-full border-2 w-14 h-14 bg-white text-black border-bgSectionDark z-10">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                {/* Linha horizontal conectando ao centro */}
                <div className="absolute top-[26px] right-7 w-8 h-[4px] bg-black" />
                {/* Pontinho */}
                <div className="w-3 h-3 rounded-full bg-black absolute right-4 top-[calc(50%-6px)]" />
              </div>

              {/* Texto à direita da linha */}
              <div className="flex flex-col justify-center w-1/2 pl-4 mt-4">
                <p className="font-semibold text-paragraph2">{step.title}</p>
                <p className="text-gray-400 text-paragraph1">{step.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full  justify-center bg-white hidden tablet2:flex">
        <div className="relative flex items-center justify-between w-full max-w-[1024px]">
          {/* Linha principal */}
          <div className="absolute bottom-[44px] left-0 right-0 h-[2px] bg-black z-0" />

          {/* Itens */}
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center relative">
              {/* Bolinha e icon */}
              <div className="flex items-center justify-center rounded-full border-2 w-14 h-14 bg-white text-black border-bgSectionDark">
                <span className="text-2xl">{step.icon}</span>
              </div>
              {/* Linha vertical */}
              <div className="w-[2px] h-4 bg-black" />
              <div className="w-2 h-2 bottom-[41.5px] rounded-full absolute bg-black" />
              {/* Texto */}
              <div className="text-center mt-2 flex flex-col justify-start">
                <p className="font-semibold text-paragraph2 w-[170px]">
                  {step.title}
                </p>
                <p className="text-gray-400 text-paragraph1">{step.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button label={contentLp01.features.buttonLabel} />
    </div>
  );
}

export default FeaturesLineLP;
