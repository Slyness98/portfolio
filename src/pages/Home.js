import React, {useEffect, useCallback} from 'react';

import Typewriter from '../components/typewriter/Typewriter.jsx';

class Letter{
  constructor(className, letter) {
	this.node = document.createElement("SPAN");
	this.node.class = this.node.setAttribute("class", className);
	this.node.innerHTML = letter;

	if(!letter || typeof letter !== "string"|| letter === (undefined || null)) {
		this.node.innerHTML = " ";
	}
  }
}

const Home = () => {
	
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
	  <React.Fragment>
		<div id='stars'></div>
		<div id='stars2'></div>
		<div id='stars3'></div>

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
				// textArray = {[" UI/UX Designer", " Full Stack Web Developer"]}

			    textArray = {[" React.js Specialist", " UI/UX Designer", " Enthusiastic API Consumer", " SASS / CSS Nerd", " PHP Dabbler", " Node & Express.js Engineer", " Full Stack Web Developer"]}
			    typingDelay = {125}
			    erasingDelay = {100}
			    newTextDelay = {1000}
			  />
			</div>
		  
		  </div>
        </div>
	  </React.Fragment>
	);
}

export default Home;