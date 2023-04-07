import React from 'react';
import './Order.scss';

const Order = () => {
  return (
    <div className="order">
      <div className="section-top">
        <div className="logo" />
      </div>
      <div className="section-main">
        <div className="column-num">
          <div className="step-num-bg">
            <div className="step-num">1</div>
          </div>
        </div>
        <div className="section-text">
          <div className="section-header">
            <div className="step-header">배송과 픽업 방법</div>
          </div>
          <div className="delivery-address">배송지:</div>
          <div className="address-text">테헤란로 427</div>
          <div className="fix-address">수정</div>
          <div className="delivery-type-header">배송 방법</div>
          <div className="delivery-option-box">
            <div className="title-wrap">
              <div className="delivery-option-title">무료 배송</div>
              <div className="delivery-option-title">₩ 0</div>
            </div>
            <div className="delivery-time">1-7일</div>
            <div className="delivery-time">배송일 - 가장 빠른 날짜</div>
            <div className="delivery-time">
              {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })}
            </div>
            <div className="no-contact-box">
              <div className="delivery-option-title">비대면 배송</div>
              <div className="checkbox-container">
                <input type="checkbox" className="checkbox" />
                <div className="checkbox-label">제품을 현관 앞에 놔두기</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
