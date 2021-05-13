// import {useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: inline-flex;
  width: 100%;
  position: absolute;
  /* height: 100%; */
  transform: translateY(26vh);
  z-index: -2000;
  align-items: flex-end;
`;

const DotList = styled.ul`
  width: 50%;
  margin: 0 auto;
  list-style: none;
  display: inline-flex;
  justify-content: space-evenly;
`;

const Dot = styled.li`
  font-size: 4rem;
  color: white;
  border: inset 1px #000;
`;

const Btn = styled.button`
  height: fit-content;
  border-color: unset;
  outline: none;
  border-style: unset;
  background-color: transparent;
  cursor: pointer;
  font-size: 4rem;
  color: white;
  border: inset 1px #000;
`;

export const PageDots = ({numPages, currentPage, updatePage}) => {
  const arr = Array.from(Array(numPages),(x,i)=>i + 1);  //supplement array values from given integer; i.e numPages = 5 => [1,2,3,4,5]. Notice this array is 1 based, just to better align with the fact we're dealing with page numbers. For each one, produce a page dot
 
  return(
    <Container >
      <DotList>
        {
          arr.map((dot, i) => {
            i+=1;
            return (
              <Dot key={`dot${i}`}>
                <Btn onClick={() => updatePage(i)}>
                  ○
                </Btn>
              </Dot>
            )
          })
        }
      </DotList>
    </Container>
  );
};