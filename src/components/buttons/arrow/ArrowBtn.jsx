import React from 'react';

const ArrowBtn = ({ onClick, ...props }) => {
  return (
    <button onClick={(e) => onClick(e)} className="toggleArrow" {...props}>
      <span className="toggleArrow--iconChevron"/>
    </button>
  )
}
export default ArrowBtn;