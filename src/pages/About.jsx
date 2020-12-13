import React from 'react';
import ScrollPageContainer from '../components/containers/scroll/scrollPageContainer';
import ScrollPageBlock from '../components/containers/scroll/scrollPageBlock';
import WithScrollAnim from '../components/containers/withScrollAnim/WithScrollAnim';
import {FilterBox} from '../components/containers/filterbox/filterbox.styled';
import Typewriter  from '../components/typewriter/Typewriter';
const About = () => {
 return (
   <>
  <main className="section-about"> 
    <h1 className="title">&#060;About Me /&#062;</h1>

    <ScrollPageContainer>
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
        {/* <div className="panel panel--1"></div>
        <WithScrollAnim threshold="0.3">
        <div className="panel panel--2"></div>
        </WithScrollAnim>
        <WithScrollAnim threshold="0.4">
        <div className="panel panel--3"></div>
        </WithScrollAnim>
        <WithScrollAnim threshold="0.5">
        <div className="panel panel--4"></div>
        </WithScrollAnim> */}
      <FilterBox 
        shadow="90px"
        filter="brightness(1.5)"
      >   
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Purus gravida quis blandit turpis cursus in. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. </p>
      </FilterBox>
      </ScrollPageBlock>
  
      <ScrollPageBlock className="section__block section__block--3"></ScrollPageBlock>
      <ScrollPageBlock className="section__block section__block--4">
        <div className="panel panel--1"></div>
        <div className="panel panel--2"></div>
        <div className="panel panel--3"></div>
        <div className="panel panel--4"></div>
        {/* <div className="panel panel--4"></div> */}
      </ScrollPageBlock>
    
    </ScrollPageContainer>
  </main>
  </>
  );
};

export default About;