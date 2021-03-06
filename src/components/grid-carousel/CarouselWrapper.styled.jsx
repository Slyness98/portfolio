import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  /* height: 50vh; */
  width: ${props => props.gridWidth || "100%"};
  /* transform: translateY(10vh); */
  margin: 0 auto;
  overflow: ${props => props.overflowBehavior};
  &:first-child, &:last-child {
    align-items: center;
  }
`

export const CarouselWrapper = ({children, ...props}) => {
  return (
   <Wrapper {...props}>
     {children}
   </Wrapper>
  )
}