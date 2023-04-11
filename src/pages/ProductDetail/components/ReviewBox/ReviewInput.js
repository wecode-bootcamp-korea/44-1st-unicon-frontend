import React, { useState } from 'react';
import './ReviewInput.scss';

const ReviewInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [listData, setListData] = useState([]);

  const addReview = () => {
    return setListData([...listData], inputValue);
  };
  return (
    <div className="review-input">
      <input
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        className="input-value"
        type="text"
        placeholder="WEKEA의 상품은 만족스러우셨나요?"
      />
      <button
        className="btn"
        onClick={() => {
          addReview();
        }}
      >
        상품 리뷰 올리기
      </button>
    </div>
  );
};

export default ReviewInput;
