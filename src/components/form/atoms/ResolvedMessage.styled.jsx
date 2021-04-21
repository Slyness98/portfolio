import React, {useEffect} from 'react';
import styled from 'styled-components';
import FAIcon from '../../icon/FAIcon';
import {useFormContext} from '../../../contexts/Form.context';
import {bp} from '../../../assets/utilities'

const SubmissionMessage = styled.p`
  color: white;
  font-size: 3.5rem;
  font-weight: 300;
  font-family: 'gruppo', 'Courier New', Courier, monospace;
  width: 100%;
  margin: 3rem auto 0 auto;
  text-align: center;
  /* ${bp.tabmd`
     font-size: 3.5rem;
  `} */
`

const StatusIcon = styled(FAIcon)`
  width: 4rem;
  height: 4rem;
  font-size: 4rem;
  /* color: white; */
  transform: translateY(-50%);
`;

const MessageContainer = styled.div`
  width: 75%;
  display: flex;
  /* display: ${(props) => {return typeof props.$resolutionState === 'boolean' ? 'flex' : 'none'}}; */
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transform: translateY(9%);
  transition: all 1.25s;
  margin: 0 auto;
  padding: 3rem;
  position: relative;

  border: 2px solid ${(props) => {
    switch(props.$resolutionState) {
      case true: return 'limegreen';
      case false: return 'red';
      default: return 'transparent';
    };
  }};

  ${bp.tabmd`
    width: 50%;
  `}
  
  & .success {
    color: limegreen;
  }
  & .fail {
    color: red;
  }
`;
const ResolvedMessage = () => {
  const form = useFormContext();

  useEffect(() => {
    const displayMessage = document.getElementById("submissionDisplayMessage");
    displayMessage.textContent = form.resolutionMessages[0];
  }, [form]);

  useEffect(() => {
    const messageContainer = document.getElementById("messageContainer");
    let timeout;
    switch(form.success) {
      case true: 
      case false: 
        messageContainer.style.height = "20%";
        messageContainer.style.animation = "fadeIn 1.5s forwards";
        timeout = setTimeout(() => {
          messageContainer.style.height = "0%";
          messageContainer.style.animation = "fadeOut 1.5s forwards";
        }, 9500);
        break;

      default:
        messageContainer.style.height = "0%";
        messageContainer.style.animation = "fadeOut 1.5s forwards";
    }

    return(() => {
      clearTimeout(timeout)
      messageContainer.style.animation = "fadeOut 1.5s forwards";
    }
    )
  }, [form])
  
  return(
    <MessageContainer $resolutionState={form.success} id="messageContainer"  className={{
      true: 'success',
      false: 'fail'
    }[form.success] || ''}>  
      <StatusIcon 
        className={{
          true: 'far fa-check-circle success',
          false: 'fa fa-exclamation-circle fail'
        }[form.success] || ''} //need this syntax to account for default case "pending". form.success does not start out as a boolean on the client side, it's a string before a request has been sent; it becomes a boolean after a request is sent and the client recieves a response. More than two states means it can't just be shoved into a ternary as usual
        
      />
      <SubmissionMessage id="submissionDisplayMessage"/>  
    </MessageContainer>
  )
}

export default ResolvedMessage;