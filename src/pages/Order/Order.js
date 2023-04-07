import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icons from '../../components/Icons/Icons';
import './Order.scss';

const Order = () => {
  const [orderData, setOrderData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/data/cartData.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(result => {
        setOrderData(result);
      });
  }, []);

  console.log(orderData);

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
          <div onClick={() => navigate('/cart')} className="fix-address">
            수정
          </div>
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
          <button className="btn-cta">계속</button>
        </div>
        <div className="right">
          <div className="content-right">
            <div className="order-item-container">
              <div className="title-wrapper">
                <div className="title">주문 정보</div>
                <div className="fix-link">수정</div>
              </div>
              <div className="item-thumb-container">
                {orderData.map(item => (
                  <div
                    key={item.id}
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                    className="item-thumbnail"
                  />
                ))}
              </div>
            </div>
            <div className="order-total">
              <div className="title">주문 내역</div>
              <div className="header">
                <div className="sum-text">
                  <div>제품 가격(배송비 재외)</div>
                  <div>₩ 0</div>
                </div>
                <div className="sum-text">
                  <div>배송비</div>
                  <div>₩ 0</div>
                </div>
              </div>
            </div>
            <div className="cost">
              <div className="total">총 주문금액</div>
              <div className="cost-num">₩ 79,000</div>
            </div>
            <div className="extra-info">
              <Icons name="CreditCard" width={22} height={22} />
              <div className="info-text">
                반품 정책 365 이내에 제품 환불 가능
              </div>
            </div>
            <div className="extra-info">
              <Icons name="Lock" width={22} height={22} />
              <div className="info-text">SSL 데이터 암호화로 안전한 쇼핑</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
