import React from 'react';
// import { Radio } from 'react-feather';
import './FilterBox.scss';

const FilterBox = props => {
  return (
    <div className="filter-box">
      <div className="border-Box">
        <label>
          <input type="radio" name="contect" value="hight" />
          <span>높은가격순</span>
        </label>

        <label>
          <input type="radio" name="contect" value="low" />
          <span>낮은가격순</span>
        </label>
      </div>
    </div>
  );
};

export default FilterBox;
