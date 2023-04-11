import React from 'react';
import ReviewInput from './ReviewInput';
import './ReviewList.scss';

const ReviewList = () => {
  return (
    <div className="review-list">
      <ul>
        <li>확인용 댓글</li>
      </ul>
      <ReviewInput />
    </div>
  );
};

export default ReviewList;
