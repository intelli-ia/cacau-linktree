export const PROFESSIONAL_NAME = "Dr. Carlos Antônio Moura";

export const IMAGE_BLOCKS = [
  {
    id: "corc",
    h1: "Curso Online de Raciocínio Clínico",
    cta: "Faça parte",
    href: "https://curso.raciocinioclinico.org/",
    imageLabel: "Capa de aula",
    image: "/corc-cover.webp",
  },
  {
    id: "blog",
    h1: "Leia o meu BLOG",
    cta: "Conhecer",
    href: "https://raciocinioclinico.org/",
    imageLabel: "Mockup do canal no Youtube",
    image: "/youtube-mockup.webp",
  },
  {
    id: "consultas",
    h1: "Seja atendido\npor mim",
    cta: "Marcar consulta",
    href: "https://api.whatsapp.com/send?phone=5571991843458&text=Ol%C3%A1!%20Vim%20pelo%20Instagram%20e%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Carlos",
    imageLabel: "Foto de perfil",
    image: "/consultas-profile.webp",
    fullBleed: true,
  },
  {
    id: "youtube",
    h1: "Conheça meu canal no Youtube",
    cta: "Acessar",
    href: "https://www.youtube.com/@carlosaggmoura",
    imageLabel: "Mockup do blog no celular",
    image: "/blog-mockup.webp",
  },
  {
    id: "spotify",
    h1: "Aulas do CORC no Spotify",
    cta: "Ouça Gratuitamente",
    href: "#",
    imageLabel: "Mockup do Spotify",
    pending: true,
  },
] as const;

export const BUTTON_BLOCKS = [
  {
    id: "area-aluno",
    cta: "Área do Aluno do CORC",
    href: "https://hub.la/g/Bx8I7wO9zk0DmaF1OUEP",
  },
  {
    id: "renovacoes",
    cta: "Renove o CORC",
    href: "https://api.whatsapp.com/send?phone=557183477264&text=Quero%20renovar%20o%20CORC.",
  },
  {
    id: "duvidas",
    cta: "Ficou com alguma dúvida? Entre em contato",
    href: "https://api.whatsapp.com/send?phone=557183477264&text=Tenho%20algumas%20d%C3%BAvidas%20sobre%20Cacau.",
  },
] as const;
