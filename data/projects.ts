export type LocalizedText = {
  es: string;
  en: string;
};

export type ProjectPreview =
  | { type: "mobile"; images: [string, string, string] }
  | { type: "web"; image: string };

export type Project = {
  id: string;
  name: string;
  tagline: LocalizedText;
  description: LocalizedText;
  problem: LocalizedText;
  stack: string[];
  category: LocalizedText;
  demoUrl: string;
  repoUrl: string;
  images: string[];
  preview?: ProjectPreview;
  /** Panel gradient, from top to bottom. */
  colors: [string, string];
};

export const projects: Project[] = [
  {
    id: "eunacomia",
    name: "EunacomIA",
    tagline: {
      es: "Plataforma SaaS educativa para preparación EUNACOM",
      en: "Educational SaaS platform for EUNACOM preparation",
    },
    description: {
      es: "Plataforma SaaS educativa diseñada para estudiantes y profesionales de la salud en Chile. Ayuda a prepararse para el EUNACOM mediante simulacros interactivos, flashcards inteligentes (Active Recall) y dashboards analíticos. Incluye un panel administrativo para generación masiva de contenido, pasarela de pagos con MercadoPago y sistema de autenticación robusto.",
      en: "Educational SaaS platform designed for healthcare students and professionals in Chile. It helps prepare for the EUNACOM exam through interactive mock exams, smart flashcards (Active Recall), and analytical dashboards. Features an admin panel for mass content generation, a payment gateway via MercadoPago, and a robust authentication system.",
    },
    problem: {
      es: "Estudiar para el EUNACOM exige retener muchísimo en poco tiempo. EunacomIA lo resuelve con un tutor de IA que guía y optimiza cada sesión de estudio.",
      en: "Studying for the EUNACOM means retaining a huge amount in little time. EunacomIA solves it with an AI tutor that guides and optimizes every study session.",
    },
    stack: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "TypeScript",
      "Prisma",
      "MercadoPago",
      "AWS S3"
    ],
    category: { es: "SaaS · Educación", en: "SaaS · Education" },
    demoUrl: "#",
    repoUrl: "#",
    images: [
      "/images/projects/eunacomia/eunacomia_1.png",
      "/images/projects/eunacomia/eunacomia_2.png",
      "/images/projects/eunacomia/eunacomia_3.png",
      "/images/projects/eunacomia/eunacomia_4.png",
      "/images/projects/eunacomia/eunacomia_6.png",
      "/images/projects/eunacomia/eunacomia_7.png",
      "/images/projects/eunacomia/eunacomia_8.png",
      "/images/projects/eunacomia/eunacomia_9.png",
      "/images/projects/eunacomia/eunacomia_10.png",
    ],
    preview: { type: "web", image: "/images/projects/eunacomia/eunacomia_1.png" },
    colors: ["#2563eb", "#07123a"],
  },
  {
    id: "sobracero",
    name: "SobraCero",
    tagline: {
      es: "Plataforma de gestión de donaciones de alimentos",
      en: "Food donation management platform",
    },
    description: {
      es: "Plataforma web desarrollada junto a un equipo de 3 personas que conecta en tiempo real a restaurantes y comercios con excedentes alimentarios con organizaciones sociales receptoras, facilitando la reserva, el retiro y la trazabilidad de cada donación. Implementé el pipeline de CI/CD en GitLab con despliegue automatizado a VPS y AWS EC2.",
      en: "Web platform built with a team of 3 that connects restaurants and stores with food surplus to receiving social organizations in real time, enabling reservation, pickup, and traceability of each donation. I implemented the GitLab CI/CD pipeline with automated deployment to a VPS and AWS EC2.",
    },
    problem: {
      es: "Restaurantes y comercios botan alimentos que organizaciones sociales necesitan. SobraCero los conecta en tiempo real con un canal directo y trazable.",
      en: "Restaurants and stores throw away food that social organizations need. SobraCero connects them in real time through a direct, traceable channel.",
    },
    stack: [
      "Spring Boot",
      "Vue.js",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "GitLab CI/CD",
      "AWS EC2",
      "MinIO",
    ],
    category: { es: "Impacto social", en: "Social Impact" },
    demoUrl: "#",
    repoUrl: "#",
    images: [
      "/images/projects/sobracero/1.png",
      "/images/projects/sobracero/2.png",
      "/images/projects/sobracero/3.png",
      "/images/projects/sobracero/4.png",
    ],
    preview: { type: "web", image: "/images/projects/sobracero/1.png" },
    colors: ["#16a34a", "#03200f"],
  },
  {
    id: "bilup",
    name: "Bilup",
    tagline: {
      es: "Backend desacoplado con arquitectura modular y seguridad avanzada",
      en: "Decoupled backend with modular architecture and advanced security",
    },
    description: {
      es: "Sistema backend construido con arquitectura limpia y modular, orientado a plataformas que requieren autenticación robusta, control de acceso basado en roles, manejo de sesiones y seguridad a nivel de API.",
      en: "Backend system built with a clean, modular architecture, aimed at platforms that require robust authentication, role-based access control, session handling, and API-level security.",
    },
    problem: {
      es: "La deuda técnica suele nacer en el backend. Bilup es una base modular y segura, con autenticación robusta y roles, que sirve como núcleo de varios productos.",
      en: "Technical debt usually starts in the backend. Bilup is a modular, secure foundation with robust authentication and roles that powers several products.",
    },
    stack: ["NestJS", "Node.js", "PostgreSQL", "JWT", "Docker", "REST API"],
    category: { es: "Backend · Arquitectura", en: "Backend · Architecture" },
    demoUrl: "#",
    repoUrl: "https://github.com/C-RB",
    images: [],
    colors: ["#7c3aed", "#160733"],
  },
  {
    id: "lexpa",
    name: "Lexpa",
    tagline: {
      es: "App de comprensión lectora en inglés",
      en: "English reading comprehension app",
    },
    description: {
      es: "Proyecto full-stack personal: aplicación móvil (iOS/Android/Web) que ayuda a hispanohablantes a mejorar su comprensión lectora en inglés mediante textos cortos, preguntas de verificación y vocabulario con repetición espaciada (SRS). Desarrollé tanto el frontend en React Native como el backend REST con NestJS y PostgreSQL.",
      en: "Personal full-stack project: a mobile app (iOS/Android/Web) that helps Spanish speakers improve their English reading comprehension through short texts, comprehension questions, and vocabulary with spaced repetition (SRS). I built both the React Native frontend and the NestJS/PostgreSQL REST backend.",
    },
    problem: {
      es: "Muchos hispanohablantes leen inglés de forma pasiva pero nunca practican. Lexpa entrena la comprensión lectora con textos cortos y práctica guiada.",
      en: "Many Spanish speakers read English passively but never practice. Lexpa trains reading comprehension with short texts and guided practice.",
    },
    stack: ["React Native", "Expo", "TypeScript", "NestJS", "Prisma", "PostgreSQL", "JWT"],
    category: { es: "Mobile · Educación", en: "Mobile · Education" },
    demoUrl: "#",
    repoUrl: "#",
    images: [
      "/images/projects/lexpa/lexpa_playstore.jpeg",
      "/images/projects/lexpa/1.png",
      "/images/projects/lexpa/2.png",
      "/images/projects/lexpa/3.png",
      "/images/projects/lexpa/4.png",
      "/images/projects/lexpa/5.png",
      "/images/projects/lexpa/6.png",
      "/images/projects/lexpa/7.png",
      "/images/projects/lexpa/8.png",
    ],
    preview: {
      type: "mobile",
      images: [
        "/images/projects/lexpa/2.png",
        "/images/projects/lexpa/1.png",
        "/images/projects/lexpa/3.png",
      ],
    },
    colors: ["#f97316", "#2e0e04"],
  },
  {
    id: "vida-activa",
    name: "Vida Activa",
    tagline: {
      es: "Plataforma de gestión y seguimiento de pacientes",
      en: "Patient management and monitoring platform",
    },
    description: {
      es: "Proyecto full-stack: aplicación móvil que facilita la conexión y el monitoreo entre especialistas de la salud y sus pacientes. Permite gestionar fichas clínicas, registrar métricas de evolución, emitir alertas tempranas y hacer seguimiento detallado de las sesiones. Desarrollé tanto el frontend móvil utilizando React Native como la API REST del backend con FastAPI y Python.",
      en: "Full-stack project: a mobile app that enables connection and monitoring between healthcare specialists and their patients. It manages clinical records, tracks progress metrics, issues early alerts, and provides detailed session tracking. I built both the React Native mobile frontend and the FastAPI/Python REST backend.",
    },
    problem: {
      es: "Los especialistas pierden continuidad entre sesiones. Vida Activa centraliza fichas clínicas, métricas y alertas tempranas en una sola app.",
      en: "Specialists lose continuity between sessions. Vida Activa centralizes clinical records, metrics, and early alerts in a single app.",
    },
    stack: ["React Native", "Expo", "TypeScript", "FastAPI", "Python", "SQLAlchemy", "PostgreSQL"],
    category: { es: "Mobile · Salud", en: "Mobile · Healthcare" },
    demoUrl: "#",
    repoUrl: "#",
    images: [
      "/images/projects/vida-activa/lamina-01.png",
      "/images/projects/vida-activa/lamina-02.png",
      "/images/projects/vida-activa/lamina-03.png",
      "/images/projects/vida-activa/lamina-04.png",
      "/images/projects/vida-activa/lamina-05.png",
      "/images/projects/vida-activa/lamina-06.png",
      "/images/projects/vida-activa/lamina-07.png",
      "/images/projects/vida-activa/lamina-08.png",
      "/images/projects/vida-activa/lamina-09.png",
      "/images/projects/vida-activa/lamina-10.png",
      "/images/projects/vida-activa/lamina-11.png",
    ],
    preview: {
      type: "mobile",
      images: [
        "/images/projects/vida-activa/pantalla-inicio.png",
        "/images/projects/vida-activa/pantalla-ejercicio.png",
        "/images/projects/vida-activa/pantalla-panel.png",
      ],
    },
    colors: ["#14b8a6", "#032421"],
  },
];
