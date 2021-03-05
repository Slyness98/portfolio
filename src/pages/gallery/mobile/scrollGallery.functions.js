export const toggleProjectBlock = function (boolArr, setActiveItem, i) {
  let arr = boolArr.slice(); //copy our state
  arr[i] = !arr[i];
  let video = document.querySelector(`.projectBlock--${i}`).children[0].children[3].children[0];
  let cubeContainer = document.querySelector(`.projectBlock--${i}`).children[0].classList;
  let blockClasses = document.querySelector(`.projectBlock--${i}`).classList; 
  switch(arr[i].valueOf()) {
    case true:
      blockClasses.add("activeFlip");
      video.focus();
      video.play();
    break;         
    
    case false:
    default:
      if(blockClasses.contains("vidFS")) {
        blockClasses.remove("vidFS");
        cubeContainer.remove("vidFS");
      }
      blockClasses.remove("activeFlip");
      video.pause();
  }
  setActiveItem(arr); 
}

export const toggleFullScreen = (i) => {
  let video = document.querySelector(`.projectBlock--${i}`).children[0].children[3].children[0];
  let cubeContainer = document.querySelector(`.projectBlock--${i}`).children[0];
  let projBlock = document.querySelector(`.projectBlock--${i}`);
  
  switch(window.matchMedia("screen and (max-device-width: 899px)").matches) {
    case false:
    if(projBlock.classList.contains("vidFS")) {
      projBlock.classList.remove("vidFS");
      cubeContainer.classList.remove("vidFS");
    } else {
      projBlock.classList.add("vidFS");
      cubeContainer.classList.add("vidFS");
    }
    break;  
	
	case true:
    default:
    video.requestFullscreen();
  }    
}