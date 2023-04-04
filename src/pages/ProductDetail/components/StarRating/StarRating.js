import React, { useState } from 'react';
import { Star } from 'react-feather';
import './StarRating.scss';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
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
