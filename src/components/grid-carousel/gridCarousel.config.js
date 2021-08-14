export const navControlConfig = {
  arrows: {
    display: true,
    arrowA: {
      icon: 'fas fa-angle-left',
      iconColor: 'white',
      tabIndex: 1
    },
    arrowB: {
      icon: 'fas fa-angle-right',
      iconColor: 'white',
      tabIndex: 1
    },
  },
  dots: {
     display: true,
     size: "2rem",
     borderColor: "white",
     color: "#333",
     activeColor: "darkturquoise"
    //  tabIndex: 1
  },
  keyboard: {
    decrementalKeys: ['ArrowLeft', 'ArrowDown', 'KeyA', 'KeyS'],
    incrementalKeys: ['ArrowRight', 'ArrowUp', 'KeyD', 'KeyW']
  }
};

export const maxItemsPerPageByBp = {
  "27.5em": 6,
  "56.25em": 7,
  "87.5em": 8
};