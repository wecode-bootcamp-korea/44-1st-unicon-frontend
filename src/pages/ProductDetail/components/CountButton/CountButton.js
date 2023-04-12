import React, { useState } from 'react';
import './CountButton.scss';

const CountButton = ({ num, setNum }) => {
  const decrease = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  const increase = () => {
    setNum(num + 1);
  };

  return (
    <div className="count-button">
      <button onClick={decrease} className="button">
        &nbsp;-&nbsp;
      </button>
      <p className="num">{num}</p>
      <button onClick={increase} className="button">
        &nbsp;+&nbsp;
      </button>
    </div>
  );
};

export default CountButton;
