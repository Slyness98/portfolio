import React, {useEffect} from 'react';
import {changeDocumentTitle} from './assets/utilities';

import Navigation from './components/navigation/Navigation';

import Home from './pages/Home';
import Gallery from './pages/gallery/Gallery';
import Skills from './pages/Skills';
import About from './pages/About';
import Contact from './pages/Contact';

import { PlatformProvider } from './contexts/Platform.context'; 
import { AccordionGradientProvider } from './contexts/AccordionGradient.context'; 
import {ActiveSkillProvider} from './contexts/ActiveSkill.context';

const App = () => {
  const pathname = window.location.pathname;
  
  useEffect(() => {
    changeDocumentTitle();
  }, [pathname])

	return (
	 <div className="App">
     <PlatformProvider>
       <Navigation />	
     
     {
       {
        '/': <Home />,
        '/gallery': <Gallery />,
        '/skills':  <ActiveSkillProvider>
                      <Skills />
                    </ActiveSkillProvider>,
        '/about': <AccordionGradientProvider>
                    <About />
                  </AccordionGradientProvider>,
        '/contact': <Contact />
       }[window.location.pathname] || <Home />
     } 
     </PlatformProvider>
	 </div>
  );
};

export default App;
