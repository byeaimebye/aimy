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
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    cocos,
    celeri,
    delta,
    tsa,
    todovue,
    memorygame,
    monsape,
    citas
} from "../assets"

export const navLinks = [
    {
        id: "about",
        title: "About"
    },
    {
        id: "work",
        title: "Work"
    },
    {
        id: "contact",
        title: "Contact"
    }
]

const services = [
    {
        title: "Web Developer",
        icon: web
    },
    {
        title: "UX/UI enthusiast",
        icon: mobile
    },
    {
        title: "E2E Testing",
        icon: creator
    },
    {
        title: "Team Player",
        icon: backend
    }
]

const technologies = [
    {
        name: "HTML 5",
        icon: html
    },
    {
        name: "CSS 3",
        icon: css
    },
    {
        name: "JavaScript",
        icon: javascript
    },
    {
        name: "TypeScript",
        icon: typescript
    },
    {
        name: "React JS",
        icon: reactjs
    },
    {
        name: "Redux Toolkit",
        icon: redux
    },
    {
        name: "Node JS",
        icon: nodejs
    },
    {
        name: "git",
        icon: git
    },
    {
        name: "figma",
        icon: figma
    }
]

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Cocos Capital - Celeri SRL",
        icon: cocos,
        iconBg: "#E6DEDD",
        date: "Nov 2021 - Aug 2022",
        points: [
            "Participated in the development of an Argentinean home broker using React, including key features such as real-time stock quotes and portfolio management.",
            "Designed user interface (UI) utilizing a pre-existing UI kit, following best practices for UX.",
            "Implemented real-time connectivity with Socket.io for live updates of stock quotes and notifications.",
            "Managed global application state with Redux for scalability and maintainability."
        ]
    },
    {
        title: "React.js Developer",
        company_name: "Delta Asset Management - Celeri SRL",
        icon: delta,
        iconBg: "#E6DEDD",
        date: "Aug 2022 - Nov 2022",
        points: [
            "Contributed to web application development using Material-UI UI kit and Redux Toolkit for state management.",
            "Implemented investment fund subscription and redemption functionality, including connections and integrations.",
            "Conducted thorough testing for functionality, performance, and security."
        ]
    },
    {
        title: "React.js Developer",
        company_name: "TSA Bursátil - Celeri SRL",
        icon: tsa,
        iconBg: " #E6DEDD",
        date: "Nov 2022 - Jan 2023",
        points: [
            "Contributed to web application development using Material-UI UI kit and Redux Toolkit for state management.",
            "Implemented investment fund subscription and redemption functionality, including connections and integrations.",
            "Conducted thorough testing for functionality, performance, and security."
        ]
    },
    {
        title: "Front End Developer",
        company_name: "celeri - Celeri SRL",
        icon: celeri,
        iconBg: "#383E56 ",
        date: "Jan 2023 - Apr 2023",
        points: [
            "Contributed to the development of an ongoing compliance CRM project.",
            "Utilized Next.js, Material-UI, and Styled Components for building the user interface.",
            "Implemented SWR (Stale-While-Revalidate) for data fetching and management."
        ]
    }
]

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg"
    }
]

const projects = [
    {
        name: "To Do mobile Vue.js",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "vue",
                color: "blue-text-gradient"
            },
            {
                name: "css",
                color: "green-text-gradient"
            },
            {
                name: "typescript",
                color: "pink-text-gradient"
            }
        ],
        image: todovue,
        source_code_link: "https://github.com/byeaimebye/to-do-vue.js"
    },
    {
        name: "Cites Maker",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient"
            },
            {
                name: "css",
                color: "green-text-gradient"
            },
            {
                name: "html",
                color: "pink-text-gradient"
            }
        ],
        image: citas,
        source_code_link: "https://github.com/byeaimebye/CitasReact"
    },
    {
        name: "Monsape Wines",
        description:
            "This project was the final project of a bootcamp and is an e-commerce website for purchasing wines with a subscription feature on the site.",
        tags: [
            {
                name: "node",
                color: "pink-text-gradient"
            },
            {
                name: "javascript",
                color: "blue-text-gradient"
            },
            {
                name: "ejs",
                color: "green-text-gradient"
            },
            {
                name: "css",
                color: "pink-text-gradient"
            }
        ],
        image: monsape,
        source_code_link: "https://github.com/byeaimebye/Grupo_6_Monsape"
    },
    {
        name: "Memory Game",
        description:
            "This memory game is a JavaScript practice project that includes asynchronous functionality using setTimeout and array modifications.",
        tags: [
            {
                name: "javascript",
                color: "blue-text-gradient"
            },
            {
                name: "html",
                color: "green-text-gradient"
            },
            {
                name: "css",
                color: "pink-text-gradient"
            }
        ],
        image: memorygame,
        source_code_link: "https://github.com/byeaimebye/memoryGame"
    }
]

export { services, technologies, experiences, testimonials, projects }
