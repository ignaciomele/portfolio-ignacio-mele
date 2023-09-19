import React from "react";
import "./projectCard.css"

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    imageUrl: string;
    url: string;
  };
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
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
            <button
              onClick={handleProjectButtonClick}
              className="button-project slide_right"
            >
              Visit site
            </button>
          </div>
        </figure>
      </div>
    );
  };
  
  export default ProjectCard;