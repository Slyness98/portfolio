import {keyframes} from 'styled-components';
//=================================================
export const Spin = keyframes`
	0% {
		transform: rotate(0deg) scale(3);
	} 

	100% {
		transform: rotate(360deg) scale(3);
	}
`;
//=================================================
export const Floating = keyframes `
	0% {
		transform: translate(0%, 0%);	
	}
	25% {
		transform: translate(0%, 15%);	
	}	
	50% {
		transform: translate(0%, 5%);	
	}	
	75% {
		transform: translate(0%, 15%);	
	}	
	100% {
		transform: translate(0%, 0%);
	}	
`;
//=================================================
export const FadeOut = keyframes `
  0% { opacity: 1;}
  100% { opacity: 0;}
`;


