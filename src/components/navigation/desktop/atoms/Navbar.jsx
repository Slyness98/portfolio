import React from 'react';
import ExternalLink from './ExternalLink';
import InternalLink from './InternalLink';

const Navbar = () => {
  return (
  	<nav id ="navbar" className="navbar">
  	 <ul className="navbar__bg row">
       
       <div className="col-fiveSevenths navbar__container--links">
        <li className="navbar__item"> 
          <InternalLink
            buttonClass="navbar__link" 
            iClass="navbar__icon fas fa-home"          
            iContent="HOME"
            route="/"    
          />
        </li>
        <li className="navbar__item"> 
          <InternalLink 
            buttonClass="navbar__link"             
            iClass="navbar__icon fas fa-vector-square" 
            iContent="SKILLS" 
            route="/skills"     
          />
        </li>
        <li className="navbar__item"> 
          <InternalLink 
            buttonClass="navbar__link" 
            iClass="navbar__icon fas fa-laptop-code"   
            iContent="WORK" 
            route="/gallery"       
          />
        </li>
        <li className="navbar__item"> 
          <InternalLink
            buttonClass="navbar__link" 
            iClass="navbar__icon fas fa-user-secret"   
            iContent="ABOUT"
            route="/about"   
          />
        </li>
        <li className="navbar__item"> 
          <InternalLink
            buttonClass="navbar__link" 
            iClass="navbar__icon fas fa-mail-bulk"     
            iContent="CONTACT" 
            route="/contact"
          />
        </li>
       </div>
     
       <div className="col-twoSevenths navbar__container--socialMedia">
         <ExternalLink icon="fa-linkedin-in"     href="https://www.linkedin.com/in/seth-lyness-0630a2155/" />
         <ExternalLink icon="fa-github-square"   href="https://github.com/Slyness98" />
       </div>
  	 </ul>
  	</nav>
  );
};

export default Navbar;