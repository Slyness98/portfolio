import styled from 'styled-components';

const Btn = styled.button`
  height: fit-content;
  border-color: unset;
  outline: none;
  border-style: unset;
  background-color: transparent;
  cursor: pointer;
`;

const Icon = styled.i`
  font-size: 6rem;
  color: ${props => props.iconcolor};
`;

export const FABtn = ({icon, iconcolor, ...props}) => {
  return (
    <Btn {...props} >
      <Icon 
        className={icon} 
        iconcolor={iconcolor}
      />
    </Btn>
  );
};