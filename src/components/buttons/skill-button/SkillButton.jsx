import React, {useEffect, useRef} from 'react';
import {CircleImg} from '../../circle-image/CircleImg.styled';

const SkillButton = ({src, subtitle, ...props}) => {
  const skillNameId = sessionStorage.getItem('activeSkill') || 'skillBtn--1'; //activeSkill key is set in Carousel.jsx. It's only purpose is to serve as a reference for which skill to set focus() on across refreshes.
  const {id} = props;
  const node = useRef();
  
  useEffect(() => {
   const button = node.current;
   if(id === skillNameId) {
     button.focus();
   }
  }, [id, skillNameId])
  
  return(
   <div className="skillBtn__container">
      <button className="skillBtn__btn" ref={node} {...props}>
        <CircleImg 
          src={src} 
          alt={"Circular button image with corresponding logo of skill/tool being represented"} 
        />
      </button>
      <p className="skillBtn__subtitle">{subtitle}</p>
   </div>
  );
}

export default SkillButton;