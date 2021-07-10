import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  width: ${props => props.gridWidth || "100%"};
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