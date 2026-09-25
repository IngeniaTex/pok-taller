// Lista de servicios. Alimenta el menú, la sección #servicios, el filtro de proyectos,
// el select del formulario y los links del footer.
// id: se usa como ancla/valor de formulario/categoría de proyectos (sin acentos ni espacios).

const servicesData = [
  {
    id: "closets",
    title: "Clósets y walk-in closets",
    shortTitle: "Clósets",
    icon: "fas fa-tshirt",
    des: "Clósets, walk-in closets y vestidores diseñados a la medida de tu recámara, con iluminación LED integrada y herrajes de cierre suave.",
    features: ["Clósets y walk-in closets", "Módulos con iluminación LED", "Cajoneras y zapateras"],
  },
  {
    id: "cocinas",
    title: "Cocinas integrales",
    shortTitle: "Cocinas",
    icon: "fas fa-utensils",
    des: "Cocinas completas con gabinetes, alacenas y cubiertas que aprovechan cada centímetro y resisten el uso diario.",
    features: ["Gabinetes y alacenas", "Luz LED bajo alacena", "Cubiertas y accesorios"],
  },
  {
    id: "muebles",
    title: "Muebles a la medida",
    shortTitle: "Muebles",
    icon: "fas fa-couch",
    des: "Centros de TV, escritorios, muebles de baño, libreros y mesas fabricados para el espacio exacto donde van, en casa o en tu negocio.",
    features: ["Centros de TV", "Escritorios", "Muebles de baño"],
  },
  {
    id: "oficinas",
    title: "Mobiliario para oficinas",
    shortTitle: "Oficinas",
    icon: "fas fa-briefcase",
    des: "Estaciones de trabajo, salas de juntas, recepciones, mamparas y divisiones que hacen funcional y presentable tu oficina.",
    features: ["Estaciones de trabajo", "Mesas de juntas", "Mamparas y divisiones"],
  },
  {
    id: "recubrimientos",
    title: "Muros, plafones y decks",
    shortTitle: "Recubrimientos",
    icon: "fas fa-grip-lines-vertical",
    des: "Muros y plafones decorativos, vigas, celosías, decks y terrazas con acabado madera e iluminación, para interiores y exteriores.",
    features: ["Muros y plafones", "Vigas y celosías", "Decks y terrazas"],
  },
  {
    id: "comercial",
    title: "Comercial y eventos",
    shortTitle: "Comercial",
    icon: "fas fa-store",
    des: "Barras, mostradores, escenarios y mobiliario para locales, negocios y eventos sociales, listo para operar.",
    features: ["Barras y mostradores", "Mobiliario para eventos sociales", "Locales y consultorios"],
  },
];

export default servicesData;
