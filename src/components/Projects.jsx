import React from "react";
import "../css/projects.css";
import ProjectItem from "./ProjectItem";

const projectsData = [
  {
    image:
      "https://img.ekonomim.com/storage/files/images/2024/07/09/netflix-uyelik-ucreti-2024-bir-zam-daha-geldi-netflix-aylik-ucret-ne-kadar-ic29_cover.jpg",
    title: "Netflix",
    description:
      "A simple, customizable, minimal setup cookie plugin that allows yours user to select which cookies to accept or decline.This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    githubLink: "https://github.com/Murathan722/NetFlix-Projesi",
    viewLink: "https://net-flix-projesi.vercel.app/",
  },
  {
    image:
      "https://www.medyakoridoru.com/wp-content/uploads/2021/09/02/02092021092345_4324763_9_23.jpg",
    title: "Twitter",
    description:
      "A simple, customizable, minimal setup cookie plugin that allows yours user to select which cookies to accept or decline.This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    githubLink: "https://github.com/Murathan722/Twitter-Projesi",
    viewLink: "https://twitter-projesi.vercel.app/",
  },
  {
    image:
      "https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/pizza_14_11zon.webp",
    title: "Pizza",
    description:
      "A simple, customizable, minimal setup cookie plugin that allows yours user to select which cookies to accept or decline.This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    githubLink: "https://github.com/Murathan722/fsweb-s7-challenge-pizza",
    viewLink: "https://fsweb-s7-challenge-pizza-seven-rho.vercel.app/",
  },
];

function Projects() {
  return (
    <>
      <div className="projects-horizontal"></div>
      <div className="projects-container">
        <div className="projects-top">
          <h1>Projects</h1>
        </div>
        <div className="projects-bottom">
          {projectsData.map((project, index) => (
            <ProjectItem
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              viewLink={project.viewLink}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
