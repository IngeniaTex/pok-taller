// Lista de servicios. Alimenta el menú, la sección #servicios, el filtro de proyectos,
// el select del formulario y los links del footer.
// id: se usa como ancla/valor de formulario/categoría de proyectos (sin acentos ni espacios).

const servicesData = [
  {
    id: "closets",
    title: "Clósets y vestidores",
    shortTitle: "Clósets",
    icon: "fas fa-tshirt",
    des: "Clósets, walk-in closets y vestidores diseñados a la medida de tu recámara, con iluminación LED integrada y herrajes de cierre suave.",
    features: ["Walk-in closets", "Módulos con iluminación LED", "Cajoneras y zapateras"],
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
    des: "Centros de entretenimiento, libreros, bases de cama, mesas y escritorios fabricados para el espacio exacto donde van.",
    features: ["Centros de entretenimiento", "Mesas y escritorios", "Libreros y repisas"],
  },
  {
    id: "oficinas",
    title: "Mobiliario para oficinas",
    shortTitle: "Oficinas",
    icon: "fas fa-briefcase",
    des: "Estaciones de trabajo, salas de juntas, recepciones y divisiones que hacen funcional y presentable tu oficina.",
    features: ["Estaciones de trabajo", "Mesas de juntas", "Recepciones y divisiones"],
  },
  {
    id: "recubrimientos",
    title: "Lambrines y Muros",
    shortTitle: "Recubrimientos",
    icon: "fas fa-grip-lines-vertical",
    des: "Muros decorativos y vigas de WPC con acabado madera e iluminación para transformar cualquier espacio.",
    features: ["Muros de lambrin", "Celosías y vigas", "Paneles con luz LED"],
  },
  {
    id: "comercial",
    title: "Proyectos comerciales",
    shortTitle: "Comercial",
    icon: "fas fa-store",
    des: "Barras, escenarios, mostradores y mobiliario para locales, salones de eventos y negocios, listos para operar.",
    features: ["Barras y mostradores", "Salones de eventos", "Locales y consultorios"],
  },
];

export default servicesData;
