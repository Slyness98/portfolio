// import React, {Component} from 'react';
import React, { useState } from 'react';
import Navigation from './components/navigation/Navigation';
import Home from './pages/Home';
import { PlatformProvider } from './contexts/PlatformContext'; 



const App = () => {
  const [route, setRoute] = useState('home');
  
	return (
	 <div className="App">
     <PlatformProvider>
       <Navigation />	
     </PlatformProvider>
     {
       {
        'home': <Home />

       }[route] || <Home />
     }

	 </div>
  );
};

export default App;
