import React from 'react';
import { Plus, Minus } from 'react-feather';
import './CountButton.scss';

const CountButton = ({ num, setNum }) => {
  const decrease = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };

  const increase = () => {
    setNum(num + 1);
  };

  return (
    <div className="count-button">
      <div onClick={decrease} className="button">
        <Minus />
      </div>
      <p className="num">{num}</p>
      <div onClick={increase} className="button">
        <Plus />
      </div>
    </div>
  );
};

export default CountButton;
