import React, {useState, useEffect, useContext} from 'react';

const AccordionGradientContext = React.createContext();
const AccordionGradientUpdateContext = React.createContext();

export function useAccordionGradientContext() {
  return useContext(AccordionGradientContext);
} 

export function useAccordionGradientUpdateContext() {
 return useContext(AccordionGradientUpdateContext);
} 

export function AccordionGradientProvider({children}) {
  const [gradient, setGradient] = useState({backgroundColor: "black"});
  const [index, setIndex] = useState(-1);

  function determineGradient(idx) {
    switch(idx) {
      case 0: 
        setGradient({boxShadow: "0 0 6rem 0 rgb(255, 78, 80) inset, 0 0 3rem 0 #f9d423 inset"});
        break;
 
      case 1: 
        setGradient({boxShadow: "inset 0 0 6rem 0 rgb(0, 137, 161)"});
        break;

      case 2: 
        setGradient({boxShadow: "inset 0 0 6rem 0 limegreen"});
        break;
    
      case 3: 
        setGradient({boxShadow: "0 -10px 6rem -5px #7b272c inset"})
        break;

      case -1: 
        setGradient({boxShadow: "inset 0 0 2rem 0 rgb(0, 137, 161)"});
        break;
        
      default:
        break;
    }
  } 

  useEffect(() => {
    determineGradient(index);  
  }, [index]);

  return (
    <AccordionGradientUpdateContext.Provider value={setIndex} >
      <AccordionGradientContext.Provider value={gradient} >
            {children}
      </AccordionGradientContext.Provider>
    </AccordionGradientUpdateContext.Provider >

  )
}