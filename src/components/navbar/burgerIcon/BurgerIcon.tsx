import React from 'react'
import './burgerIcon.css'
import { BurgerIconProps } from '../../../models/database-entities'


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
