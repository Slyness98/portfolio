import React from 'react';
import Navigation from './components/navigation/Navigation';

import Home from './pages/Home';
import Gallery from './pages/gallery/Gallery';
import Skills from './pages/Skills';
import About from './pages/About';
import Contact from './pages/Contact';

import { PlatformProvider } from './contexts/Platform.context'; 
import { AccordionGradientProvider } from './contexts/AccordionGradient.context'; 


const App = () => {
	return (
	 <div className="App">
     <PlatformProvider>
       <Navigation />	
     
     {
       {
        '/': <Home />,
        '/gallery': <Gallery />,
        '/skills': <Skills />,
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
