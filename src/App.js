import React, { useEffect, useState } from 'react';
import Navigation from './components/navigation/Navigation';

import Home from './pages/Home';

import { PlatformProvider } from './contexts/PlatformContext'; 
import { useRoutes } from "hookrouter";
import routes from './router';

const App = () => {
	return (
	 <div className="App">
     <PlatformProvider>
       <Navigation />	
     </PlatformProvider>
     { useRoutes(routes) || <Home /> }
	 </div>
  );
};

export default App;
