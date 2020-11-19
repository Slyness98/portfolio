import { render } from '@testing-library/react';
import React from 'react';

const CtaButton = ({className, content}) => {
  return(
    <button className={className} content={content}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}

export default CtaButton;