import React from 'react';
import Navigation from './components/navigation/Navigation';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Skills from './pages/Skills';
import About from './pages/About';
import Contact from './pages/Contact';

import { PlatformProvider } from './contexts/PlatformContext'; 
import { AccordionGradientProvider } from './contexts/AccordionGradientContext'; 


const App = () => {
  React.useEffect(() => {
    var docWidth = window.outerWidth;

    [].forEach.call(
      document.querySelectorAll('*'),
      function(el) {
        if (el.offsetWidth > docWidth) {
          console.log(el);
        }
      }
    );
  },[]);

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
