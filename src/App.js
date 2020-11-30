import React from 'react';
import Navigation from './components/navigation/Navigation';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Skills from './pages/Skills';
import About from './pages/About';
import Contact from './pages/Contact';

import { PlatformProvider } from './contexts/PlatformContext'; 

const App = () => {
	return (
	 <div className="App">
     <PlatformProvider>
       <Navigation />	
     </PlatformProvider>
     {
       {
        '/': <Home />,
        '/gallery': <Gallery />,
        '/skills': <Skills />,
        '/about': <About />,
        '/contact': <Contact />
       }[window.location.pathname] || <Home />
     } 

	 </div>
  );
};

export default App;
