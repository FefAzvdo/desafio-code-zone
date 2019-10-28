import React from 'react';

const LeftArrow = (props) => {
  return (
    <div className="backArrow" onClick={props.goToPrevSlide}>
      {"<"}
    </div>
  );
}

export default LeftArrow;