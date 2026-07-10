export type Lang = "es" | "en";

type TextSegment = { text: string; strong?: boolean };

export type Dictionary = {
  nav: {
    home: string;
    about: string;
    stack: string;
    projects: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    role: string;
    university: string;
    bio: string;
    ctaProjects: string;
    ctaContact: string;
    ctaCv: string;
    github: string;
    linkedin: string;
    email: string;
  };
  about: {
    eyebrow: string;
    title: string;
    highlight: string;
    bio1: TextSegment[];
    bio2: TextSegment[];
    eduName: string;
    eduDegree: string;
    eduBadge: string;
  };
  stack: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    featured: string;
    demo: string;
    code: string;
    viewMore: string;
    closeGallery: string;
    noImages: string;
    showLess: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    talkTitle: string;
    talkDesc: string;
    github: string;
    linkedin: string;
    email: string;
    emailCta: string;
    location: string;
    locationValue: string;
    availableNow: string;
    availableDesc: string;
    formName: string;
    formNamePlaceholder: string;
    formEmail: string;
    formSubject: string;
    formSubjectPlaceholder: string;
    formMessage: string;
    formMessagePlaceholder: string;
    sendButton: string;
    sending: string;
    sentTitle: string;
    sentDesc: string;
    sendAnother: string;
    sendError: string;
  };
};

export const translations: Record<Lang, Dictionary> = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      stack: "Tecnologías",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "Desarrollador de Software",
      role: "Ingeniero Informático en Formación",
      university: "Universidad de La Frontera, Chile",
      bio: "Estudiante de quinto año especializado en desarrollo Full Stack y arquitectura de software. Cuento con experiencia práctica en proyectos reales desde la toma de requerimientos hasta el despliegue en producción.",
      ctaProjects: "Ver proyectos",
      ctaContact: "Contactarme",
      ctaCv: "Descargar CV",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Conóceme un",
      highlight: "poco más.",
      bio1: [
        { text: "Estudiante de quinto año de Ingeniería Informática en la " },
        { text: "Universidad de La Frontera, Chile", strong: true },
        {
          text: ", con marcado interés en la arquitectura de software, el desarrollo Full Stack y la automatización. He trabajado en proyectos reales facilitando la obtención de requerimientos y el despliegue de soluciones, manteniendo un enfoque constante en la calidad y el cumplimiento de metas.",
        },
      ] as TextSegment[],
      bio2: [
        {
          text: "Me motiva construir soluciones que aporten orden y eficiencia, transformando requerimientos de negocio en software funcional. Busco integrarme a equipos donde pueda aportar valor técnico mientras sigo perfeccionando mis habilidades en ",
        },
        { text: "Python", strong: true },
        { text: ", " },
        { text: "TypeScript", strong: true },
        { text: " y " },
        { text: "React / Next.js", strong: true },
        { text: "." },
      ] as TextSegment[],
      eduName: "Universidad de La Frontera, Chile",
      eduDegree: "Ingeniería Informática · 2022 – Presente",
      eduBadge: "5° año",
    },
    stack: {
      eyebrow: "Tecnologías",
      title: "Herramientas con las que",
      highlight: "trabajo.",
      description:
        "Cada tecnología cumple un rol concreto. Acá te explico qué hace cada una, aunque no seas técnico.",
    },
    projects: {
      eyebrow: "Proyectos",
      title: "Lo que he",
      highlight: "construido.",
      description:
        "Una selección de proyectos que representan mis áreas de trabajo: plataformas web, backends, sistemas de gestión y herramientas con impacto real.",
      featured: "Destacado",
      demo: "Ver Proyecto",
      code: "Código",
      viewMore: "Ver más en GitHub",
      closeGallery: "Cerrar",
      noImages: "Capturas próximamente",
      showLess: "ver menos",
    },
    contact: {
      eyebrow: "Contacto",
      title: "¿Tienes un proyecto",
      highlight: "en mente?",
      description:
        "Estoy disponible para proyectos freelance, colaboraciones y oportunidades a tiempo completo. Cuéntame tu idea.",
      talkTitle: "Hablemos directamente",
      talkDesc:
        "Prefiero responder rápido. Si tienes algo concreto en mente, escríbeme por cualquiera de estos canales y lo conversamos sin rodeos.",
      github: "GitHub",
      linkedin: "LinkedIn",
      emailCta: "Escríbeme un correo",
      email: "Email",
      location: "Ubicación",
      locationValue: "Chile · Disponible remoto",
      availableNow: "Disponible ahora",
      availableDesc: "Para proyectos freelance y oportunidades",
      formName: "Nombre",
      formNamePlaceholder: "Tu nombre",
      formEmail: "Email",
      formSubject: "Asunto",
      formSubjectPlaceholder: "¿De qué trata tu proyecto?",
      formMessage: "Mensaje",
      formMessagePlaceholder:
        "Cuéntame qué necesitas construir, cuál es el problema y cuándo quieres empezar...",
      sendButton: "Enviar mensaje",
      sending: "Enviando...",
      sentTitle: "¡Mensaje enviado!",
      sentDesc: "Gracias por escribir. Te respondo en menos de 24 horas.",
      sendAnother: "Enviar otro mensaje",
      sendError: "No se pudo enviar el mensaje. Intenta de nuevo o escríbeme directamente.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      stack: "Tech Stack",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Software Developer",
      role: "Computer Engineering Student",
      university: "Universidad de La Frontera, Chile",
      bio: "Fifth-year student specialized in Full Stack development and software architecture. I have hands-on experience in real projects from gathering requirements to production deployment.",
      ctaProjects: "View projects",
      ctaContact: "Contact me",
      ctaCv: "Download CV",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
    },
    about: {
      eyebrow: "About me",
      title: "Get to know",
      highlight: "me a bit more.",
      bio1: [
        { text: "Fifth-year Computer Engineering student at " },
        { text: "Universidad de La Frontera, Chile", strong: true },
        {
          text: ", with a strong interest in software architecture, Full Stack development, and automation. I've worked on real projects, helping gather requirements and deploy solutions, with a constant focus on quality and meeting goals.",
        },
      ] as TextSegment[],
      bio2: [
        {
          text: "I'm driven to build solutions that bring order and efficiency, turning business requirements into working software. I'm looking to join teams where I can add technical value while continuing to sharpen my skills in ",
        },
        { text: "Python", strong: true },
        { text: ", " },
        { text: "TypeScript", strong: true },
        { text: ", and " },
        { text: "React / Next.js", strong: true },
        { text: "." },
      ] as TextSegment[],
      eduName: "Universidad de La Frontera, Chile",
      eduDegree: "Computer Engineering · 2022 – Present",
      eduBadge: "5th year",
    },
    stack: {
      eyebrow: "Tech Stack",
      title: "Tools I",
      highlight: "work with.",
      description:
        "Each technology plays a specific role. Here's what each one does, even if you're not technical.",
    },
    projects: {
      eyebrow: "Projects",
      title: "What I've",
      highlight: "built.",
      description:
        "A selection of projects that represent my areas of work: web platforms, backends, management systems, and tools with real impact.",
      featured: "Featured",
      demo: "View Project",
      code: "Code",
      viewMore: "See more on GitHub",
      closeGallery: "Close",
      noImages: "Screenshots coming soon",
      showLess: "show less",
    },
    contact: {
      eyebrow: "Contact",
      title: "Got a project",
      highlight: "in mind?",
      description:
        "I'm available for freelance projects, collaborations, and full-time opportunities. Tell me your idea.",
      talkTitle: "Let's talk directly",
      talkDesc:
        "I prefer to respond quickly. If you have something specific in mind, reach out through any of these channels and let's talk it through.",
      github: "GitHub",
      linkedin: "LinkedIn",
      emailCta: "Send me an email",
      email: "Email",
      location: "Location",
      locationValue: "Chile · Available remotely",
      availableNow: "Available now",
      availableDesc: "For freelance projects and opportunities",
      formName: "Name",
      formNamePlaceholder: "Your name",
      formEmail: "Email",
      formSubject: "Subject",
      formSubjectPlaceholder: "What's your project about?",
      formMessage: "Message",
      formMessagePlaceholder:
        "Tell me what you need to build, what the problem is, and when you'd like to start...",
      sendButton: "Send message",
      sending: "Sending...",
      sentTitle: "Message sent!",
      sentDesc: "Thanks for reaching out. I'll reply within 24 hours.",
      sendAnother: "Send another message",
      sendError: "Couldn't send the message. Please try again or email me directly.",
    },
  },
};
