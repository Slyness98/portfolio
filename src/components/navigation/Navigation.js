import React, { useEffect } from 'react';
import {ReactComponent as Logo} from '../../assets/images/lyness.svg';
import { ternary } from '../../assets/utilities';
import MobileNavigation from './mobile/MobileNav.js';
import DesktopNavigation from './desktop/DesktopNav.js';
import { usePlatformContext, usePlatformUpdateContext } from '../../contexts/PlatformContext';

const Navigation = () => {
  const platform = usePlatformContext();
  const detectPlatform = usePlatformUpdateContext();

  useEffect(() => {
    window.addEventListener("load", detectPlatform);
    window.addEventListener("resize", detectPlatform);

    return () => {	
      window.removeEventListener("load", detectPlatform);
      window.removeEventListener("resize", detectPlatform);
    }
  }, [detectPlatform, platform]);
  
  return (
    <header className={ ternary(platform, true, 'headContainer', 'fullWindow') }>
      { ternary( platform, true, <Logo className="logo"/>, null ) }
      { ternary( platform, true, <MobileNavigation />, <DesktopNavigation />) }
    </header>
  );
};

export default Navigation;