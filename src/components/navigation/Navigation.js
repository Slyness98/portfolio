import React, {Component} from 'react';
import MobileNavigation from './mobile/mobileNav.js';
import DesktopNavigation from './desktop/desktopNav.js';

class Navigation extends Component {
constructor(props){
	super(props);
	
}


render() {
  return (
   this.props.platform === 'mobile'
	 ? <MobileNavigation />
	 : <DesktopNavigation />
  );
 }
}

export default Navigation;