export type Tech = { name: string; logo: string };

export const techStack: Record<"frontend" | "backend" | "data" | "devops", Tech[]> = {
  frontend: [
    { name: "React", logo: "react" },
    { name: "Next.js", logo: "nextjs" },
    { name: "TypeScript", logo: "typescript" },
    { name: "Tailwind CSS", logo: "tailwind" },
  ],
  backend: [
    { name: "Node.js", logo: "nodejs" },
    { name: "Python", logo: "python" },
    { name: "Java", logo: "java" },
    { name: "Spring Boot", logo: "springboot" },
  ],
  data: [
    { name: "PostgreSQL", logo: "postgresql" },
    { name: "MySQL", logo: "mysql" },
    { name: "MinIO", logo: "minio" },
  ],
  devops: [
    { name: "Android", logo: "android" },
    { name: "Git", logo: "git" },
    { name: "Linux", logo: "linux" },
  ],
};

/** Names shown in the scrolling strip. */
export const marqueeStack: Tech[] = [...techStack.frontend, ...techStack.backend.slice(0, 3)];
