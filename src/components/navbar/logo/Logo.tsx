import React from 'react';
import "./logo.css"
import logoIM5 from '../../../static/logoIM5.png';

const Logo: React.FC = () => (
  <a href="#home">
    <img data-testid="navbar-logo" className="navbar-logo" src={logoIM5} alt="" />
  </a>
);

export default Logo;