import React from "react";
import { Skill } from "./skills";
import CodeImg from "../assets/bank.png";
import FoodImg from "../assets/food.png";

const ProjectCard = ({ img, title, subtitle, desc, stack, live }) => {
  return (
    <div className="projectCard">
      <img src={img} />
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
      <div className="desc">{desc}</div>
      <ul className="teckStack">
        {stack.map((tech) => (
          <Skill key={tech} name={tech} />
        ))}
      </ul>
      <div className="links">
        <a href={live} target="_blank">
          Live
        </a>
        
      </div>
    </div>
  );
};

const Projects = () => {
  const projectsData = [
    {
      img: CodeImg,
      title: "Sparks Project",
      subtitle: "WebApp",
      desc: "A banking system where user can create new user and can transact money to other users.",
      stack: ["PHP", "Bootstrap" ,"CSS"],
      live: "https://playandloot.web.app/",

    },
    {
      img: FoodImg,
      title: " Online Vegetable Store",
      subtitle: "WebApp",
      desc: "In this website we can browse vegetables, fruits, meat and add them to cart.",
      stack: ["HTML", "CSS"],
      live: "https://implementationofcss3prac3.netlify.app/",
      
    },
    
  ];
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projectCardsContainer">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;