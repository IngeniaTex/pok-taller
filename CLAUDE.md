# CLAUDE.md

Guía para Claude Code al trabajar en este repositorio.

## Proyecto

Landing page de una sola página para **POK**, taller de carpintería y mobiliario a la medida en Mérida,
Yucatán (clósets con LED, cocinas, oficinas, lambrines, proyectos comerciales). Derivada de la plantilla
de oficios de Ingeniatex. Next.js 14 App Router, **JavaScript (`.jsx`), sin TypeScript**. Único backend: el Route Handler
`app/api/cotizar/route.js` que envía el formulario por correo (Gmail SMTP con `nodemailer`).
Bootstrap 5 solo para grid/utilidades; los estilos son propios (`public/assets/css/style.css`) con
paleta verde oliva/naranja tomada del logo (`--olive-*`, `--primary-color-*`). Idioma: español (MX).
Correo, dirección y testimonios en `site.jsx` son provisionales (marcados como PENDIENTE). Los
originales de fotos del cliente están en `originales/pok/` (ignorado por git, fuera de `public/`):
no referenciarlos desde el sitio; generar copias optimizadas en `public/assets/img/{hero,about,why-us,materials,projects}/`.

Sigue las convenciones del sitio Ingeniatex del que deriva: componentes funcionales con
`export default`, un componente por archivo, nombres kebab-case, clases BEM por sección
(`hero__content`, `services__card`…), `btn-one` / `btn-two` / `btn-three`, `subtitle-one`,
`whatsapp-button whatsapp-button--{filled|dark|outline}`, `section-padding`. Alias `@/` = raíz.

## Comandos

```bash
npm install
npm run dev      # localhost:3000
npm run build    # verificación obligatoria antes de dar por terminado un cambio
npm run lint
```

No hay tests. Verificación = `npm run build` sin errores + revisar en el navegador (desktop y móvil).
No correr `build` con `dev` activo (comparten `.next`).

## Dónde cambiar cada cosa

| Cambio | Archivo |
|---|---|
| Nombre, contacto, WhatsApp, redes, textos de todas las secciones, proyectos, testimonios, footer | `components/data/site.jsx` — única fuente de verdad |
| Servicios (id, título, icono, descripción, features) | `components/data/services-data.jsx` — alimenta menú desktop/móvil, `#servicios`, filtro de proyectos, select del formulario y footer |
| Paleta de colores y fuentes | variables `:root` al inicio de `public/assets/css/style.css` |
| Orden / visibilidad de secciones | `components/pages/home/index.jsx` (comentar la línea para ocultar) |
| Menú desktop | `components/layout/header-menu.jsx` (items desde `site.nav`) |
| Menú móvil | `components/layout/mobile-menu.jsx` — mismos items; mantener sincronizados |
| Formulario | `components/pages/home/quote.jsx` hace POST a `app/api/cotizar/route.js` (correo a `site.contact.email` vía Gmail SMTP; requiere `GMAIL_APP_PASSWORD` en `.env.local`, ver `.env.example`). Si falla o no hay contraseña, ofrece WhatsApp con el mensaje armado |
| SEO (title/description/OG) | `app/layout.jsx` lee `site.brand`; favicon en `app/icon.svg` |
| Imágenes | `public/assets/img/{hero,about,why-us,materials,projects}/` (jpg optimizados); rutas en `site.jsx`. Logo: `public/assets/img/logo/logo.png` y `logo-light.png` |

## Reglas y trampas

- **No hardcodear textos en JSX**: todo contenido nuevo va a `site.jsx` / `services-data.jsx`.
- `app/layout.jsx` es Server Component (usa `export const metadata`). Solo llevan `"use client"` los
  componentes con hooks/eventos: `header`, `mobile-menu`, `services` (dispara evento), `projects`,
  `quote`, `scroll-to-top`. No agregues `"use client"` al layout.
- Preselección de servicio en el formulario: `services.jsx` emite `window.dispatchEvent(new CustomEvent("quote-service", { detail: id }))` y `quote.jsx` lo escucha. No usar `#cotizar?servicio=` (el hash no coincide con ningún id y no hace scroll).
- Los `id` de `services-data` se usan como ancla (`#servicio-<id>`), categoría de proyectos y valor del select: sin acentos, espacios ni mayúsculas.
- Anclas: `scroll-margin-top: var(--header-offset)` compensa el header fijo; si cambias la altura del header ajusta esa variable.
- Iconos: Font Awesome **Free** (`@fortawesome/fontawesome-free`) — solo `fas`, `far`, `fab`. No copiar el Font Awesome Pro de Ingeniatex.
- Imágenes con `<img src="/assets/img/...">` (rutas absolutas desde `public`), no `next/image`.
- Al terminar: `npm run build`; si tocaste menú o servicios, revisar desktop **y** móvil.
