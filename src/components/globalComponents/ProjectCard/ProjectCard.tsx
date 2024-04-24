import React from "react";
import "./projectCard.css"
import { ProjectCardProps } from "../../../models/database-entities";

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, url2 }) => {
    const handleProjectButtonClick = () => {
      window.open(project.url, "_blank");
    };
  
    return (
      <div data-testid={`project-card-${index}`} className="container-card">
        <figure>
          <img src={project.imageUrl} alt="" />
          <div className="text-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="button-container">
              <button
                onClick={handleProjectButtonClick}
                className="button-project slide_right"
              >
                Visit site
              </button>
              {url2 && (
                <button
                  className={`button-project slide_right ${url2 ? 'button-project-no-padding' : null}`}
                >
                  {url2}
                </button>
              )}
            </div>
          </div>
        </figure>
      </div>
    );
  };
  
  export default ProjectCard;