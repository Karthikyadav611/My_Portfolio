import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  python,
  starbucks,
  carrent,
  jobit,
  tripguide,
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
    title: "Fullstack Developer",
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
    title: "AI Engineer",
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
    name: "React JS",
    icon: reactjs,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name:"python",
    icon: python,
  }
];

const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "Shadowfox",
    icon: starbucks,
    iconBg: "#383E56",
    date: "june 2025 - August 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
];

const projects = [
  {
    name: "Real-time Drowsiness Detections",
    description:
      "This is a Tkinter-based GUI application that detects drowsiness using OpenCV, dlib, and Pygame for sound alerts. The application monitors eye landmarks to determine if a person is drowsy and raises an alarm if necessary.",
    tags: [
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
      {
        name: "Tkinter",
        color: "green-text-gradient",
      },
      {
        name: "Pygame",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/misbah0786/SIC_PROJECT-DROWSINESS-DETECTION.git",
  },
  {
    name: "Finance Assistant",
    description:
      "A full-stack Personal Finance Assistant web application to help users efficiently manage their finances. Users can track income and expenses, set monthly budgets, view categorized transactions, and monitor financial summaries through an interactive dashboard",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "red-text-gradient",
      },
      {
        name:"mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Backstory and Character Generator",
    description:
      "A project is a Flask-based web application that generates engaging game character backstories using AI and visualizes them with AI-generated images. It leverages Groq API for text generation and Stability AI for image generation.",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "Html,css & Js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Karthikyadav611/Backstory-and-Character-generator-AI.git",
  },
];

export { services, technologies, experiences, projects };
