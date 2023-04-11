import React from 'react';
import './ReviewInput.scss';

const ReviewInput = () => {
  const uploadReview = () => {};
  return (
    <div className="review-input">
      <input
        onChange={e => e.target.value}
        className="input"
        type="text"
        placeholder="WEKEA 상품은 만족스러우셨나요?"
      />
      <button
        className="btn"
        onClick={() => {
          uploadReview();
        }}
      >
        상품 리뷰 올리기
      </button>
    </div>
  );
};

export default ReviewInput;
