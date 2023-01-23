import React from "react";
import './projects.css'
import projectSimplesCosas from '../../static/projectSimplesCosas.png'
import portfolio from '../../static/portfolio.png'
import projectCocktails from '../../static/projectCocktails.png'

export default function Projects() {
    return(
        <>
            <div className="div-projects" id="projects">
                <div>
                    <h1>PROJECTS</h1>
                </div>
                <div className="div-projects-cards" data-aos="fade-up">
                    <div class="container-card" >
                            <figure>
                                <img src={projectSimplesCosas} alt=""/>
                                <div class="text-card">
                                    <h3>Simples Cosas Cabins</h3>
                                    <p>One of my work as a freelancer, about cabin's reservation, where you can connect with the owner to check the availability and more information about the cabin.</p>
                                    <a 
                                        href="https://simples-cosas-cabins.netlify.app/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        >
                                        <button className="button-project slide_right">Visit site</button>
                                    </a>
                                </div>
                            </figure>
                    </div>
                    <div class="container-card">
                            <figure>
                                <img src={portfolio} alt=""/>
                                <div class="text-card">
                                    <h3>Portfolio</h3>
                                    <p>My personal web site, where you can find information about my carreer and projects where I've been involved.</p>
                                    <a 
                                        href="https://cocktail-recipes-list.netlify.app/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        >
                                        <button className="button-project slide_right">Visit site</button>
                                    </a>
                                </div>
                            </figure>
                    </div>
                    <div class="container-card">
                            <figure>
                                <img src={projectCocktails} alt=""/>
                                <div class="text-card">
                                    <h3>Cocktail's recipe</h3>
                                    <p>Web page to search your favourite cocktails. Also, you can add your own recipes.</p>
                                    <a 
                                        href="https://ignacio-mele.netlify.app/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        >
                                        <button className="button-project slide_right">Visit site</button>
                                    </a>
                                </div>
                            </figure>
                    </div>
                    
                </div>
            </div>
        
        </>
    )
}