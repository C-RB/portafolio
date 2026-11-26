export type Lang = "es" | "en";

type TextSegment = { text: string; strong?: boolean };

export type Dictionary = {
  nav: {
    home: string;
    about: string;
    stack: string;
    projects: string;
    contact: string;
    available: string;
  };
  hero: {
    role: string;
    focus: string;
    bio: string;
    ctaProjects: string;
    ctaCv: string;
  };
  about: {
    eyebrow: string;
    statement: TextSegment[];
    eduName: string;
    eduDegree: string;
    city: string;
    cityDesc: string;
    open: string;
    openDesc: string;
  };
  stack: {
    title: [string, string];
    description: string;
    groups: { frontend: string; backend: string; data: string; devops: string };
  };
  projects: {
    title: [string, string];
    description: string;
    demo: string;
    closeGallery: string;
    previous: string;
    next: string;
    noImages: string;
  };
  contact: {
    title: string;
    availableNow: string;
    description: string;
    talkTitle: string;
    talkDesc: string;
    emailCta: string;
    locationValue: string;
    formTitle: string;
    formHint: string;
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
      stack: "Stack",
      projects: "Proyectos",
      contact: "Contacto",
      available: "Disponible",
    },
    hero: {
      role: "Software Developer",
      focus: "Full Stack · Arquitectura",
      bio: "Quinto año de Ingeniería Informática en la Universidad de La Frontera. Llevo productos desde el requerimiento hasta producción.",
      ctaProjects: "Ver proyectos",
      ctaCv: "Descargar CV",
    },
    about: {
      eyebrow: "Sobre mí",
      statement: [
        { text: "Me apasiona " },
        { text: "convertir requerimientos de negocio en software que ordena y simplifica.", strong: true },
        { text: " Trabajo entre la arquitectura y el producto, y mis herramientas de todos los días son " },
        { text: "Python, TypeScript y React / Next.js.", strong: true },
      ],
      eduName: "Universidad de La Frontera",
      eduDegree: "Ingeniería Informática · 5.º año",
      city: "Temuco, Chile",
      cityDesc: "Disponible para trabajo remoto",
      open: "Abierto a oportunidades",
      openDesc: "Freelance y tiempo completo",
    },
    stack: {
      title: ["Herramientas que", "uso todos los días."],
      description:
        "Cada tecnología cumple un rol concreto en el producto. Así se reparten entre frontend, backend, datos y despliegue.",
      groups: { frontend: "Frontend", backend: "Backend", data: "Datos", devops: "Mobile y DevOps" },
    },
    projects: {
      title: ["Cinco productos,", "cinco problemas reales."],
      description: "Cada proyecto nació de un problema concreto. Acá cuento cuál era y cómo lo resolví.",
      demo: "Ver proyecto",
      closeGallery: "Cerrar",
      previous: "Anterior",
      next: "Siguiente",
      noImages: "Capturas próximamente",
    },
    contact: {
      title: "Hablemos.",
      availableNow: "Disponible ahora",
      description: "¿Tienes un proyecto, una vacante o una idea? Cuéntamela y te respondo en menos de 24 horas.",
      talkTitle: "Contacto directo",
      talkDesc: "Si prefieres, escríbeme por cualquiera de estos canales.",
      emailCta: "Escríbeme un correo",
      locationValue: "Temuco, Chile · trabajo remoto",
      formTitle: "Envíame un mensaje",
      formHint: "Todos los campos son obligatorios.",
      formName: "Nombre",
      formNamePlaceholder: "Tu nombre",
      formEmail: "Email",
      formSubject: "Asunto",
      formSubjectPlaceholder: "¿De qué trata tu proyecto?",
      formMessage: "Mensaje",
      formMessagePlaceholder: "Cuéntame qué necesitas construir, cuál es el problema y para cuándo lo necesitas.",
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
      stack: "Stack",
      projects: "Projects",
      contact: "Contact",
      available: "Available",
    },
    hero: {
      role: "Software Developer",
      focus: "Full Stack · Architecture",
      bio: "Fifth-year Computer Engineering student at Universidad de La Frontera. I take products from requirements to production.",
      ctaProjects: "View projects",
      ctaCv: "Download CV",
    },
    about: {
      eyebrow: "About me",
      statement: [
        { text: "I love " },
        { text: "turning business requirements into software that organizes and simplifies.", strong: true },
        { text: " I work between architecture and product, and my everyday tools are " },
        { text: "Python, TypeScript, and React / Next.js.", strong: true },
      ],
      eduName: "Universidad de La Frontera",
      eduDegree: "Computer Engineering · 5th year",
      city: "Temuco, Chile",
      cityDesc: "Available for remote work",
      open: "Open to opportunities",
      openDesc: "Freelance and full time",
    },
    stack: {
      title: ["Tools I use", "every day."],
      description:
        "Each technology plays a specific role in the product. Here is how they split across frontend, backend, data, and deployment.",
      groups: { frontend: "Frontend", backend: "Backend", data: "Data", devops: "Mobile & DevOps" },
    },
    projects: {
      title: ["Five products,", "five real problems."],
      description: "Every project started from a concrete problem. Here is what it was and how I solved it.",
      demo: "View project",
      closeGallery: "Close",
      previous: "Previous",
      next: "Next",
      noImages: "Screenshots coming soon",
    },
    contact: {
      title: "Let's talk.",
      availableNow: "Available now",
      description: "Got a project, an opening, or an idea? Tell me about it and I'll reply within 24 hours.",
      talkTitle: "Direct contact",
      talkDesc: "If you prefer, reach me through any of these channels.",
      emailCta: "Send me an email",
      locationValue: "Temuco, Chile · remote work",
      formTitle: "Send me a message",
      formHint: "All fields are required.",
      formName: "Name",
      formNamePlaceholder: "Your name",
      formEmail: "Email",
      formSubject: "Subject",
      formSubjectPlaceholder: "What's your project about?",
      formMessage: "Message",
      formMessagePlaceholder: "Tell me what you need to build, what the problem is, and when you need it.",
      sendButton: "Send message",
      sending: "Sending...",
      sentTitle: "Message sent!",
      sentDesc: "Thanks for reaching out. I'll reply within 24 hours.",
      sendAnother: "Send another message",
      sendError: "Couldn't send the message. Please try again or email me directly.",
    },
  },
};
