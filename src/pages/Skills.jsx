import styled from 'styled-components';
import {useActiveSkillContext} from '../contexts/ActiveSkill.context';
import Carousel from '../components/grid-carousel/Carousel';
import SkillDetail from '../components/skillDetail/SkillDetail';
import {bp} from '../assets/utilities';

const SectionWrapper = styled.main.attrs({
  className: "section-skills"
})`
  /* 
    At the time of this writing (July 2021) 'overflow: overlay' is not a standardized 
    value and will break in all firefox versions & safari versions >11.4. It's behavior
    is currently being standardized as the 'scrollbar-gutter' property, but no browser
    currently supports it. There is no alternative in which the scrollbar 
    still shows up and the :before psuedo element used to transition the gradient 
    overlay via scaling doesn't obscure the scrollbar. Methods to get the offset
    width of the scrollbar on resize and feed it back in via props have failed, 
    being that all properties to obtain references to screen outerWidth - innerWidth 
    are reported as 0 according to the browser, even when a scrollbar is clearly present. 
    On the other hand, this still has 75% global user coverage according to caniuse.com 
    and should really only affect firefox and newer versions of safari. Theoretically, 
    in the near future it should be possible to emulate the desired behavior somehow 
    via the new scrollbar-gutter property and that should have greater cross-browser 
    compatability.
  */

  overflow: overlay;

  &:before {
    content: ' ';
    display: inline-block;
    position: absolute;
    height: 100vh;
    width: 100%;
    transform: ${props => props.open ? 'scale(1)' : "scale(0)"};
    transition: transform 1s ease;
    background-image: ${props => props.gradient};
  }

  ${bp.noAnim`
    &:before {
      content: unset;
      display: none;
    }
  `} 
`;

const Skills = () => {
  const skillctx = useActiveSkillContext();
  const {currentSkill, open} = skillctx;
  const {gradient} = currentSkill;

  return (
    <SectionWrapper gradient={gradient} open={open}>
      <h1 className="title title--skills">  
        <span aria-hidden="true">&#060;</span>
        <span>{open ? currentSkill.skillName : 'Skills'}</span> 
        <span aria-hidden="true">/&#062;</span>
      </h1>
   
    { open
    ? <SkillDetail />
    : <Carousel />
    }
    
    </SectionWrapper>
  );
};

export default Skills;