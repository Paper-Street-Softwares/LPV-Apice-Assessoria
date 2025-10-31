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
      "A Ápice Assessoria de Trânsito, em Campo Mourão - PR, é referência em defesa administrativa contra multas, suspensões e cassações de CNH. Mais de 25 anos de experiência em soluções administrativas de trânsito.",
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
          Recebeu uma <strong>notificação</strong>
          <span className="text-lpTitle">
            {" "}
            do <strong>Detran</strong>?
          </span>
        </h1>
      ),
      subtitle:
        "Ainda dá tempo de evitar a suspensão da sua CNH. A equipe da Ápice cuida de todo o processo e garante sua defesa para que você continue dirigindo legalmente. ",
      buttonLabel: "Fale com um especialista no WhatsApp",
      ctaButtonAriaLabel:
        "Botão para chamada de ação para contato pelo whatsapp",
    },
    obsHero: {
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
          class="lucide lucide-map-pin-check"
        >
          <path d="M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728" />
          <circle cx="12" cy="10" r="3" />
          <path d="m16 18 2 2 4-4" />
        </svg>
      ),
      text: "Prazo para recorrer: até 15 dias após notificação!",
    },
  },
  features: {
    sectionHeader: {
      miniTag: "ESPECIALIDADES",
      title: "Entenda o que faz a Ápice a melhor solução",
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
            class="lucide lucide-users-icon lucide-users"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <path d="M16 3.128a4 4 0 0 1 0 7.744" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <circle cx="9" cy="7" r="4" />
          </svg>
        ),
        title: "Mais de 1000 motoristas atendidos em todo o Paraná.",
        description: "",
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
            class="lucide lucide-heart-handshake-icon lucide-heart-handshake"
          >
            <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762" />
          </svg>
        ),
        title: "Atendimento rápido, humano e especializado. ",
        description: "",
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
            class="lucide lucide-file-search-icon lucide-file-search"
          >
            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
            <path d="M14 2v5a1 1 0 0 0 1 1h5" />
            <circle cx="11.5" cy="14.5" r="2.5" />
            <path d="M13.3 16.3 15 18" />
          </svg>
        ),
        title: "Análise gratuita do seu processo de suspensão.",
        description: "",
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
            class="lucide lucide-life-buoy-icon lucide-life-buoy"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m4.93 4.93 4.24 4.24" />
            <path d="m14.83 9.17 4.24-4.24" />
            <path d="m14.83 14.83 4.24 4.24" />
            <path d="m9.17 14.83-4.24 4.24" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        ),
        title: "Suporte completo até o fim do recurso. ",
        description: "",
      },
      // card5: {
      //   icon: (
      //     <svg
      //       xmlns="http://www.w3.org/2000/svg"
      //       width="24"
      //       height="24"
      //       viewBox="0 0 24 24"
      //       fill="none"
      //       stroke="currentColor"
      //       stroke-width="2"
      //       stroke-linecap="round"
      //       stroke-linejoin="round"
      //       class="lucide lucide-scale-icon lucide-scale"
      //     >
      //       <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      //       <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      //       <path d="M7 21h10" />
      //       <path d="M12 3v18" />
      //       <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
      //     </svg>
      //   ),
      //   title: "Indenizações por Acidente",
      //   description:
      //     "Sofreu acidente de trânsito com prejuízos materiais relevantes? Buscamos indenizações através de ações de responsabilidade civil, assegurando sua reparação integral.",
      // },
      // card6: {
      //   icon: (
      //     <svg
      //       xmlns="http://www.w3.org/2000/svg"
      //       width="24"
      //       height="24"
      //       viewBox="0 0 24 24"
      //       fill="none"
      //       stroke="currentColor"
      //       stroke-width="2"
      //       stroke-linecap="round"
      //       stroke-linejoin="round"
      //       class="lucide lucide-car-icon lucide-car"
      //     >
      //       <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      //       <circle cx="7" cy="17" r="2" />
      //       <path d="M9 17h6" />
      //       <circle cx="17" cy="17" r="2" />
      //     </svg>
      //   ),
      //   title: "Veículos Clonados",
      //   description:
      //     "Recebeu multas ou cobranças por infrações que não cometeu? Isso pode ser resultado de clonagem de placas. Atuamos para anular as penalidades e responsabilizar os verdadeiros infratores.",
      // },
    },
    buttonLabel: "Envie sua notificação agora mesmo",
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
        "Defendemos seus direitos no trânsito com comprometimento e estratégia",
    },
    paragraph: (
      <p>
        Somos especialistas em defesas administrativas contra infrações, multas,
        suspensões e cassações da CNH. Nosso trabalho vai além do básico:
        oferecemos um atendimento estratégico e personalizado, analisando cada
        detalhe do seu caso.
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
        cardTitle: "Envie sua notificação pelo WhatsApp. ",
        cardDescription: "",
      },
      card2: {
        stepNumber: 2,
        cardTitle: "Receba uma análise gratuita do seu caso. ",
        cardDescription: "",
      },
      card3: {
        stepNumber: 3,
        cardTitle:
          "Nossa equipe monta o recurso completo e acompanha até a resolução.",
        cardDescription: "",
      },
      buttonLabel: "Quero enviar minha notificação agora",
      ariaLabel: "botão de contato",
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
          "Anos de atuação em processos administrativos, com participação ativa em congressos e eventos da área.",
      },
      card3: {
        icon: <Handshake width={32} height={32} />,
        title: "Atuação Direta junto a Órgãos e Tribunais",
        description:
          "Presença próxima aos DETRANs, CETRANs, acompanhando decisões e garantindo defesas sempre atualizadas.",
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
        "A Ápice é especialista em recursos de suspensão e cassação de CNH em todo o Paraná. ",
      subtitle: (
        <p className="opacity-80">
          Nós analisamos o seu caso, preparamos toda a defesa e acompanhamos o
          processo junto ao Detran, passo a passo. Você não precisa enfrentar a
          burocracia — nós fazemos tudo por você.
        </p>
      ),
    },
    buttonLabel: "Quero saber como recorrer da suspensão",
    ctaButtonAriaLabel: "Botão de Contato",
  },
  cta: {
    bgImg: bgImg,
    sectionHeader: {
      miniTag: "NÃO PERCA TEMPO",
      title:
        "Se você recebeu uma notificação do Detran, o prazo para recorrer é curto. Não entregue sua CNH antes de falar com um especialista. ",
      subtitle: (
        <p className="opacity-80">
          A Ápice pode te ajudar a manter seu direito de dirigir, entre em
          contato agora e receba uma avaliação gratuita do seu caso.
        </p>
      ),
    },
    buttonLabel: "Falar com especialista no WhatsApp agora",
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
