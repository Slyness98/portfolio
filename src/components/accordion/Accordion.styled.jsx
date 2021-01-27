import React, {useState, useEffect} from 'react';
import Data from './accordion.data';
import FAIcon from '../icon/FAIcon';
import styled from 'styled-components';
import { bp } from '../../assets/utilities';
import { useAccordionGradientUpdateContext } from '../../contexts/AccordionGradient.context';

const AccordionSection = styled.section`
  width: 100%;
  height: 130vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${bp.standardland`
     height: 175vh;
  `}
  transition: height .5s ease;
`;

const AccordionItem = styled.div`
  width: 100%;
  min-height: ${85/Data.length}%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0% 3%;

  ${bp.tabmd`
    min-height: ${70/Data.length}%;
  `}
`;

const ItemHeader = styled.button`
  padding: 4px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 3.5rem;
  font-family: 'gruppo';
  transition: all .5s ease;

  ${bp.phonesm`
    font-size: 4rem;
  `}

  ${bp.default`
    font-size: 6rem;
  `}
`;

const Title = styled.span`
  display: flex;
  flex-direction: column;
  
  &::after {
    content: " ";
    display: inline-block;
    width: ${props => props.$isUnderlined ? "100%" : "0"};
    transition: width 1s ease;
    border-top: 2px solid whitesmoke;
    border-top: 2px solid ${props => {switch(props.$currentIdx) {
           case 0: return "#ee5725"; 
           case 1: return "cyan"; 
           case 2: return "limegreen"; 
           case 3: return "red"; 
           default: return "white";
        }}} 
  }
`

const CustomIcon = styled(FAIcon).attrs(() => ({
  className: "fa fa-plus"
}))`
  height: auto;
  transition: all .5s ease-out;
  ${props => props.$isRotated ? 'transform: rotate(45deg);' : 'transform: rotate(0deg);'}
  color: ${ props => props.$isRotated 
      ? 'red' 
      : () => {
         switch(props.$currentIdx) {
           case 0: return "#ee5725"; 
           case 1: return "cyan"; 
           case 2: return "limegreen"; 
           case 3: return "darkgrey"; 
           case -1:
           default: return "cyan"
        } 
  }};
`

const ContentWrapper = styled.ul`
  ${props => props.$isOpen ? 'color: white;' : 'color: transparent;'}
  ${props => props.$isOpen ? 'height: 100%;' : 'height: 0;'}
  margin-top: 1rem;
  font-size: 2rem; 
  font-family: 'gruppo';
  transition: all 2s ease; 
  overflow: hidden;
  display: grid;
  grid-column-gap: 8rem;
  grid-row-gap: 2rem;
  grid-template-columns: 1fr;

  ${bp.default`
    grid-template-columns: 1fr 1fr;
  `}
  
  ${bp.standardland`
    ${props => props.$isOpen ? 'height: 50vh;' : 'height: 0;'}
  `}

  ${bp.phonelg`
    ${props => props.$isOpen ? 'height: 40vh;' : 'height: 0;'}
    margin-top: 2rem;
  `}

  & > li:nth-child(even) {
   ${bp.standardland`
      margin-left: 45%;
   `}

   ${bp.phonelg`
      margin-left: 10%;
   `}
  }
`;

const Content = styled.li`
  margin-left: 10%;
  font-size: 3.25rem;
  list-style-position: outside;
  text-align: center;

  ${bp.standardland`
    margin-top: 1.5rem;
    padding: 0 7%;
  `}

  ${bp.phonelg`
    font-size: 4rem;
  `}
`;

export const Accordion = () => {
  const [activeItem, setActiveItem] = useState(Data.map((item) => {return item.active})); //get an array of all boolean 'active' properties. All default to false
  const [currentIdx, setCurrentIdx] = useState(-1);
  const updateGradient =  useAccordionGradientUpdateContext();
  
  const toggle = (idx) => {
    let arr = activeItem.slice(); //copy our state
    let newVal = !arr[idx]; //get opposite of current accordion item active property state
    let allButIdx = activeItem.slice(activeItem[idx]); //grab a copy of the original state, less our current accordion item index
    arr = allButIdx.map(() => {return false}); //set all but the one we clicked to false
    arr[idx] = newVal; //set the one we clicked to opposite value
    function handleOpenMenu(val) {return val === false ? arr.push(false) : null};//if what we click is true, it will properly set the !bang value. If it's false, the value pops off, so we need to supplement it with a false value added to the array copy
    handleOpenMenu(newVal); //figure out if newVal is false and if it is, supplement its value to the copy array
    
    function getIdxForGradient(bool, idx) { //gain reference to idx clicked
      return bool === false 
        ? setCurrentIdx(-1) //or if already open set to -1 to represent nothing being expanded
        : setCurrentIdx(idx)
    };
    getIdxForGradient(newVal, idx);
    
    setActiveItem(arr); //set our new state with our strung together copy
  }

  useEffect(() => {
    updateGradient(currentIdx);
  }, [currentIdx, updateGradient])

  return(
    <AccordionSection>
      { Data.map((item, index) => {
        return(
          <AccordionItem key={item.id}>
           
            <ItemHeader onClick={() => toggle(index)}>
                <Title 
                  $isUnderlined={activeItem[index]} 
                  $currentIdx={currentIdx}
                > 
                  {item.header}
                </Title> 
                <CustomIcon 
                  $isRotated={activeItem[index]} 
                  $currentIdx={currentIdx}
                />
            </ItemHeader>
            
            <ContentWrapper $isOpen={activeItem[index]}>
              {item.content.map((item, idx) => {
                return (
                <Content key={`content-${idx}`} >
                  {item}
                </Content>
                );
              })}
            </ContentWrapper>
          </AccordionItem>
        );
       })    
      }
    </AccordionSection>
  );
} 
