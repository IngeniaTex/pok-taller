// Única fuente de verdad del contenido del sitio.
// Para adaptar la plantilla a un nuevo cliente edita este archivo (y services-data.jsx);
// no hace falta tocar los componentes.
//
// PENDIENTE (confirmar con el cliente): dirección exacta del taller y nombre del titular.
// Los valores actuales de esos campos son provisionales.

const site = {
  brand: {
    name: "POK",
    tagline: "Carpintería y mobiliario a la medida",
    siteTitle: "POK | Clósets, cocinas y acabados a la medida en Mérida",
    description:
      "POK: carpintería a la medida en Mérida, Yucatán. Clósets con iluminación LED, cocinas integrales, mobiliario de oficina, lambrines y proyectos comerciales. Cotización sin costo.",
    logo: "/assets/img/logo/logo.png",
    logoLight: "/assets/img/logo/logo-light.png",
  },

  contact: {
    phone: "+52 990 165 4122",
    phoneHref: "tel:+529901654122",
    // Número en formato internacional sin "+" ni espacios
    whatsappNumber: "529901654122",
    whatsapp: "https://wa.me/529901654122",
    email: "pok.merida@gmail.com",
    address: "Taller en Hunucmá, Yucatán",
    serviceArea: "Mérida y alrededores",
    // Google Maps > Compartir > Insertar un mapa > copia el src del iframe. Vacío = sin mapa.
    mapEmbed: "",
  },

  social: [
    { id: "facebook", label: "Facebook", href: "https://www.facebook.com/profile.php?id=61575193635988", icon: "fab fa-facebook-f" },
    { id: "instagram", label: "Instagram", href: "https://www.instagram.com/pok.taller/", icon: "fab fa-instagram" },
  ],

  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#cotizar" },
  ],

  hero: {
    subtitle: "Carpintería a la medida en Mérida",
    title: "Muebles y acabados a la medida para tu casa o tu negocio",
    text:
      "Fabricamos clósets, cocinas, oficinas, muros y plafones, decks y mobiliario comercial, con acabados que se ven y se sienten de calidad. Medimos tu espacio, te proponemos el diseño y lo instalamos en la fecha acordada.",
    primaryCta: { label: "Solicitar cotización", href: "#cotizar" },
    image: "/assets/img/hero/hero.jpg",
    badge: { value: "100%", label: "hecho a la medida" },
    rating: { value: "5.0", count: "Clientes satisfechos en Mérida" },
  },

  stats: [
    { value: "100%", label: "Diseño a la medida", icon: "fas fa-ruler-combined" },
    { value: "LED", label: "Iluminación integrada", icon: "fas fa-lightbulb" },
    { value: "Taller", label: "Fabricación propia en Hunucmá", icon: "fas fa-tools" },
    { value: "24 h", label: "Respuesta a cotizaciones", icon: "fas fa-stopwatch" },
  ],

  about: {
    subtitle: "Sobre nosotros",
    title: "Un taller de carpintería que cuida cada detalle",
    text:
      "En POK diseñamos y fabricamos mobiliario a la medida para casas, oficinas y negocios en Mérida y sus alrededores. Fabricamos todo en nuestro taller de Hunucmá con materiales premium, y nosotros nos encargamos de todo: medición, diseño, fabricación e instalación.",
    points: [
      "Medición y cotización sin costo",
      "Amplio catálogo de materiales, colores y texturas",
      "Iluminación LED y herrajes de cierre suave",
      "Instalación limpia y en la fecha acordada",
    ],
    images: ["/assets/img/about/about-1.jpg", "/assets/img/about/about-2.jpg"],
    badge: { value: "+40", label: "proyectos en Mérida" },
    owner: { name: "Equipo POK", role: "Diseño, fabricación e instalación" },
    cta: { label: "Conoce nuestros servicios", href: "#servicios" },
  },

  process: {
    subtitle: "Nuestro proceso",
    title: "Así hacemos realidad tu proyecto",
    steps: [
      {
        title: "Visita y medición",
        text: "Vamos a tu casa, oficina o local, tomamos medidas y escuchamos cómo usas el espacio.",
        icon: "fas fa-ruler-combined",
      },
      {
        title: "Diseño y cotización",
        text: "Te proponemos distribución, materiales y colores, con una cotización clara por WhatsApp.",
        icon: "fas fa-drafting-compass",
      },
      {
        title: "Fabricación en taller",
        text: "Cortamos, armamos y detallamos cada módulo en nuestro taller de Hunucmá con avances por foto.",
        icon: "fas fa-tools",
      },
      {
        title: "Instalación y entrega",
        text: "Instalamos, conectamos la iluminación, limpiamos y te entregamos listo para usar.",
        icon: "fas fa-clipboard-check",
      },
    ],
  },

  whyUs: {
    subtitle: "¿Por qué elegir POK?",
    title: "Diseño funcional, acabados limpios y entrega puntual",
    text:
      "Un mueble a la medida se nota en los detalles: los cortes, los cantos, cómo cierra un cajón y cómo se ve con luz. Por eso cuidamos cada etapa, desde la elección del material hasta la instalación.",
    features: [
      { title: "A la medida real", text: "Cada módulo se diseña para tu espacio exacto, sin adaptar muebles genéricos.", icon: "fas fa-ruler-combined" },
      { title: "Materiales Premium", text: "Materiales y herrajes seleccionados para resistir el uso diario y verse bien.", icon: "fas fa-gem" },
      { title: "Iluminación LED", text: "Integramos luz LED en clósets, cocinas y lambrines para un acabado premium.", icon: "fas fa-lightbulb" },
      { title: "Cumplimos fechas", text: "Acordamos un calendario de fabricación e instalación y te avisamos de cada avance.", icon: "fas fa-calendar-check" },
    ],
    image: "/assets/img/why-us/why-us.jpg",
    highlight: { value: "100%", label: "de nuestros clientes nos recomiendan" },
  },

  materials: {
    subtitle: "Materiales",
    title: "Funcionalidad, diseño y calidad",
    text: "Elegimos el material según el mueble, el uso y el espacio. Estos son los que trabajamos en POK.",
    items: [
      {
        title: "Melamina",
        badge: "Nuestra especialidad",
        text: "Tablero de aglomerado o MDF recubierto con una lámina decorativa de resina melamínica.",
        benefits: [
          "Variedad de diseños, colores y texturas",
          "Fácil de limpiar y mantener",
          "Resistente al desgaste superficial",
          "Versátil y accesible",
        ],
        image: "/assets/img/materials/melamina.jpg",
        icon: "fas fa-layer-group",
        tags: ["Clósets", "Cocinas", "Oficinas", "Muebles"],
      },
      {
        title: "Madera",
        text: "Sus vetas y tonalidades naturales hacen que cada pieza tenga una apariencia única.",
        benefits: [
          "Vetas y tonalidades naturales",
          "Resistente",
          "Atemporal",
          "Requiere mayor cuidado y mantenimiento",
        ],
        image: "/assets/img/materials/madera.jpg",
        icon: "fas fa-tree",
      },
      {
        title: "Enchapados",
        text: "Incorporan la apariencia y textura de la madera natural sobre superficies de tablero.",
        benefits: [
          "Vetas naturales",
          "Variedad de acabados",
        ],
        image: "/assets/img/materials/enchapados.jpg",
        icon: "fas fa-clone",
      },
      {
        title: "Acero",
        text: "Ideal para crear estructuras, combinar materiales y desarrollar diseños con una estética industrial o contemporánea.",
        benefits: [
          "Resistente",
          "Versátil",
        ],
        image: "/assets/img/materials/acero.jpg",
        icon: "fas fa-industry",
        tags: ["Estructuras", "Estética industrial"],
      },
      {
        title: "PVC | WPC",
        text: "Materiales que ofrecen distintas soluciones decorativas para transformar espacios interiores y exteriores.",
        benefits: [
          "Resistencia a la humedad",
          "Fácil mantenimiento",
          "Variedad de diseños, colores y texturas",
        ],
        image: "/assets/img/materials/wpc.jpg",
        icon: "fas fa-grip-lines-vertical",
        tags: ["Lambrines", "Muros", "Vigas"],
      },
    ],
  },

  projects: {
    subtitle: "Proyectos recientes",
    title: "Trabajos que hablan por nosotros",
    // category debe coincidir con un id de services-data.jsx
    items: [
      { title: "Clóset con módulos e iluminación LED", category: "closets", location: "Mérida, Yucatán", image: "/assets/img/projects/closet-led.jpg" },
      { title: "Clóset con entrepaños y luz LED perimetral", category: "closets", location: "Mérida, Yucatán", image: "/assets/img/projects/closet-led-modulos.jpg" },
      { title: "Clóset con cajonera y módulos de guardado", category: "closets", location: "Mérida, Yucatán", image: "/assets/img/projects/closet-cajonera.jpg" },
      { title: "Cocina integral Real Montejo", category: "cocinas", location: "Real Montejo, Mérida", image: "/assets/img/projects/cocina-real-montejo.jpg" },
      { title: "Walk-in closet con cajoneras", category: "closets", location: "Dzityá, Mérida", image: "/assets/img/projects/walk-in-closet.jpg" },
      { title: "Walk-in closet con acabado nogal y LED", category: "closets", location: "Dzityá, Mérida", image: "/assets/img/projects/walk-in-closet-nogal.jpg" },
      { title: "Estaciones de trabajo para oficinas", category: "oficinas", location: "Dzityá, Mérida", image: "/assets/img/projects/oficinas-dzitya.jpg" },
      { title: "Sala de juntas con vigas de WPC", category: "oficinas", location: "Dzityá, Mérida", image: "/assets/img/projects/sala-juntas.jpg" },
      { title: "Vestidor con iluminación LED", category: "closets", location: "Dzityá, Mérida", image: "/assets/img/projects/vestidor-led.jpg" },
      { title: "Muro de lambrin con luz LED", category: "recubrimientos", location: "Rancho Mezo", image: "/assets/img/projects/lambrin-listones.jpg" },
      { title: "Fachada de baños con paneles y lambrin", category: "recubrimientos", location: "Rancho Mezo", image: "/assets/img/projects/banos-rancho-mezo.jpg" },
      { title: "Barra y escenario para salón de eventos", category: "comercial", location: "Rancho Mezo", image: "/assets/img/projects/barra-escenario.jpg" },
    ],
  },

  testimonials: {
    subtitle: "Testimonios",
    title: "Lo que dicen nuestros clientes",
    // Testimonios de muestra: sustituir por reseñas reales del cliente.
    items: [
      {
        name: "Gabriela Cetina",
        service: "Walk-in closet",
        text: "El clóset quedó exactamente como lo platicamos y la iluminación LED le da un toque increíble. Cumplieron la fecha y dejaron todo limpio.",
        rating: 5,
        avatar: "/assets/img/testimonials/avatar-1.svg",
      },
      {
        name: "Rodrigo Pech",
        service: "Cocina integral",
        text: "Aprovecharon cada rincón de la cocina. Nos propusieron la distribución, nos mostraron los materiales y el resultado se ve de primera.",
        rating: 5,
        avatar: "/assets/img/testimonials/avatar-2.svg",
      },
      {
        name: "Mariana Ávila",
        service: "Mobiliario de oficina",
        text: "Equiparon nuestras oficinas con estaciones de trabajo, sala de juntas y una celosía que se ve espectacular. Muy buena comunicación en todo el proceso.",
        rating: 5,
        avatar: "/assets/img/testimonials/avatar-3.svg",
      },
    ],
  },

  quote: {
    subtitle: "Solicitar cotización",
    title: "Cuéntanos qué quieres fabricar",
    text: "Llena el formulario y te respondemos por WhatsApp con una propuesta y cotización. Sin compromiso.",
    submitLabel: "Enviar solicitud",
    sendingLabel: "Enviando...",
    privacy: "Tus datos solo se usan para responder a tu solicitud.",
    success: {
      title: "¡Recibimos tu solicitud!",
      text: "Te contactamos por WhatsApp en menos de 24 horas hábiles con una propuesta.",
      again: "Enviar otra solicitud",
    },
    error: {
      title: "No pudimos enviar tu solicitud",
      text: "Inténtalo de nuevo en un momento o envíanos el mismo mensaje por WhatsApp.",
      whatsapp: "Enviar por WhatsApp",
    },
    aside: {
      title: "¿Prefieres hablar directo?",
      text: "Escríbenos por WhatsApp con fotos o medidas de tu espacio y te orientamos antes de cotizar.",
      responseTime: "Menos de 24 horas hábiles",
    },
  },

  cta: {
    title: "¿Listo para diseñar tu espacio?",
    text: "Agenda una visita sin costo. Medimos, proponemos el diseño y te decimos cuándo lo instalamos.",
  },

  footer: {
    about:
      "Carpintería y mobiliario a la medida para Mérida y alrededores, fabricado en nuestro taller de Hunucmá, Yucatán: clósets, cocinas, oficinas, lambrines y proyectos comerciales.",
    links: [
      { label: "Nosotros", href: "#nosotros" },
      { label: "Proceso", href: "#proceso" },
      { label: "Proyectos", href: "#proyectos" },
      { label: "Testimonios", href: "#testimonios" },
      { label: "Solicitar cotización", href: "#cotizar" },
    ],
    copyright: `© ${new Date().getFullYear()} POK. Todos los derechos reservados.`,
    credit: { label: "Sitio por Ingeniatex", href: "https://ingeniatex.com" },
  },
};

export default site;
