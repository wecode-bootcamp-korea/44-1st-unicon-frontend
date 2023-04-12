import React, { useState } from 'react';
import { Trash2 } from 'react-feather';
import './ReviewWindow.scss';

const ReviewBox = () => {
  const [inputValue, setInputValue] = useState('');
  const [reviewValue, setReviewValue] = useState([]);

  let dateValue = new Intl.DateTimeFormat('kr').format(new Date());

  const addReview = () => {
    return setReviewValue([
      ...reviewValue,
      {
        id: dateValue,
        text: inputValue,
      },
    ]);
    setInputValue('');
  };

  // const enterKeyCode = e => {
  //   if (e.keycode === 13) {
  //     e.preventDefault();
  //     addReview();
  //   }
  // };

  const removeReview = key => {
    // console.log('대기하세요 아직 삭제 기능없어ㅓㅓ');
    setReviewValue(
      reviewValue.filter(() => {
        key === key;
      })
    );
  };

  console.log('inputValue:', inputValue);
  console.log('reviewValue:', reviewValue);

  return (
    <div className="review-window">
      <div className="title-box">
        <p className="title">상품평을 작성해주세요.</p>
        <p className="content-text">
          최근 구매한 제품이 마음에 드시나요? 다른 사람들과 구매 경험을
          공유해보세요!
        </p>
      </div>
      <div className="review-input">
        <div className="review-box">
          <p className="review-title">상품평*</p>
          <input
            // onKeyDown={enterKeyCode}
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
            {reviewValue.map(({ id, text }) => {
              return (
                <div key={id} className="list-wrap">
                  <div className="list-nav">
                    <p>별점 자리</p>
                    <p>{id}</p>
                  </div>
                  <div className="review">
                    <li className="review-text">{text}</li>
                    <Trash2 onClick={removeReview} className="trash-icon" />
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

export default ReviewBox;
