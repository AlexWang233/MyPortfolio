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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Enthusiast",
    icon: creator,
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
    title: "Frontend Developer",
    company_name: "Wise Systems Inc",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sept 2022 - Dec 2022",
    points: [
      "Designed and constructed user registration and login flow pages, allowing new users to create accounts and enjoy the company’s logistic management and route optimization services. Alleviated the need for developers to create user profiles manually and greatly improved user experience.",
      "Designed and created multiple robust and reusable React components; designed and constructed various interactive web pages that allow users to configure account settings, allowing for more personalized user experience.",
      "Utilized TailWind library for creating adaptive and scalable styling components and Redux (React-Redux) library to manage Javascript application states",
      "Implemented various unit tests using Jest with React Testing Library to ensure functionality and performance of React components; refactored various deprecated Javascript components to Typescript with improved formatting and functionality to increase code quality and re-usability.",
      "Utilized Amazon Cognito for new user registration and storage of user account data. Independently implemented customized user registration and verification emails using Amazon SES.",
      "Actively participated in project planning, task management, and agile development processes during Agile Scrums. Productively engaged in team stand-ups and retrospective meetings with respect to the progression of Jira tickets.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "OpenText Inc",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Sept 2021 - Apr 2022",
    points: [
      "Integrated JRebel to company’s server deployed projects (jar and war files), reducing the re-deployment time of Java projects by 90%.",
      "Individually constructed interactive web pages related to user project update workflow related to users’ own custom web applications. Allowed users to comment, review, modify and confirm changes they make to their project-related files more conveniently.",
      "Designed and implemented multiple robust and reusable Angular components.",
      "Refactored various legacy Angular and AngularJS components to improve code quality and UI/UX customer satisfaction. Fixed/tested bugs through various versions of TeamSite (OpenText’s enterprise web content management system), greatly improving cross-platform versatility and compatibility.",
      "Diligently engaged in code review processes, providing constructive feedback on teammates’ code to improve code quality, maintain coding standards, and enhance overall project performance.",
      "Demonstrated flexibility and adaptability by quickly grasping new technologies, frameworks, and development methodologies, contributing to the continuous improvement of the development workflow.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Cognizantly Inc",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2021 - Apr 2021",
    points: [
      "Independently designed and constructed the company’s web app frontend using Javascript (React), allowing users to view their investment behavioural patterns and present them with a detailed assessment of how they may alter their strategies to become better traders in a professional and clear manner.",
      "Constructed multiple investments models using behavioural finance and back-testing to analyze user trading patterns and deficiencies in order to give feedback on customer investment strategies using Python and Flask framework to manage webpage endpoints.",
      "Utilized Alpaca trading API to build services that monitor stock market data both in real-time for backtesting and optimizing investment strategies.",
      "Independently designed and implemented project framework and key components, using MongoDB for storage of user data and Docker Kubernetes to build containers to run the web application.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "CI Financial",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2020 - Aug 2020",
    points: [
      "Key responsibilities in the development of client financial information pages using node.js. Allowed for more efficient and convenient examination of client profiles.",
      "Refactored and performed bug-fixes on various Javascript and Java classes and functions to improve user experience and functionality.",
      "Used Javascript frontend and Java backend to produce professional-client data PDF reports with detailed charts and graphs that allow handy visualization and evaluation of client characteristics.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Corefire Technology Ltd",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2019 - Aug 2019",
    points: [
      "Independently integrated multiple mobile payment gateways (ie. AliPay, WeChat Pay, Union Pay, etc) for the expansion of the company’s services overseas.",
      "Independently designed and implemented route optimization application for the local railway administration using C++ (QT) that allows for convenient customization of railway routes, schedules and transportation strategies.",
      "Built online shopping site with ShopXO template with the company’s mobile payment gateway integrated as an extension of the company’s business development.",
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
