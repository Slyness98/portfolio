import React, {useEffect} from 'react';
import ScrollPageContainer from '../components/containers/scroll/scrollPageContainer';
import ScrollPageBlock from '../components/containers/scroll/scrollPageBlock';
// import WithScrollAnim from '../components/containers/withScrollAnim/WithScrollAnim';
import {FilterBox} from '../components/containers/filterbox/filterbox.styled';
// import Typewriter  from '../components/typewriter/Typewriter';
import { ProfileImage } from '../components/profile-image/profile.styled';
import { LazyScroller } from '../components/lazy-scroller/LazyScroller.styled';
import { IconicExcerpt } from '../components/iconicExcerpt/IconicExcerpt.styled';
import { Accordion } from '../components/accordion/Accordion.styled';
import { useAccordionGradientContext } from "../contexts/AccordionGradientContext";

const About = () => {
  const gradient = useAccordionGradientContext();

  useEffect(() => {
    document.getElementById("about").style.scrollBehavior = "smooth";
  }, []);
 return (
   <>
  <main className="section-about" id="about"> 
    <h1 className="title">&#060;About Me /&#062;</h1>

    <ScrollPageContainer>
      <LazyScroller
         watchNode=".section__block" 
         iconDown="fa fa-angle-down"
         iconUp="fa fa-angle-up" 
         pageRootId="about"
         className="lazyScroller"
      />
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
        <div className="section__block__header section__block__header--lines">
          <ProfileImage src="/images/profile.jpg" />
        </div>
        <div className="aboutGrid">
          <div className="aboutGrid__item aboutGrid__item--1">
            <p className="aboutGrid__item__leadText">
              <mark>I</mark> brew my cup of coffee, fire up my laptop, and <mark>spend most mornings</mark> researching
              and <mark>designing a new feature</mark> I'll be focusing on that day. <mark>What tools I do I need?</mark> It depends;
              it's always a new puzzle. But <mark>here's a handful of them</mark> I'm regularly using.
            </p>
          </div> 
          <div className="aboutGrid__item aboutGrid__item--2">
            <IconicExcerpt
              icon="fab fa-react"
              accentColor="cyan"
              heading="React"
              excerpt="Query an API and map its response to a component for dynamic content? Check. Creating custom hooks to debounce expensive event listeners such as 'resize'?...All in a day's work! It's good to be a developer in the age of reusable components."
            />
          </div> 
          <div className="aboutGrid__item aboutGrid__item--3">
            <IconicExcerpt
              icon="fab fa-node"
              accentColor="limegreen"
              heading="Node.js"
              excerpt="JS being my primary language, I naturally turn to this environment for my backend needs. Leveraging Express.js, I write simple REST API endpoints and link it up to components I've built with React in the front end."
            />
          </div> 
          <div className="aboutGrid__item aboutGrid__item--4">
            <IconicExcerpt
              icon="fas fa-database"
              accentColor="#ff4000"
              heading="Databases"
              excerpt="I've had experience with PostgreSQL/pgAdmin as well as Firestore, the no-sql database of Google's Firebase platform. By extension, I'm familiar with rudementary SQL or querying firestore via dispatched redux actions on the client side, depending on what's being used. It may be basic, but hey, I have to query something from somewhere, right?"
            />
          </div> 
          <div className="aboutGrid__item aboutGrid__item--5">
            <IconicExcerpt
              icon="fab fa-sass"
              accentColor="#ff66b3"
              heading="SASS"
              excerpt="Just one of my favorite accomplishments with this library was writing a mixin that generates dynamic media queries based on a string comprised of a predefined base media query. Optionally add available attachments to that string for further conditions. You're really only limited by your creativity with this tool."
            />
          </div>           
        </div>  
      </ScrollPageBlock>
      
      {/* <AccordionGradientProvider> */}
        <ScrollPageBlock className="section__block section__block--3" style={gradient}>
          <div className="section__block__header">
            <p>
              But aside from my life as a developer...
            </p>
          </div>
          <Accordion />
        </ScrollPageBlock>
      {/* </AccordionGradientProvider> */}
    </ScrollPageContainer>
  </main>
  </>
  );
};

export default About;