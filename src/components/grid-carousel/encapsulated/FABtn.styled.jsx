import styled from 'styled-components';

const Btn = styled.button`
  height: fit-content;
  border-color: unset;
  outline: none;
  border-style: unset;
  background-color: transparent;
  cursor: pointer;
  z-index: 2500;
`;

const Icon = styled.i`
  font-size: 6rem;
  color: ${props => props.iconColor};
`;

export const FABtn = ({icon, iconColor, show, ...props}) => {
  return (
    show
    ? 
      <Btn {...props} >
        <Icon 
          className={icon} 
          iconColor={iconColor}
        />
      </Btn>  
    : null  
  );
};