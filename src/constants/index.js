import {
  mobile,
  backend,
  creator,
  web,
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
  threejs,
  cocos,
  celeri,
  artear,
  lanacion,
  delta,
  tsa,
  todovue,
  memorygame,
  monsape,
  citas,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UX/UI enthusiast",
    icon: mobile,
  },
  {
    title: "E2E Testing",
    icon: creator,
  },
  {
    title: "Team Player",
    icon: backend,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Front End Developer",
    company_name: "Celeri SRL",
    icon: celeri,
    iconBg: "#383E56",
    date: "Dic 2021 - Apr 2023",
    points: [
      "Contributed to multiple web development projects in the financial sector, including home broker platforms and compliance CRM systems.",
      "Developed user interfaces using React.js, Next.js, Material-UI, and Styled Components, ensuring best practices for UI/UX.",
      "Implemented real-time connectivity using Socket.io for live stock quotes and notifications.",
      "Managed global application state with Redux and Redux Toolkit, ensuring scalability and maintainability across various financial platforms.",
      "Built investment fund subscription and redemption functionalities, with strong emphasis on performance, security, and integrations.",
      "Used SWR (Stale-While-Revalidate) for efficient data fetching and management in compliance CRM systems.",
      "Worked closely with multiple financial clients, including Delta Asset Management and TSA Bursátil, to meet sector-specific needs.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Artear",
    icon: artear,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Oct 2023",
    points: [
      "Developed web applications using React, TypeScript, and Next.js.",
      "Implemented pixel-perfect designs and proposed functionality enhancements.",
      "Performed code debugging and maintenance to ensure application stability.",
    ],
  },
  {
    title: "Front End Developer & Technical Lead",
    company_name: "La Nación",
    icon: lanacion,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Present",
    points: [
      "Oversaw the smooth flow of stories in the board and the overall delivery of the team.",
      "Assisted in proper story assignment and ensured continuous tracking to meet deadlines.",
      "Ensured product delivery while maintaining focus on time, scope, and quality.",
      "Trained and guided the team to follow architecture guidelines for designing and developing technological solutions to meet product requirements.",
      "Collaborated on technical documentation, development flows, processes, and identifying recurring issues with their potential solutions.",
      "Acted as a technical lead, facilitating internal team communication and external communication with other teams.",
      "Stayed updated on the latest technological advancements relevant to the area.",
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
    name: "To Do mobile Vue.js",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: todovue,
    source_code_link: "https://github.com/byeaimebye/to-do-vue.js",
  },
  {
    name: "Cites Maker",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: citas,
    source_code_link: "https://github.com/byeaimebye/CitasReact",
  },
  {
    name: "Monsape Wines",
    description:
      "This project was the final project of a bootcamp and is an e-commerce website for purchasing wines with a subscription feature on the site.",
    tags: [
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "ejs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: monsape,
    source_code_link: "https://github.com/byeaimebye/Grupo_6_Monsape",
  },
  {
    name: "Memory Game",
    description:
      "This memory game is a JavaScript practice project that includes asynchronous functionality using setTimeout and array modifications.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: memorygame,
    source_code_link: "https://github.com/byeaimebye/memoryGame",
  },
];

export { services, technologies, experiences, testimonials, projects };
