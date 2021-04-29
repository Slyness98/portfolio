import React from 'react';
import {CircleImg} from '../../circle-image/CircleImg.styled';
const SkillButton = ({src, subtitle}) => {
  return(
   <div className="skillBtn__container">
      <button className="skillBtn__btn">
        <CircleImg src={src} alt={"Circular button image with corresponding logo of skill/tool being represented"} />
      </button>
      <p className="skillBtn__subtitle">{subtitle}</p>
   </div>
  );
}

export default SkillButton;