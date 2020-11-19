import React from 'react';

class Typewriter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charIndex: 0,
      textArrayIndex: 0
    } 
    this.nodeRef = React.createRef();
    this.type = this.type.bind(this);
    this.erase = this.erase.bind(this);
  }

  type = () =>  {
   const node = this.nodeRef.current;
   let {charIndex, textArrayIndex} = this.state;
   let {textArray, typingDelay, newTextDelay} = this.props;

   if(charIndex < textArray[textArrayIndex].length) {
      node.textContent +=  textArray[textArrayIndex].charAt(charIndex);
      this.setState({charIndex: charIndex+1});
      setTimeout(this.type, typingDelay);
    } else {
      setTimeout(this.erase, newTextDelay);
    }
  };

  erase = () => {

    const node = this.nodeRef.current;
    let {charIndex, textArrayIndex} = this.state;
    let {textArray, typingDelay, erasingDelay} = this.props;

    if(charIndex > 0) {
       if(textArrayIndex === textArray.length - 1) {
        return;
       }
       node.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);     
       this.setState({charIndex: charIndex-1});
       setTimeout(this.erase, erasingDelay);
    } else {
        this.setState({textArrayIndex: textArrayIndex + 1});
        setTimeout(this.type, typingDelay + 1100);
      }
  };

  componentDidMount() { 
    document.addEventListener("DOMContentLoaded", () => {
      setTimeout(this.type, this.props.newTextDelay);
    });
  }

  componentWillUnmount() {
    document.removeEventListener("DOMContentLoaded", () => {
      setTimeout(this.type, this.props.newTextDelay);
    });
  }

  render() {
  return (
     <>
        <p ref={this.nodeRef} className={this.props.className}></p>
        <span className="cursor">&nbsp;</span>
        
     </>
   );
}

}

export default Typewriter;