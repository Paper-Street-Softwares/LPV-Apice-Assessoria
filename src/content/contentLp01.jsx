import bgImg from "../assets/imgs/hero/bgHeroInfluencer.webp";
import logo from "../assets/imgs/logo/logo.webp";
import imagemAbout from "../assets/imgs/about/aboutImg.webp";
import { infos } from "./content";
import { Shield } from "lucide-react";
import { File } from "lucide-react";
import { Banknote } from "lucide-react";
import { FileKey2 } from "lucide-react";
import { Scale } from "lucide-react";
import { Handshake } from "lucide-react";
import { BadgeDollarSign } from "lucide-react";
import { Accessibility } from "lucide-react";
import { ChartNoAxesCombined } from "lucide-react";
import { Ban } from "lucide-react";
import { IdCard } from "lucide-react";
import { Gavel } from "lucide-react";

// import img1 from "../assets/imgs/about/image1.webp";
// import img2 from "../assets/imgs/about/image2.webp";
// import img3 from "../assets/imgs/about/image3.webp";

const currentYear = new Date().getFullYear();

const contentLp01 = {
  infos: {
    title:
      "Ápice Assessoria de Trânsito em Campo Mourão - Defesa Contra Multas, Suspensões e Cassações de CNH",
    description:
      "A Ápice Assessoria de Trânsito, em Campo Mourão - PR, é referência em defesa administrativa e judicial contra multas, suspensões e cassações de CNH. Mais de 25 anos de experiência em soluções jurídicas de trânsito.",
    keywords:
      "Ápice Assessoria De Trânsito, Ápice Assessoria De Trânsito Campo Mourão, Assessoria De Trânsito Em Campo Mourão, Defesa De Multas Campo Mourão, Suspensão De CNH Campo Mourão, Cassação De CNH Campo Mourão, Recursos De Multas Campo Mourão, Advogado De Trânsito Campo Mourão, Defesa Administrativa De Trânsito, Defesa Judicial De Trânsito, Assessoria Jurídica De Trânsito Campo Mourão, Transferência De Pontos CNH Campo Mourão, Cancelamento De Permissão Campo Mourão, Renúncia De Propriedade De Veículo Campo Mourão, Indenização Por Acidente De Trânsito Campo Mourão, Veículos Clonados Campo Mourão, Defesa Técnica Contra Multas, Atuação Contra Suspensão De CNH, Atuação Contra Cassação De CNH, Ápice Assessoria De Trânsito PR.",
  },
  hero: {
    bgImg: bgImg,
    logo: {
      logoImg: logo,
      alt: "Logomarca",
    },
    textArea: {
      title: (
        <h1>
          Multa de trânsito ou
          <span className="text-lpTitle"> CNH suspensa?</span>
        </h1>
      ),
      subtitle:
        "A Ápice Assessoria de Trânsito cuida disso para você — são anos de experiência em todo o Brasil.",
      buttonLabel: "Solicitar análise",
      ctaButtonAriaLabel:
        "Botão para chamada de ação para contato pelo whatsapp",
    },
  },
  features: {
    sectionHeader: {
      miniTag: "ESPECIALIDADES",
      title: "Confira abaixo nossas áreas de atuação",
    },
    cards: {
      card1: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-arrow-left-right-icon lucide-arrow-left-right"
          >
            <path d="M8 3 4 7l4 4" />
            <path d="M4 7h16" />
            <path d="m16 21 4-4-4-4" />
            <path d="M20 17H4" />
          </svg>
        ),
        title: "Transferência de Pontos",
        description:
          "Quando o prazo para indicar o real condutor expira, apenas uma ação judicial pode resolver. Assim, evitamos que os pontos indevidos fiquem no seu prontuário e gerem suspensão por excesso de pontuação.",
      },
      card2: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-x-icon lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        ),
        title: "Cancelamento de Permissão",
        description:
          "Motoristas permissionários correm risco de perder o direito de dirigir por infrações registradas. Atuamos judicialmente para evitar que pontos indevidos comprometam sua CNH definitiva.",
      },
      card3: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-id-card-lanyard-icon lucide-id-card-lanyard"
          >
            <path d="M13.5 8h-3" />
            <path d="m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3" />
            <path d="M16.899 22A5 5 0 0 0 7.1 22" />
            <path d="m9 2 3 6" />
            <circle cx="12" cy="15" r="3" />
          </svg>
        ),
        title: "Suspensão da CNH por Pontos",
        description:
          "Recebeu notificação de suspensão por excesso de pontos ou infração autossuspensiva? Nossa equipe atua em todas as instâncias administrativas e judiciais para tentar reverter a penalidade.",
      },
      card4: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-hand-coins-icon lucide-hand-coins"
          >
            <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
            <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
            <path d="m2 16 6 6" />
            <circle cx="16" cy="9" r="2.9" />
            <circle cx="6" cy="5" r="3" />
          </svg>
        ),
        title: "Renúncia de Propriedade",
        description:
          "Vendeu o veículo e o comprador não transferiu? Isso pode gerar multas, impostos e responsabilidade para você. Ingressamos com ações específicas para transferir a responsabilidade ao comprador.",
      },
      card5: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-scale-icon lucide-scale"
          >
            <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="M7 21h10" />
            <path d="M12 3v18" />
            <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
          </svg>
        ),
        title: "Indenizações por Acidente",
        description:
          "Sofreu acidente de trânsito com prejuízos materiais relevantes? Buscamos indenizações através de ações de responsabilidade civil, assegurando sua reparação integral.",
      },
      card6: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-car-icon lucide-car"
          >
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
            <circle cx="7" cy="17" r="2" />
            <path d="M9 17h6" />
            <circle cx="17" cy="17" r="2" />
          </svg>
        ),
        title: "Veículos Clonados",
        description:
          "Recebeu multas ou cobranças por infrações que não cometeu? Isso pode ser resultado de clonagem de placas. Atuamos para anular as penalidades e responsabilizar os verdadeiros infratores.",
      },
    },
  },
  about: {
    bgImg: bgImg,
    // imagesGaleria: {
    //   imagem1: img1,
    //   imagem2: img2,
    //   imagem3: img3,
    // },
    imgAbout: {
      img: imagemAbout,
    },
    logo: {
      logoImg: logo,
      alt: "logomarca",
    },
    sectionHeader: {
      miniTag: "Excelência em Direito de Trânsito",
      title:
        "Defendemos seus direitos no trânsito com comprometimento e estratégia.",
    },
    paragraph: (
      <p>
        Somos especialistas em defesas administrativas e judiciais contra
        infrações, multas, suspensões e cassações da CNH. Nosso trabalho vai
        além do básico: oferecemos um atendimento estratégico e personalizado,
        analisando cada detalhe do seu caso.
        <br />
        <br />
        Combinamos conhecimento técnico, experiência sólida e soluções
        inovadoras para garantir resultados justos e concretos.
        <br />
        <br />
        Nossa trajetória é marcada por uma atuação firme, próxima e eficiente,
        sempre colocando a proteção dos seus direitos em primeiro lugar.
        <br />
        <br />
        Se você procura um escritório que realmente entende o seu problema e
        luta por você, a Ápice Assessoria de Trânsito é a escolha certa.
      </p>
    ),
    buttonLabel: "Falar com um consultor agora",
    ctaButtonAriaLabel: "Botão de Contato",
  },
  steps: {
    miniTag: "A_Definir",
    title: "A_Definir",
    subtitle: "A_Definir",
    alt: "A_Definir",
    cards: {
      card1: {
        stepNumber: 1,
        cardTitle: "A_Definir",
        cardDescription: "A_Definir",
      },
      card2: {
        stepNumber: 2,
        cardTitle: "A_Definir",
        cardDescription: "A_Definir",
      },
      card3: {
        stepNumber: 3,
        cardTitle: "A_Definir",
        cardDescription: "A_Definir",
      },
      buttonLabel: "A_Definir",
      ariaLabel: "A_Definir",
    },
  },
  whyUs: {
    sectionHeader: {
      miniTag: "A ESCOLHA CERTA",
      title: "Por que somos referência na defesa dos seus direitos no trânsito",
    },
    cards: {
      card1: {
        icon: <Gavel width={32} height={32} />,
        title: "Especialistas em Direito de Trânsito",
        description:
          "Domínio completo do Código de Trânsito Brasileiro e de suas aplicações práticas em cada defesa.",
      },
      card2: {
        icon: <ChartNoAxesCombined width={32} height={32} />,
        title: "Experiência e Atualização Constante",
        description:
          "Mais de duas décadas de atuação em processos administrativos e judiciais, com participação ativa em congressos e eventos da área.",
      },
      card3: {
        icon: <Handshake width={32} height={32} />,
        title: "Atuação Direta junto a Órgãos e Tribunais",
        description:
          "Presença próxima aos DETRANs, CETRANs e instâncias judiciais, acompanhando decisões e garantindo defesas sempre atualizadas.",
      },
      card4: {
        icon: <BadgeDollarSign width={32} height={32} />,
        title: "Estratégias Personalizadas e Eficazes",
        description:
          "Cada caso é único. Desenvolvemos defesas sob medida, com histórico consistente de reversão de multas e suspensão da CNH.",
      },
    },
  },
  video: {
    sectionHeader: {
      miniTag: "A_Definir",
      title: "A_Definir",
      subtitle: "A_Definir",
    },
  },
  ctaUrgency: {
    bgImg: bgImg,
    sectionHeader: {
      miniTag: "NÃO DEIXE ESSA SITUAÇÃO PIORAR",
      title:
        "Grande parte das suspensões e cassações acontece porque o motorista não sabe como se defender corretamente.",
      subtitle: (
        <p className="opacity-80">
          Na Ápice Assessoria de Trânsito, utilizamos o Código de Trânsito
          Brasileiro, as Resoluções do CONTRAN e jurisprudências recentes para
          proteger o seu direito de dirigir.
        </p>
      ),
    },
    buttonLabel: "Se houver chance de cancelar, a Ápice vai cancelar",
    ctaButtonAriaLabel: "Botão de Contato",
  },
  cta: {
    bgImg: bgImg,
    sectionHeader: {
      miniTag: "NÃO PERCA TEMPO",
      title: "Fale com a Ápice Assessoria de Trânsito agora mesmo",
      subtitle: (
        <p className="opacity-80">
          Envie seus dados e receba uma análise agora mesmo: <br />
          <br />
          <span className="text-bgSectionDark"> Nome</span>
          <br />
          <br />
          <span className="text-bgSectionDark"> WhatsApp</span>
          <br />
          <br />
          <span className="text-bgSectionDark">
            {" "}
            Placa do veículo ou nº do processo
          </span>
        </p>
      ),
    },
    buttonLabel: "Falar com um Especialista",
    ctaButtonAriaLabel: "Botão de Contato",
  },
  contact: {
    card1: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-instagram"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
      title: "Instagram",
      description: `@${infos.instagramProfile}`,
    },
    card2: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-mail"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      title: "Email",
      description: `${infos.email}@${infos.domain}`,
    },
    card3: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-whatsapp"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      ),
      title: "Whatsapp",
      description: `(${infos.phone.ddd}) ${infos.phone.firstPart}-${infos.phone.secondPart}`,
    },
    card4: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-phone-icon lucide-phone"
        >
          <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
        </svg>
      ),
      title: "Fixo",
      description: `(${infos.phoneSecundario.ddd}) ${infos.phoneSecundario.firstPart}-${infos.phoneSecundario.secondPart}`,
    },
  },
  footer: {
    copyrightLine: `© ${currentYear} ${infos.name}. Todos os direitos reservados.`,
    disclaimer: `Este site não é um produto Meta Platforms, Inc., Google LLC, tampouco oferece serviços públicos oficiais. ${infos.name} oferece serviços jurídicos privativos de advogado, de acordo com a legislação vigente e o Código de Ética e Disciplina da Ordem dos Advogados do Brasil.`,
  },
  links: {
    instagram: `https://www.instagram.com/${infos.instagramProfile}/`,
    ctaWhatsapp: `https://wa.me/+55${infos.phone.ddd}${infos.phone.firstPart}${infos.phone.secondPart}?text=${infos.whatsappDefaultMessage}`,
  },
};

export default contentLp01;
