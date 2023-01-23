import React, { useState, useEffect } from "react";
import './scrollUp.css'
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ScrollUp() {
    const [buttonScrollUp, setButtonScrollUp] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 250) return setButtonScrollUp(true)
            if(window.scrollY < 250) return setButtonScrollUp(false)
        })
    }, [])

    const scrollUpButton = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
        <div>
            {buttonScrollUp && (
                <div className="btn-up" >
                    <a href="#home" onClick={scrollUpButton}>
                        <FontAwesomeIcon icon={faChevronUp} className="icon-up"/>
                    </a>
            </div>
            )}
        </div>            
        </>
    )
}