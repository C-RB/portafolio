import {
  Soup,
  ShieldCheck,
  BookOpen,
  HeartPulse,
  type LucideIcon,
} from "lucide-react";

export type ProjectAccent = "emerald" | "indigo" | "purple" | "orange" | "cyan" | "rose";

export type LocalizedText = {
  es: string;
  en: string;
};

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
  image: string;
  icon: LucideIcon;
  accent: ProjectAccent;
  featured?: boolean;
};

export const projects: Project[] = [
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
      es: "Restaurantes y comercios generan excedentes alimentarios que muchas veces no llegan a tiempo a organizaciones sociales por falta de un canal directo y trazable. SobraCero conecta ambas partes en tiempo real y da seguimiento a cada donación.",
      en: "Restaurants and stores generate food surplus that often doesn't reach social organizations in time due to the lack of a direct, traceable channel. SobraCero connects both sides in real time and tracks every donation.",
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
    category: { es: "Impacto Social", en: "Social Impact" },
    demoUrl: "#",
    repoUrl: "#",
    image: "/images/projects/sobracero.png",
    icon: Soup,
    accent: "emerald",
    featured: true,
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
      es: "La mayoría de los proyectos acumulan deuda técnica desde el backend. Bilup propone una base sólida, escalable y segura que puede servir como núcleo de múltiples productos.",
      en: "Most projects accumulate technical debt starting from the backend. Bilup proposes a solid, scalable, and secure foundation that can serve as the core of multiple products.",
    },
    stack: ["NestJS", "Node.js", "PostgreSQL", "JWT", "Docker", "REST API"],
    category: { es: "Backend / Arquitectura", en: "Backend / Architecture" },
    demoUrl: "#",
    repoUrl: "https://github.com/C-RB",
    image: "/images/projects/bilup.png",
    icon: ShieldCheck,
    accent: "indigo",
    featured: true,
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
      es: "Muchos hispanohablantes entienden inglés escrito de forma pasiva pero no practican comprensión lectora de manera estructurada. Lexpa entrena esa habilidad con textos cortos, verificación de lectura y vocabulario que se repasa con repetición espaciada.",
      en: "Many Spanish speakers understand written English passively but never practice reading comprehension in a structured way. Lexpa trains that skill with short texts, reading checks, and vocabulary reviewed through spaced repetition.",
    },
    stack: ["React Native", "Expo", "TypeScript", "NestJS", "Prisma", "PostgreSQL", "JWT"],
    category: { es: "Mobile / Educación", en: "Mobile / Education" },
    demoUrl: "#",
    repoUrl: "#",
    image: "/images/projects/lexpa.png",
    icon: BookOpen,
    accent: "orange",
  },
  {
    id: "activamente",
    name: "ActivaMente",
    tagline: {
      es: "Plataforma de gestión y seguimiento de pacientes",
      en: "Patient management and monitoring platform",
    },
    description: {
      es: "Proyecto full-stack: aplicación móvil que facilita la conexión y el monitoreo entre especialistas de la salud y sus pacientes. Permite gestionar fichas clínicas, registrar métricas de evolución, emitir alertas tempranas y hacer seguimiento detallado de las sesiones. Desarrollé tanto el frontend móvil utilizando React Native como la API REST del backend con FastAPI y Python.",
      en: "Full-stack project: a mobile app that enables connection and monitoring between healthcare specialists and their patients. It manages clinical records, tracks progress metrics, issues early alerts, and provides detailed session tracking. I built both the React Native mobile frontend and the FastAPI/Python REST backend.",
    },
    problem: {
      es: "Los especialistas de la salud suelen perder continuidad en el seguimiento de sus pacientes entre sesiones. ActivaMente centraliza fichas clínicas, métricas y alertas tempranas en una sola plataforma conectada.",
      en: "Healthcare specialists often lose continuity when tracking patients between sessions. ActivaMente centralizes clinical records, metrics, and early alerts in a single connected platform.",
    },
    stack: ["React Native", "Expo", "TypeScript", "FastAPI", "Python", "SQLAlchemy", "PostgreSQL"],
    category: { es: "Mobile / Salud", en: "Mobile / Healthcare" },
    demoUrl: "#",
    repoUrl: "#",
    image: "/images/projects/activamente.png",
    icon: HeartPulse,
    accent: "rose",
  },
];
