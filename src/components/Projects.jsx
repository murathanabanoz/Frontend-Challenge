// Projects.js
import React from "react";
import "../css/projects.css";
import ProjectItem from "./ProjectItem";

const projectsData = [
  {
    image: "path/to/image1.jpg",
    title: "Proje 1",
    description: "Bu benim ilk projem.",
    githubLink: "https://github.com/user/project1",
    viewLink: "https://example.com/project1",
  },
  {
    image: "path/to/image2.jpg",
    title: "Proje 2",
    description: "Bu benim ikinci projem.",
    githubLink: "https://github.com/user/project2",
    viewLink: "https://example.com/project2",
  },
  {
    image: "path/to/image3.jpg",
    title: "Proje 3",
    description: "Bu benim üçüncü projem.",
    githubLink: "https://github.com/user/project3",
    viewLink: "https://example.com/project3",
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
