import React from 'react';
import { PlusCircle } from 'react-feather';
import './RecommendItem.scss';

const RecommendItem = () => {
  return (
    <div className="recommend-item">
      <div className="recommend-border-font">함께 필요한 제품</div>
      <div className="recommend-item">
        <div className="recommend-item-img">img</div>
        <PlusCircle className="plus-icon" />
      </div>
    </div>
  );
};

export default RecommendItem;
