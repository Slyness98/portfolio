import React from 'react';
import ExternalLink from './atoms/ExternalLink';
import InternalLink from './atoms/InternalLink';
import Logo from './atoms/Logo';

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
           <ExternalLink icon="fa-linkedin-in"     />
           <ExternalLink icon="fa-twitter-square"  />
           <ExternalLink icon="fa-facebook-square" />
           <ExternalLink icon="fa-github-square"   />
       </div>
  	 </ul>
  	</nav>
  );
};

export default Navbar;