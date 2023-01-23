import React from 'react'
import './burgerIcon.css'

export default function BurgerIcon(props) {
  return (
    <div>
    <div 
        onClick={props.handleClick} 
        className={`icon nav-icon ${props.burgerIconClicked ? 'open' : ''}`}>
        <span></span>
        <span></span>
        <span></span>
    </div>

    </div>
  )
}
