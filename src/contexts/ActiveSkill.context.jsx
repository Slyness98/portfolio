import {useState, createContext, useContext} from 'react';
import Data from '../components/grid-carousel/carouselChildren.data';
const ActiveSkillContext = createContext({currentSkill: Data[0], open: false});

export function useActiveSkillContext() {
  return useContext(ActiveSkillContext);
};

export function ActiveSkillProvider({children}) {
  const changeActiveSkill = (val) => {
    setActiveSkill(prev => ({
        ...prev,
        currentSkill: val
    }))
  };

  const toggleView = () => {
    setActiveSkill(prev => ({
      ...prev,
      open: !prev.open
      // currentSkill: {...prev.currentSkill, gradient: defaultGradient}
    }))
  }

  const [activeSkill, setActiveSkill] = useState({currentSkill: Data[0], open: false, toggleView: toggleView, setActiveSkill: changeActiveSkill});

  return (
    <ActiveSkillContext.Provider value={activeSkill}>
      {children}
    </ActiveSkillContext.Provider>
  );
}
