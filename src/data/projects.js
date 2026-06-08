import erpImage from "../assets/erp.png";
import portfolioImage from "../assets/portfolio.png";
import weatherImage from "../assets/weather.png";

export const projects = [
  {
    title: "ERP Management System",
    image: erpImage,
    description:
      "Full stack ERP system for student management, attendance and fees system.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Bikky07"
  },

  {
    title: "Portfolio Website",
    image: portfolioImage,
    description:
      "Modern 3D portfolio built using React, Tailwind and Three.js.",
    tech: ["React", "Tailwind", "Three.js"],
    github: "https://github.com/Bikky07"
  },

  {
    title: "Weather App",
    image: weatherImage,
    description:
      "Real-time weather app using OpenWeather API with live search.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/Bikky07"
  }
];