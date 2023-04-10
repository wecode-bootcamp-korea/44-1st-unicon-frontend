import React from 'react';
import './FilterBox.scss';

const FilterBox = () => {
  return (
    <div className="filter-box">
      <div className="border-box">
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
