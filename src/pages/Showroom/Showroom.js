import React from 'react';
import './Showroom.scss';

const Showroom = () => {
  return (
    <div className="showroom">
      <div className="header-main">온라인 쇼룸</div>
      <div className="showroom-item">
        <div className="column-image">
          <div
            className="image-container"
            style={{
              backgroundImage: `url(${`https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80`})`,
            }}
          />
        </div>
        <div className="column-text">
          <div className="header-sub">어떤 거실을 꿈꾸시나요?</div>
          <p>
            스타일리시한 윙체어에 몸을 깊숙이 기대고 풋스툴에 발을 올려두는
            것보다 더 기분 좋은 일은 없을 거예요. 안에 실용적인 수납 공간이 숨어
            있다면 더 그렇겠죠? 그 안에 무얼 넣고 싶으신가요? 그건 주인 마음에
            달렸죠...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Showroom;
