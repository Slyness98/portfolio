import React, {Component} from 'react';
import MobileNavigation from './mobile/mobileNav.js';
import DesktopNavigation from './desktop/desktopNav.js';

class Navigation extends Component {
constructor(props){
	super(props);
	this.state = {position: 'left'} /*position is hardcoded for now. It will be updated in the near future via this.setState() 
										when drag and drop behavior has been developed. The navbar will be able to be D&Ded 
										  to top/bottom, left/right of the window and will snap to the perimeter. This will
								only apply to the <DesktopNavigation /> component. <MobileNavigation /> has its own layout scheme. */
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