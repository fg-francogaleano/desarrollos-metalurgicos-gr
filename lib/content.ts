export const media = {
  desktopVideo:
    "https://customer-assets-eiarnc6j.emergentagent.net/job_ac69ced2-4dc7-468b-ac37-719024b64a57/artifacts/7aq8q1b0_video-desktop.mp4",
  mobileVideo:
    "https://customer-assets-eiarnc6j.emergentagent.net/job_ac69ced2-4dc7-468b-ac37-719024b64a57/artifacts/1gwlmcwy_Dise%C3%B1o%20sin%20t%C3%ADtulo%20%287%29.mp4",
  piping:
    "https://images.unsplash.com/photo-1513828646384-e4d8ec30d2bb?crop=entropy&cs=srgb&fm=jpg&q=85&ixlib=rb-4.1.0",
  welding:
    "https://images.unsplash.com/photo-1455165814004-1126a7199f9b?crop=entropy&cs=srgb&fm=jpg&q=85&ixlib=rb-4.1.0",
  team:
    "https://images.unsplash.com/photo-1742112125635-6f8201c6ee3f?crop=entropy&cs=srgb&fm=jpg&q=85&ixlib=rb-4.1.0",
  industrial:
    "https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?crop=entropy&cs=srgb&fm=jpg&q=85&ixlib=rb-4.1.0",
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
    image: media.piping,
  },
  {
    number: "02",
    title: "Estructuras metálicas industriales",
    description:
      "Servicios de soporte en estructuras metálicas, entrepisos y bateas de procesos, con soluciones integrales en los casos que se necesiten.",
    benefits: ["Soporte integral", "Diseño a medida", "Capacidad industrial"],
    applications: ["Plantas fabriles", "Constructoras", "Ingenierías"],
    image: media.industrial,
  },
  {
    number: "03",
    title: "Fabricaciones y montajes especiales",
    description:
      "Fabricaciones especiales a medida y montajes industriales para ofrecer soluciones personalizadas a diferentes tipos de industrias.",
    benefits: ["Fabricación a medida", "Montajes industriales", "Soluciones integrales"],
    applications: ["Sector farmacéutico", "Plantas industriales", "Acero inoxidable o acero al carbono"],
    image: media.welding,
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
    industry: "Plantas fabriles",
    technologies: ["Acero inoxidable", "Acero al carbono", "PIPING"],
    image: media.piping,
  },
  {
    number: "P / 02",
    title: "Desarrollo de estructuras metálicas industriales",
    description: "Estructuras metálicas, entrepisos y bateas de procesos que complementan las necesidades de cada instalación.",
    industry: "Construcción e industria",
    technologies: ["Estructuras metálicas", "Fabricaciones especiales"],
    image: media.industrial,
  },
  {
    number: "P / 03",
    title: "Montajes industriales a medida",
    description: "Montajes industriales y soluciones integrales para proyectos que requieren capacidad técnica especializada.",
    industry: "Ingenierías y compañías industriales",
    technologies: ["Montaje industrial", "Soluciones personalizadas"],
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