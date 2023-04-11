import React from 'react';
import ReviewList from './';
import './ReviewBox.scss';

const ReviewBox = () => {
  return (
    <div className="review-box">
      <div className="title-box">
        <p>상품평을 작성해주세요.</p>
        <p>
          최근 구매한 제품이 마음에 드시나요? 다른 사람들과 구매 경험을
          공유해보세요!
        </p>
        <ReviewList />
      </div>
    </div>
  );
};

export default ReviewBox;
