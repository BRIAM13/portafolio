# Portafolio — Briam Luis Ronceros Achulli

Sitio personal para mostrar proyectos de desarrollo de software. Construido con Next.js, Tailwind CSS, Framer Motion (animaciones) y Lenis (scroll suave).

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Agregar un proyecto nuevo

Los proyectos viven en `src/components/projects.tsx`, dentro del arreglo `PROJECTS`. Para agregar uno, copia un objeto existente y cambia:

- `index`: siguiente número, ej. `"P.02"`
- `title`, `role`, `year`, `description`
- `tags`: tecnologías usadas
- `image`: ruta dentro de `public/` (agrega el archivo ahí primero)
- `repoUrl`: link al repositorio (opcional)

## Estructura

- `src/components/hero.tsx` — portada con tipografía cinética
- `src/components/about.tsx` — perfil / ficha técnica
- `src/components/projects.tsx` — listado de proyectos
- `src/components/contact.tsx` — contacto y cierre
- `src/components/{nav,smooth-scroll,cursor,grain}.tsx` — layout, navegación y efectos globales

## Despliegue en Vercel

1. Sube este proyecto a un repositorio de GitHub.
2. En [vercel.com/new](https://vercel.com/new), importa el repositorio.
3. Vercel detecta Next.js automáticamente — no requiere configuración adicional.

También puedes desplegar desde la terminal con la [Vercel CLI](https://vercel.com/docs/cli):

```bash
npm i -g vercel
vercel
```
