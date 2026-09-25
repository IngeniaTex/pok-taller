# POK Landing – Next.js

Landing page (una sola página) para **POK**, taller de carpintería y mobiliario a la medida en Mérida,
Yucatán (clósets con LED, cocinas integrales, mobiliario de oficina, lambrines y proyectos comerciales).
Paleta **verde oliva y naranja** tomada del logotipo. Derivada de la plantilla de oficios de
**Ingeniatex** (Next.js 14 App Router, JavaScript, Bootstrap 5).

Correo, dirección y testimonios son provisionales:
están marcados como pendientes en `components/data/site.jsx`.

| Sección | Ancla | Componente |
|---|---|---|
| Hero + botones (presupuesto / WhatsApp) | `#inicio` | `components/pages/home/hero.jsx` |
| Cifras (proyectos, años, garantía…) | — | `components/pages/home/stats.jsx` |
| Nosotros | `#nosotros` | `components/pages/home/about.jsx` |
| Proceso de trabajo (4 pasos) | `#proceso` | `components/pages/home/process.jsx` |
| Servicios (grid desde `services-data`) | `#servicios`, `#servicio-<id>` | `components/pages/home/services.jsx` |
| ¿Por qué elegirnos? | `#por-que-elegirnos` | `components/pages/home/why-us.jsx` |
| Materiales (melamina, madera, enchapados, acero, PVC/WPC) | `#materiales` | `components/pages/home/materials.jsx` |
| Proyectos con filtro por categoría | `#proyectos` | `components/pages/home/projects.jsx` |
| Testimonios | `#testimonios` | `components/pages/home/testimonials.jsx` |
| Formulario de presupuesto + datos de contacto | `#cotizar` | `components/pages/home/quote.jsx` |
| CTA final | — | `components/pages/home/cta.jsx` |
| Footer | — | `components/layout/footer.jsx` |

Además: header con barra superior y menú sticky, menú móvil lateral, botón flotante de WhatsApp y
botón "volver arriba".

## Personalizar para un nuevo cliente

1. **Contenido** – edita únicamente `components/data/site.jsx` (nombre, contacto, WhatsApp,
   redes, textos de cada sección, proyectos, testimonios, footer) y `components/data/services-data.jsx`
   (lista de servicios). Todos los componentes leen de esos dos archivos.
2. **Logo** – `public/assets/img/logo/logo.png` (header, fondo claro) y `logo-light.png` (menú móvil
   y footer, fondo oscuro) se generaron a partir de `Pok-logo.png` (original). `brand.logo` /
   `brand.logoLight` apuntan a ellos.
3. **Imágenes** – las fotos optimizadas para web están en `public/assets/img/` (`hero/`, `about/`,
   `why-us/`, `materials/`, `projects/`); los originales del cliente viven en `originales/pok/` (fuera de
   `public/` e ignorado por git; no se referencian desde el sitio). Para agregar un proyecto: exporta la foto a ~1200 px de ancho (jpg),
   guárdala en `projects/` y agrega el item en `site.projects.items`. Tamaños: hero 800×960,
   nosotros 1000×800 y 800×800, por qué elegirnos 889×800, proyectos 4:3.
   Los avatares de testimonios siguen siendo placeholders SVG.
4. **Paleta** – todos los colores están en las variables `:root` al inicio de
   `public/assets/css/style.css`: `--primary-color-*` (naranja del logo) y `--olive-*` (verdes del logo).
5. **Mapa** – en Google Maps: Compartir → Insertar un mapa → copia el `src` del iframe en
   `contact.mapEmbed`. Vacío = no se muestra.
6. **Formulario** – al enviar hace POST a `app/api/cotizar/route.js`, que manda el mensaje (nombre,
   teléfono, servicio, zona y detalles) por correo a `contact.email` usando Gmail SMTP. Copia
   `.env.example` a `.env.local` y pon la contraseña de aplicación de Gmail en `GMAIL_APP_PASSWORD`
   (misma variable en el hosting). Sin contraseña, o si el envío falla, el formulario ofrece mandar
   el mismo mensaje por WhatsApp.
7. **SEO** – título, descripción y Open Graph salen de `brand.siteTitle` y `brand.description`
   (`app/layout.jsx` usa `export const metadata`). Favicon: `app/icon.svg`.

## Scripts

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # verificar antes de entregar
npm run start
npm run lint
```

## Estructura

```
app/
  layout.jsx            # fuentes (next/font), metadata, CSS global
  page.jsx              # única página → components/pages/home
  globals.css           # importa Bootstrap, Font Awesome Free y style.css
  icon.svg              # favicon
components/
  data/site.jsx         # TODO el contenido editable
  data/services-data.jsx# lista de servicios (menú, grid, filtro, formulario, footer)
  layout/               # header, header-menu (desktop), mobile-menu, footer
  common/               # section-title, whatsapp-button, whatsapp-float, scroll-to-top, social
  pages/home/           # index.jsx + una sección por archivo
public/assets/
  css/style.css         # estilos propios (variables de paleta al inicio)
  img/                  # placeholders SVG
```

## Créditos

Estructura y convenciones tomadas del sitio Ingeniatex (plantilla Bantec). Iconos: Font Awesome Free.
Fuentes: Barlow / Barlow Condensed (Google Fonts vía `next/font`).
