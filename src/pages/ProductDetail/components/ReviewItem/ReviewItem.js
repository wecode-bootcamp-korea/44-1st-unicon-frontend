import React, { useState, useEffect } from 'react';
import { APIS } from '../../../../config';
import StarRating from '../StarRating/StarRating';
import { Trash2 } from 'react-feather';
import './ReviewItem.scss';

const ReviewItem = ({ detailPageId }) => {
  const [inputValue, setInputValue] = useState('');
  const [reviewValue, setReviewValue] = useState([]);

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch(`${APIS.review}${detailPageId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(result => {
        setReviewValue(result);
      });
  }, []);

  let dateValue = new Intl.DateTimeFormat('kr').format(new Date());

  const addReview = () => {
    fetch(`${APIS.review}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
      body: JSON.stringify({
        title: dateValue,
        content: inputValue,
        rating: 3,
        productId: detailPageId,
      }),
    })
      .then(response => response.json())
      .then(result => {
        return result;
      });
    setInputValue('');
  };

  const addToEnter = e => {
    if (e.keycode === 13) {
      e.preventDefault();
      addReview();
    }
  };

  const deleteReview = id => {
    setReviewValue(
      reviewValue.filter(review => {
        return review.id !== id;
      })
    );
  };

  return (
    <div className="review-item">
      <div className="title-box">
        <p className="title">상품평을 작성해주세요.</p>
        <p className="content-text">
          최근 구매한 제품이 마음에 드시나요? 다른 사람들과 구매 경험을
          공유해보세요!
        </p>
      </div>
      <div className="review-input">
        <div className="review-box">
          <StarRating />
          <p className="review-title">상품평*</p>
          <input
            onKeyOn={addToEnter}
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            className="input-value"
            type="text"
          />
          <p className="explane-text">
            구매할 때 도움이 되는 정보를 리뷰에 추가해보세요.
          </p>
        </div>

        <button className="btn" onClick={addReview}>
          상품 리뷰 올리기
        </button>
      </div>
      <div className="review-list">
        <p className="review-title">리뷰 리스트*</p>
        <div className="review-wrap">
          <ul className="review-ul">
            {reviewValue?.map(({ id, title, content, rating }) => {
              return (
                <div key={id} className="list-wrap">
                  <div className="list-nav">
                    <p>{rating}</p>
                    <p>{title}</p>
                  </div>
                  <div className="review">
                    <li className="review-text">{content}</li>
                    <Trash2
                      onClick={() => deleteReview(id)}
                      className="trash-icon"
                    />
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
