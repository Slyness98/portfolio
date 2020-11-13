import React from 'react';
import ExternalLink from './ExternalLink';
import InternalLink from './InternalLink';
import Logo from './Logo';

const Navbar = () => {
  return (
  	<nav className="navbar">
  	 <ul className="navbar__bg row">
       <div className="col-sixth navbar__container--logo">
         <Logo />
       </div>
       
       <div className="col-fiveTwelfths navbar__container--links">
           <InternalLink icon="fa-home"          text="HOME"    />
           <InternalLink icon="fa-vector-square" text="SKILLS"  />
           <InternalLink icon="fa-laptop-code"   text="WORK"    />
           <InternalLink icon="fa-user-secret"   text="ABOUT"   />
           <InternalLink icon="fa-mail-bulk"     text="CONTACT" />
       </div>

       <div className="col-fiveTwelfths navbar__container--socialMedia">
           <ExternalLink icon="fa-linkedin-in"     href="https://www.linkedin.com/in/seth-lyness-0630a2155/" />
           <ExternalLink icon="fa-twitter-square"  href="https://twitter.com/SethLyness" />
           <ExternalLink icon="fa-facebook-square" href="" />
           <ExternalLink icon="fa-github-square"   href="https://github.com/Slyness98" />
       </div>
  	 </ul>
  	</nav>
  );
};

export default Navbar;