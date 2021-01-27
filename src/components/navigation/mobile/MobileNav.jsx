import React, {useState} from 'react';
import MainButton from './main-button/MainButton.styled';
import MenuItem from './menu-item/MenuItem.styled';
import Data from './mobileNav.data';

const MobileNavigation = () => {
  const [toggle, setToggle] = useState(false);
  
  function toggleMenu() {
	console.log("toggled!");
	setToggle(prevState => !prevState);
  };
  
  return (
	<nav className="mobileNav">	  	  	  
	  <MainButton expanded={toggle} toggleMenu={toggleMenu}/>
	 	
	  <div id="nav">	
	 	<ul>
		  {
			Data.map((item, i) => {
			  let idx = i+1;
			  return (	
				toggle === false
				  ? null
				  :	<MenuItem 
					  key ={`menuItem-${idx}`}
					  icon={item.icon}
					  num={idx}
					  text={item.text}
					  route={item.route}
					/>
			  );
			})
		  }
	 	</ul>
	  </div>
	</nav>   
  )
}
export default MobileNavigation;

