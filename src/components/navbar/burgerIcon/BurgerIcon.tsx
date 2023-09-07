import React from 'react'
import './burgerIcon.css'

interface BurgerIconProps {
  handleClick: () => void;
  burgerIconClicked: boolean;
}

const BurgerIcon: React.FC<BurgerIconProps> = (props) => {
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

export default BurgerIcon
