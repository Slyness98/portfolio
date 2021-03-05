import React from 'react';
import styled from 'styled-components';
import FAIcon from '../../../../components/icon/FAIcon';
const Button = styled.button`
  height: fit-content;
  border-color: unset;
  outline: none;
  border-style: unset;
  font-family: gruppo, 'ui-serif', 'Courier New', Courier, monospace;
  color: white;
  text-decoration: none;
  font-weight: 300;
  letter-spacing: 3px;
  font-size: 3rem;
  justify-self: center;
  align-self: center;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;

const toggle = (i,swappedTitles, setSwappedTitles) => {
    let arr = swappedTitles.slice();
    let newVal = !arr[i];
    arr = arr.map(() => {return false});
    arr.slice(i,i);
    arr[i] = newVal;
    setSwappedTitles(arr);
}
const CPanel = ({i, project, swappedTitles, setSwappedTitles}) => {
  return (
    <div className={`overlay__titleContainer__item--${i} overlay__titleContainer__cPanel`}>
      <a href={project.ghublink} className={"overlay__titleContainer__cPanel__links"}>
        <FAIcon className="fab fa-github"/>
      </a>
      
      <a href={project.link} className={"overlay__titleContainer__cPanel__links"}>
        <FAIcon className="fas fa-link" />
      </a>

      <button className={"overlay__titleContainer__cPanel__links"} onClick={() => toggle(i, swappedTitles, setSwappedTitles)}> 
        <FAIcon className="far fa-arrow-alt-circle-left" />
      </button>
    </div>
  );
}


const ToggleProjectBtn = ({i, project, updateFn, setSwappedTitles, swappedTitles, ...props}) => {
  const newEl = 
    <CPanel 
      i={i}
      project={project}
      swappedTitles={swappedTitles} 
      setSwappedTitles={setSwappedTitles}
    />;
  
  const defaultEl = 
    <Button 
      onClick={() => {
        updateFn(i); 
        toggle(i, swappedTitles, setSwappedTitles)
      }} 
      {...props} 
    >
    {project.title}
    </Button>;
  return(
    <>
     {
       swappedTitles[i]
       ? newEl
       : defaultEl
      
     }
    </>
  )
};
export default ToggleProjectBtn;