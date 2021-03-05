import React from 'react';

const CtaButton = ({className, content, href}) => {
  return(
    <a className={className} content={content} href={href}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </a>
  );
}

export default CtaButton;