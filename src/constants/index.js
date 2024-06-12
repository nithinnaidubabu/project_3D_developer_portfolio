import {
  uashmideveloper,
  webdesign,
  gisdeveloper,
  frontend,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  newspace,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Developer",
    icon: frontend,
  },
  {
    title: "GIS Developer",
    icon: gisdeveloper,
  },
  {
    title: "UAS HMI Developer",
    icon: uashmideveloper,
  },
  {
    title: "Web Designer",
    icon: webdesign,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Project Engineer",
    company_name: "Newspace Research and Technologies Pvt. Ltd.",
    icon: newspace,
    iconBg: "#FFFFFF",
    date: "April 2021 - December 2021",
    points: [
      "Designed and implemented REST APIs using JavaScript, integrating them with React to create efficient front-end interfaces.",
      "Gained proficiency in front-end technologies such as React-JS, Redux, HTML, CSS, jQuery, and JavaScript, focusing on performance improvement and software capacity enhancement.",
      "Acquired extensive experience in GIS-related software frameworks, libraries, and APIs, including Leaflet, Mapbox API, and Google Maps API, as well as GIS software application suites like ESRI ArcGIS and QGIS.",
      "Developed an in-house Ground Control Station Software, serving as a Human Machine Interface for controlling and planning missions for swarming drones, with advanced features like routine creation and track-based mission organization."
    ],
  },
  {
    title: "Design Engineer",
    company_name: "Newspace Research and Technologies Pvt. Ltd.",
    icon: newspace,
    iconBg: "#FFFFFF",
    date: "Jan 2022 - Present",
    points: [
      "Led the implementation of advanced mission planning features, focusing on routine management, parameter validation, and efficient drone assignment for mission execution.",
      "Developed a sophisticated software solution for unmanned aerial systems, showcasing expertise in map migration, interface design, socket IO implementation, and MUM-T integration.",
      "Enhanced user experience by improving CSS styling, integrating position markers, developing video feed components, and engineering emergency controls for drone command issuance.",
      "Optimized the Redux store for data management, maintained consistent page state during navigation, fixed bugs, and integrated toasters for user feedback.",
      "Increased pipeline capacity by 350% through the development of Artillery Correction Software, which included features like concurrent video feed reception and location plotting from video feeds.",
      "Demonstrated leadership by training defense officials on custom front-end software, managing inventory for a fleet of 70+ drones, and ensuring smooth software deployment in mission-critical environments."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
