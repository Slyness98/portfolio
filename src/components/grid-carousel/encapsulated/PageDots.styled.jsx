import styled from 'styled-components';

const Container = styled.div`
  display: inline-flex;
  width: 100%;
  position: absolute;
  transform: translateY(26vh);
  z-index: -2000;
  align-items: flex-end;
`;

const DotList = styled.span`
  width: 50%;
  margin: 0 auto;
  display: inline-flex;
  justify-content: space-evenly;

  & button:nth-child(${props => props.$currentDot}) {
    color: cyan;
  }
`;

const Dot = styled.button`
  cursor: pointer;
  color: white;
  outline: none;                      
  height: ${props => props.$dots.size || '20px'};
  width: ${props => props.$dots.size || '20px'};
  background-color: ${props => props.$dots.color || 'white'};
  border: 1px solid ${props => props.$dots.borderColor || 'white'};
  border-radius: 50%;
  display: inline-block;
  box-shadow: ${props => props.$dots.borderColor || 'white'} 0px 0px 18px 0px;
  
  &:nth-of-type(${props => props.$currentDot}) {
    background-color: ${props => props.$dots.activeColor || 'darkturquoise'};
    box-shadow: ${props => props.$dots.activeColor || 'darkturquoise'} 0px 0px 18px 0px;
    border: none;
    transition: all .6s ease;
  }
`;

export const PageDots = ({numPages, currentPage, show, updatePage , ...dots}) => {
  const arr = Array.from(Array(numPages),(x,i)=>i + 1);  //supplement array values from given integer; i.e numPages = 5 => [1,2,3,4,5]. Notice this array is 1 based, just to better align with the fact we're dealing with page numbers. For each one, produce a page dot
  return(
    show
    ?  <Container >
        <DotList>
          {
            arr.map((dot, i) => {
              i+=1;
              return (
                <Dot 
                  key={`dot${i}`} 
                  onClick={() => updatePage(i)} 
                  $currentDot={currentPage}
                  $dots={{...dots}}
                />
              )
            })
          }
        </DotList>
      </Container>
    : null
  );
};