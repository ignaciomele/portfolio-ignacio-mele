import React, {useState} from "react";
import './skills.css'
import iconSkills from '../../data/iconSkills.json'

export default function Skills() {
    const [imagePerRow, setImagePerRow] = useState(10)
    
    const [next, setNext] = useState(imagePerRow);
    const handleMoreIcons = () => {
        setNext(next + imagePerRow);
    };

    return(
        <>
        <div className="div-skills" id="skills">
        <div data-aos="fade-up">
            <h2>Skills</h2>
                <div className="div-skills-img">
                    <div className="div-skills-img-1"  >
                        {iconSkills.icons.slice(0, next).map((item, id) => (
                            <div key={id} className="div-skills-img-p" data-aos="flip-left" data-aos-duration="1000">
                                <img src={item.img} alt='/' className="skills-img"/>
                                <p>{item.title}</p>
                            </div>
                        ))}
            
                    </div>
                </div>
                {next < iconSkills.icons.length && (
                <div>
                    <button className="button slide_right" onClick={handleMoreIcons}>Show more</button>
                </div>

                )}
        </div>
            
        </div>
        
        </>
    )
}