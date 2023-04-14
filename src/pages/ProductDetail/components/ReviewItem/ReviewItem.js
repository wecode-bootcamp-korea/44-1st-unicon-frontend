import React, { useState, useEffect } from 'react';
import { APIS } from '../../../../config';
import StarRating from '../StarRating/StarRating';
import { Trash2 } from 'react-feather';
import './ReviewItem.scss';

const ReviewItem = ({ detailPageId }) => {
  const [inputValue, setInputValue] = useState('');
  const [reviewValue, setReviewValue] = useState([]);
  const [rating, setRating] = useState(0);

  const token = localStorage.getItem('token');

  useEffect(() => {
    getReviewList();
  }, []);

  let dateValue = new Intl.DateTimeFormat('kr').format(new Date());

  const getReviewList = () => {
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
  };

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
        rating: rating,
        productId: detailPageId,
      }),
    }).then(response => {
      if (response.ok) {
        getReviewList();
      } else {
        alert('구매기록이 없으면 리뷰를 다실 수 없습니다!');
      }
    });

    setInputValue('');
  };

  const addToEnter = e => {
    if (e.keycode === 13) {
      e.preventDefault();
      addReview();
    }
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  const deleteReview = id => {
    fetch(`${APIS.review}${detailPageId}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
    }).then(response => {
      if (response.ok) {
        if (window.confirm('정말 삭제하시겠습니까?')) {
          getReviewList();
        }
      } else {
        alert('작성자가 아니면 삭제할 수 없습니다!');
      }
    });
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

      <div className="total-scroll">
        <div className="review-list">
          <p className="review-title">작성된 리뷰*</p>
          <div className="review-wrap">
            <ul className="review-ul">
              {reviewValue.length > 0 &&
                reviewValue.map(({ id, title, content, rating }) => {
                  return (
                    <div key={id} className="list-wrap">
                      <div className="list-nav">
                        <p>★ {rating}</p>
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

        <form className="review-form" onSubmit={onSubmit}>
          <div className="review-box">
            <StarRating rating={rating} setRating={setRating} />
            <p className="review-title">상품평*</p>
            <input
              onKeyDown={addToEnter}
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
        </form>
      </div>
    </div>
  );
};

export default ReviewItem;
