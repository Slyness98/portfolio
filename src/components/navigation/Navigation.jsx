import React, { useEffect } from 'react';
import { ternary } from '../../assets/utilities';
import MobileNavigation from './mobile/MobileNav';
import DesktopNavigation from './desktop/DesktopNav';
import { usePlatformContext, usePlatformUpdateContext } from '../../contexts/Platform.context';


const Navigation = () => {
  const platform = usePlatformContext();
  const detectPlatform = usePlatformUpdateContext();
  let screenWidth = window.innerWidth;

  useEffect(() => {
    window.addEventListener("load", detectPlatform);
    window.addEventListener("resize", detectPlatform);
    return () => {	
      window.removeEventListener("load", detectPlatform);
      window.removeEventListener("resize", detectPlatform);
    }
  }, [detectPlatform, platform, screenWidth]);
  
  return (
    <header>
      { ternary( platform, true, <MobileNavigation />, <DesktopNavigation />) }
    </header>
  );
};

export default Navigation;