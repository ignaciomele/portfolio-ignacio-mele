import React, { useState, useEffect } from "react";
import './scrollUp.css'
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollUp: React.FC = () => {
    const [buttonScrollUp, setButtonScrollUp] = useState<boolean>(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const handleScroll = () => {
                setButtonScrollUp(window.scrollY > 250);
              };
            window.addEventListener("scroll", handleScroll);

            return () => {
            window.removeEventListener("scroll", handleScroll);
    };
          });
    }, [])

    const scrollUpButton = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            {buttonScrollUp && (
                <div className="btn-up" >
                    <button
                        className="button-scroll-up" 
                        aria-label="Scroll to top"
                        onClick={scrollUpButton} 
                        data-testid="scrollUp"
                        >
                            <FontAwesomeIcon icon={faChevronUp} className="icon-up"/>
                    </button>
            </div>
            )}         
        </>
    )
}

export default ScrollUp