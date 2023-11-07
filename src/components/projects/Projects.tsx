import React from "react";
import './projects.css';
import projectSimplesCosas from '../../static/projectSimplesCosas.png';
import portfolio from '../../static/portfolio.png';
import projectCocktails from '../../static/projectCocktails.png';
import ProjectCard from "../globalComponents/ProjectCard/ProjectCard";


const Projects: React.FC = () => {
    const projects = [
        {
          title: "Simples Cosas Cabins",
          description:
            "One of my work as a freelancer, about cabin's reservation, where you can connect with the owner to check the availability and more information about the cabin.",
          imageUrl: projectSimplesCosas,
          url: "https://cabanasimplescosas.com/",
        },
        {
          title: "Portfolio",
          description:
            "My personal web site, where you can find information about my carreer and projects where I've been involved.",
          imageUrl: portfolio,
          url: "https://ignacio-mele.netlify.app/",
        },
        {
          title: "Cocktail recipes",
          description:
            "Web page to search your favourite cocktails. Also, you can add your own recipes.",
          imageUrl: projectCocktails,
          url: "https://cocktail-recipes-list.netlify.app/",
        },
      ];
      
  return (
    <div className="div-projects" id="projects">
      <div data-testid="projects-title">
        <h1>PROJECTS</h1>
      </div>
      <div 
        className="div-projects-cards" 
        data-aos="fade-up"
        
        >
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectCard
              project={project}
              index={index}
              url2={
                index === 1 ? (
                  <button
                    onClick={() =>
                      window.open(
                        "https://github.com/ignaciomele/portfolio-ignacio-mele",
                        "_blank"
                      )
                    }
                    className="button-project-extra"
                  >
                    GitHub
                  </button>
                ) : undefined
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;