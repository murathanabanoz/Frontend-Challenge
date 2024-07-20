import React from "react";
import { useSelector } from "react-redux";

function ProjectItem({ image, title, description, githubLink, viewLink }) {
  const { React_btn, Redux_btn, Axios_btn, Git_hub, View_Link } = useSelector(
    (state) => state.projectItem
  );

  return (
    <div className="projects-bottom-content">
      <img src={image} alt={title} className="project-image" />
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="button-group">
        <button>{React_btn}</button>
        <button>{Redux_btn}</button>
        <button>{Axios_btn}</button>
      </div>
      <div className="links-group">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          {Git_hub}
        </a>
        <a href={viewLink} target="_blank" rel="noopener noreferrer">
          {View_Link}
        </a>
      </div>
    </div>
  );
}

export default ProjectItem;
