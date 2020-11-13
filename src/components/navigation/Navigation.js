import React from 'react';
import MobileNavigation from './mobile/MobileNav.js';
import DesktopNavigation from './desktop/DesktopNav.js';

const Navigation = ({ platform }) => {

  return (
   platform === 'mobile'
	 ? <MobileNavigation />
	 : <DesktopNavigation />
  );
}

export default Navigation;