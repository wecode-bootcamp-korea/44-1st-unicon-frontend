import React, { useState } from 'react';
import { Star } from 'react-feather';
import './StarRating.scss';

const StarRating = ({ rating, setRating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= rating ? 'on' : 'off'}
            onClick={() => setRating(index)}
          >
            <Star className="star" />
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
