import React, {useCallback, useEffect} from 'react';

import Letter from './letter';
import Typewriter from '../typewriter/Typewriter';
import CtaButton from '../cta-button/ctaButton';
const Banner = () => {

  const instantiateLetter = (className, content) => {
    let letter;
    content === " "
      ? letter = new Letter(className, '&nbsp;')
      : letter = new Letter(className, content);
    return letter;
  }
  
  const wrapSpanAndInject = useCallback((arr) => {
        arr.forEach((splitWord, idx) => {
            let count = 0;
            while(splitWord.length > count) {
              let injectHere = document.getElementsByClassName(`banner__text__p--${idx+1}`)[0];  
              let injectedEl = instantiateLetter("banner__text__p__letter", splitWord[count]);   
              injectHere.appendChild(injectedEl.node);
              count++;
            };
        });
  }, []);
  
  
  useEffect(() => {
      const content = ["Salutations!", "My name is", "Seth Lyness.", "I'm a"];
      wrapSpanAndInject(content);
  }, [wrapSpanAndInject]);
    
  return (
    <div className="banner__container">
        <div className="banner__text">	
          <p className="banner__text__p banner__text__p--1"/> 
        
          <div className="banner__block banner__block--1">
              <p className="banner__text__p banner__text__p--2"/>   
              <p className="banner__text__p banner__text__p--3"/> 
          </div> 
        
          <div className="banner__block banner__block--2">
              <p className="banner__text__p banner__text__p--4"/> 
              <Typewriter 
                className = {"typewriter-text"}  
                textArray = {[
                  " React.JS Specialist", 
                  " UI/UX Designer", 
                  " API Nerd", 
                  " SASS / CSS Enthusiast", 
                  " Proficient PHP Practitioner", 
                  " Node & Express.JS Engineer", 
                  " Full Stack Web Developer"
                ]}
                typingDelay = {80}
                erasingDelay = {10}
                newTextDelay = {1250}
              />
          </div>

          <div className="banner__block banner__block--3">
              <CtaButton className={"cta cta--1"} content="View Gallery" />
              <CtaButton className={"cta cta--2"} content="Make Contact" />
          </div>
        </div>
    </div>
  );
};

export default Banner;