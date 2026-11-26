# Portafolio de Camilo Rojas Baeza

Sitio personal hecho con Next.js, React, Tailwind CSS y Framer Motion.

## Cómo correrlo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # compilación de producción
```

## Estructura

```
app/                  Rutas, metadatos, favicon e imagen para compartir
  api/contact/        Envío del formulario de contacto
components/
  layout/             Barra de navegación y proveedores
  sections/           Secciones de la página (hero/ y projects/ en carpeta propia)
  ui/                 Piezas reutilizables
data/                 Proyectos y tecnologías
lib/                  Idioma, tema, traducciones y utilidades
public/
  assets/             Iconos, logos, brillos y decoraciones del diseño
  images/projects/    Capturas de cada proyecto
```

## Envío de correos

El formulario usa [Resend](https://resend.com) desde `app/api/contact/route.ts`.
Necesita la variable `RESEND_API_KEY` en `.env.local` y en el servidor donde se publica.
El remitente es `contacto@camilo-rojas.dev`, así que el dominio debe estar verificado en Resend.

## Dónde editar

- Textos en español e inglés: `lib/translations.ts`
- Proyectos: `data/projects.ts` (el dibujo de cada panel está en `components/sections/projects/ProjectVisuals.tsx`)
- Tecnologías: `data/tech-stack.ts`
