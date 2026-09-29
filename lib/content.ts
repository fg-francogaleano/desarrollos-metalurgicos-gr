export const media = {
  desktopVideo:
    "https://res.cloudinary.com/dexm7t5ty/video/upload/v1789942725/Joel%20Ramirez/video-desktop_dckzho.mp4",
  mobileVideo:
    "https://res.cloudinary.com/dexm7t5ty/video/upload/v1789942359/Joel%20Ramirez/video-movile_losuu7.mp4",
  // piping:
  //   "https://images.unsplash.com/photo-1513828646384-e4d8ec30d2bb?crop=entropy&cs=srgb&fm=jpg&q=85&ixlib=rb-4.1.0",
     piping:
    "https://res.cloudinary.com/dexm7t5ty/image/upload/v1789850634/Joel%20Ramirez/piping-desktop_yfgusq.png",
  welding:
    "https://res.cloudinary.com/dexm7t5ty/image/upload/v1790553528/Joel%20Ramirez/bateas-industriales_ryjsuw.jpg",
  team:
    "https://res.cloudinary.com/dexm7t5ty/image/upload/v1790643346/Joel%20Ramirez/nosotros_tkgu9q.jpg",
  industrial:
    "https://res.cloudinary.com/dexm7t5ty/image/upload/v1789859783/Joel%20Ramirez/estructura-metalica_i60mef.jpg",
} as const;

export interface Solution {
  number: string;
  title: string;
  description: string;
  benefits: string[];
  applications: string[];
  image: string;
}

export const solutions: Solution[] = [
  {
    number: "01",
    title: "Líneas de conducción de fluidos",
    description:
      "Construcción e instalación de montaje de líneas de conducción de fluidos utilizando acero inoxidable y acero al carbono PIPING.",
    benefits: ["Experiencia técnica", "Soluciones personalizadas", "Altos estándares de calidad"],
    applications: ["Industria alimenticia", "Industria química", "Industria petrolera"],
    image: "https://res.cloudinary.com/dexm7t5ty/image/upload/v1790721159/Joel%20Ramirez/Lineas_de_conducione_de_fluidos_jgyy1i.png",
  },
  {
    number: "02",
    title: "Estructuras metálicas industriales",
    description:
      "Servicios de soporte en estructuras metálicas, entrepisos y bateas de procesos, con soluciones integrales en los casos que se necesiten.",
    benefits: ["Soporte integral", "Diseño a medida", "Capacidad industrial"],
    applications: ["Plantas fabriles", "Constructoras", "Ingenierías"],
    image: "https://res.cloudinary.com/dexm7t5ty/image/upload/v1790720402/Joel%20Ramirez/Estructura_metalica-servicio_wza9yx.jpg",
  },
  {
    number: "03",
    title: "Fabricaciones y montajes especiales",
    description:
      "Fabricaciones especiales a medida y montajes industriales para ofrecer soluciones personalizadas a diferentes tipos de industrias.",
    benefits: ["Fabricación a medida", "Montajes industriales", "Soluciones integrales"],
    applications: ["Sector farmacéutico", "Plantas industriales", "Acero inoxidable o acero al carbono"],
    image: "https://res.cloudinary.com/dexm7t5ty/image/upload/v1790721158/Joel%20Ramirez/Fabricaciones_y_montajes_especiales-servicios_rpxa4r.png",
  },
];

export interface Project {
  number: string;
  title: string;
  description: string;
  industry: string;
  technologies: string[];
  image: string;
}

export const projects: Project[] = [
  {
    number: "P / 01",
    title: "Sistemas de tuberías para transporte de fluidos",
    description: "Soluciones de piping para diferentes tipos de industrias, con foco en precisión, orden y calidad de montaje.",
    industry: "Plantas petroquímicas",
    technologies: ["Acero inoxidable"],
    image: media.piping,
  },
  {
    number: "P / 02",
    title: "Desarrollo de estructuras metálicas industriales",
    description: "Estructuras metálicas y entrepisos que complementan las necesidades de cada instalación.",
    industry: "Ampliación industrial",
    technologies: ["Fabricaciones especiales"],
    image: media.industrial,
  },
  {
    number: "P / 03",
    title: "Bateas industriales",
    description: "Línea de galvanoplastia y fosfatizado industrial.",
    industry: "Industrial galvanotecnia",
    technologies: ["Soluciones personalizadas"],
    image: media.welding,
  },
];

export interface ContactPayload {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  message: string;
  source: "home" | "contact";
}

export interface ContactResponse {
  id: string;
  message: string;
  received_at: string;
}