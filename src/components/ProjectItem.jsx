import React from "react";

function ProjectItem({ image, title, description, githubLink, viewLink }) {
  return (
    <div className="projects-bottom-content">
      <img src={image} alt={title} className="project-image" />
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="button-group">
        <button>React</button>
        <button>Redux</button>
        <button>Axios</button>
      </div>
      <div className="links-group">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={viewLink} target="_blank" rel="noopener noreferrer">
          View Site
        </a>
      </div>
    </div>
  );
}

export default ProjectItem;
