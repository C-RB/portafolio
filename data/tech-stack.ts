export type Tech = {
  name: string;
  description: string;
  category: "language" | "frontend" | "backend" | "database" | "tools" | "platform";
};

export const techStack: Tech[] = [
  {
    name: "Python",
    description: "Lenguaje versátil usado para backend, automatización e inteligencia artificial.",
    category: "language",
  },
  {
    name: "TypeScript",
    description: "JavaScript con tipos estáticos, lo que reduce errores y hace el código más mantenible.",
    category: "language",
  },
  {
    name: "Java",
    description: "Lenguaje orientado a objetos ampliamente usado en sistemas backend empresariales.",
    category: "language",
  },
  {
    name: "React",
    description: "Librería para construir interfaces interactivas que se actualizan en tiempo real.",
    category: "frontend",
  },
  {
    name: "Next.js",
    description: "Framework que hace que las apps React sean más rápidas, seguras y optimizadas para buscadores.",
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    description: "Sistema de diseño que permite construir interfaces modernas directamente en el código.",
    category: "frontend",
  },
  {
    name: "Node.js",
    description: "Entorno que permite ejecutar JavaScript en el servidor para crear APIs y servicios.",
    category: "backend",
  },
  {
    name: "Spring Boot",
    description: "Framework de Java para construir backends robustos y listos para producción.",
    category: "backend",
  },
  {
    name: "APIs REST",
    description: "Estándar de comunicación que conecta aplicaciones entre sí de forma estructurada.",
    category: "backend",
  },
  {
    name: "PostgreSQL",
    description: "Base de datos relacional avanzada, ideal para datos críticos y consultas complejas.",
    category: "database",
  },
  {
    name: "MySQL",
    description: "Base de datos relacional muy extendida en aplicaciones web y sistemas empresariales.",
    category: "database",
  },
  {
    name: "MinIO",
    description: "Almacenamiento de objetos compatible con S3, ideal para archivos y backups.",
    category: "tools",
  },
  {
    name: "Linux / Ubuntu",
    description: "Sistema operativo de servidores de código abierto, estable y seguro para producción.",
    category: "tools",
  },
  {
    name: "Git / GitHub",
    description: "Control de versiones y plataforma de colaboración para gestionar el código fuente.",
    category: "tools",
  },
  {
    name: "Android",
    description: "Plataforma móvil de Google para desarrollar aplicaciones nativas en dispositivos Android.",
    category: "platform",
  },
];

export const techCategories = [
  { key: "language", label: "Lenguajes" },
  { key: "frontend", label: "Frontend" },
  { key: "backend",  label: "Backend" },
  { key: "database", label: "Bases de datos" },
  { key: "tools",    label: "Herramientas" },
  { key: "platform", label: "Plataformas" },
] as const;
