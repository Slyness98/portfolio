import React, { useContext, useState, useEffect } from 'react';
import { useDebounce } from '../assets/custom-hooks/hooks';
const PlatformContext = React.createContext();
const PlatformUpdateContext = React.createContext();

//two custom hooks in order to be able to both consume and update hooks in a functional component without the inherent nested blocks that come with context API usage
export function usePlatformContext() {
    return useContext(PlatformContext);
};

export function usePlatformUpdateContext() {
    return useContext(PlatformUpdateContext);
};

//the actual context provider, running our detectMobile function with a custom useDebounce hook. This frees up any consumer(Navigation.js) to just worry about when to execute it and not worry about thousands of additional event listeners over the course of a window resize
export function PlatformProvider({ children }) {
  const [platform, setPlatform] = useState();
  
  function detectMobile() {
    let mql = window.matchMedia("(max-width: 899px)");
    if(mql.matches) {
      setPlatform(true);
    } else {
      setPlatform(false);
    }
  };

  useEffect(() => {
    if(platform === undefined) {
      detectMobile();
    }
  }, [platform])

  const debouncedToggle = useDebounce(detectMobile, 250);

  return (
      <PlatformContext.Provider value={platform}>
        <PlatformUpdateContext.Provider value={debouncedToggle}>
          {children}
        </PlatformUpdateContext.Provider>
      </PlatformContext.Provider>
  );
};