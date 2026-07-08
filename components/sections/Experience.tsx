"use client";

import { motion } from "framer-motion";
import { Globe, Database, Cpu, BarChart2, Building2, HeartPulse, Smartphone } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const areas = [
  {
    icon: Globe,
    title: "Plataformas web",
    description:
      "Desarrollo de aplicaciones full-stack con Next.js y React. Desde el diseño de la interfaz hasta la integración con APIs y base de datos.",
  },
  {
    icon: Cpu,
    title: "Arquitectura backend",
    description:
      "Diseño de APIs RESTful desacopladas, sistemas de autenticación, control de acceso por roles y estructuras modulares para proyectos que escalan.",
  },
  {
    icon: Database,
    title: "Sistemas de gestión",
    description:
      "Implementación y personalización de ERP con Odoo y Python. Control de inventario, trazabilidad, flujos operativos y reportes para empresas.",
  },
  {
    icon: BarChart2,
    title: "Dashboards y analytics",
    description:
      "Visualización de datos con gráficas interactivas, métricas de seguimiento y paneles de control orientados a la toma de decisiones.",
  },
  {
    icon: HeartPulse,
    title: "Software de salud",
    description:
      "Sistemas de gestión médica, clínica y farmacéutica. APIs para reservas, expedientes y administración de datos sensibles con seguridad.",
  },
  {
    icon: Building2,
    title: "Software empresarial",
    description:
      "Herramientas internas, automatización de procesos y digitalización de flujos que reducen fricción y mejoran la eficiencia operativa.",
  },
  {
    icon: Smartphone,
    title: "Apps móviles",
    description:
      "Desarrollo de aplicaciones Android nativas con enfoque en usabilidad, rendimiento e integración con servicios backend.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-80 h-80 bg-blue-500/4 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-14">
          <SectionTitle
            label="Enfoque profesional"
            title="Áreas en las que"
            highlight="tengo experiencia."
            description="He trabajado en distintos tipos de proyectos. Estos son los dominios donde puedo aportar valor de forma concreta."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {areas.map((area, i) => (
              <motion.div
                key={area.title}
                className="glass glass-hover group rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                whileHover={{ y: -3 }}
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <area.icon size={17} className="text-blue-400" />
                </div>
                <h3 className="font-semibold text-zinc-100 text-sm leading-snug">
                  {area.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {area.description}
                </p>
                <div className="mt-auto h-0.5 w-8 bg-blue-500 rounded-full opacity-40 group-hover:opacity-80 group-hover:w-12 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
