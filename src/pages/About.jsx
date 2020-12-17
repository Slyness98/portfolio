import React, {useEffect} from 'react';
import ScrollPageContainer from '../components/containers/scroll/scrollPageContainer';
import ScrollPageBlock from '../components/containers/scroll/scrollPageBlock';
// import WithScrollAnim from '../components/containers/withScrollAnim/WithScrollAnim';
import {FilterBox} from '../components/containers/filterbox/filterbox.styled';
// import Typewriter  from '../components/typewriter/Typewriter';
import { ProfileImage } from '../components/profile-image/profile.styled';
import { LazyScroller } from '../components/lazy-scroller/LazyScroller.styled';
const About = () => {

  useEffect(() => {
    document.getElementById("about").style.scrollBehavior = "smooth";
  }, []);
 return (
   <>
  <main className="section-about" id="about"> 
    <h1 className="title">&#060;About Me /&#062;</h1>

    <ScrollPageContainer>
      <LazyScroller watchNode=".section__block" icon="fa fa-angle-down" pageRootId="about"/>
      <ScrollPageBlock className="section__block section__block--1">
        <FilterBox 
          className="section__filterbox-sc" 
          shadow="90px"
        > 
          <span className="section__filterbox-sc__subtitle">For me, life is mostly...</span>
          <p className="section__filterbox-sc__text">
            <span>Eat.</span>
            <span>Sleep.</span>
            <span>&#060;Code /&#062;</span>
            <span>Repeat.</span>
          </p>
        </FilterBox>
      </ScrollPageBlock>
      
      <ScrollPageBlock className="section__block section__block--2">
        <div className="section__block--2__contentWrapper">
          <ProfileImage src="/images/profile.jpg" />
        </div>
      </ScrollPageBlock>
  
      <ScrollPageBlock className="section__block section__block--3"></ScrollPageBlock>
      <ScrollPageBlock className="section__block section__block--4">
        {/* <div className="panel panel--1"></div>
        <div className="panel panel--2"></div>
        <div className="panel panel--3"></div>
        <div className="panel panel--4"></div> */}
      </ScrollPageBlock>
    
    </ScrollPageContainer>
  </main>
  </>
  );
};

export default About;