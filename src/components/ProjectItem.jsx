import React from "react";

function ProjectItem({
  image,
  title,
  description,
  githubLink,
  viewLink,
  buttons,
}) {
  return (
    <div className="projects-bottom-content">
      <img src={image} alt={title} className="project-image" />
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="button-group">
        {buttons.map((btn, idx) => (
          <button key={idx}>{btn}</button>
        ))}
      </div>
      <div className="links-group">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={viewLink} target="_blank" rel="noopener noreferrer">
          View
        </a>
      </div>
    </div>
  );
}

export default ProjectItem;
