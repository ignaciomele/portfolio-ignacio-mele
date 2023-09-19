import React, {useState} from "react";
import './skills.css'
import iconSkills from '../../data/iconSkills.json'

interface IconSkill {
    img: string;
    title: string;
  }

const Skills: React.FC = () => {
    const [imagePerRow, setImagePerRow] = useState<number>(10)
    const [next, setNext] = useState<number>(imagePerRow)

    const handleMoreIcons: () => void = () => {
        setNext(next + imagePerRow);
    }

    return(
        <div className="div-skills" id="skills" data-testid="skills">
            <div data-aos="fade-up">
                <h2>Skills</h2>
                    <div className="div-skills-img">
                        <div className="div-skills-img-1"  data-testid="skills-next">
                            {iconSkills.icons.slice(0, next).map((item: IconSkill, id: number) => (
                                <div key={id} className="div-skills-img-p" data-aos="flip-left" data-aos-duration="1000">
                                    <img src={item.img} alt='/' className="skills-img"/>
                                    <p>{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {next < iconSkills.icons.length && (
                        <div>
                            <button 
                                className="button slide_right" 
                                onClick={handleMoreIcons}
                                data-testid="skills-show-more-button"
                                >
                                    Show more
                                </button>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default Skills