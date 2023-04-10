import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icons from '../../components/Icons/Icons';
import Modal from './Modal/Modal';
import './Order.scss';

const Order = () => {
  const [orderData, setOrderData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const [requirements, setRequirements] = useState({
    delivery: false,
    terms: false,
  });

  const { delivery, terms } = requirements;

  useEffect(() => {
    fetch('/data/orderData.json', {
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
  3;

  const formNotComplete = delivery === false || terms === false;

  const { message } = orderData;
  // const { totalAmount, imageUrl, userInfo } = message;
  console.log(orderData.message);

  return (
    <div className="order">
      {modalOpen && (
        <Modal
          modalOpen={() => setModalOpen(!modalOpen)}
          setModalOpen={setModalOpen}
        />
      )}

      <div className="section-top">
        <div className="logo" />
      </div>
      <div className="section-main">
        <div className="section-text">
          <div className="section-header">
            <div className="step-header">배송과 픽업 방법</div>
          </div>
          <div className="delivery-address">배송지:</div>
          <div className="address-text">{message?.userInfo[0].addresses}</div>
          <div onClick={() => navigate('/cart')} className="fix-address">
            수정
          </div>
          <div className="delivery-type-header">배송 방법</div>
          <div className={`delivery-option-box ${delivery && `active`}`}>
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
                <input
                  onClick={() =>
                    setRequirements({ ...requirements, delivery: !delivery })
                  }
                  type="checkbox"
                  className="checkbox"
                />
                <div className="checkbox-label">제품을 현관 앞에 놔두기</div>
              </div>
            </div>
          </div>
          <div className={!delivery && 'inactive'}>
            <div className="section-header">
              <div className="step-header">결제</div>
            </div>
            <div className="payment-options">
              <div className="payment-text">위케아 포인트</div>
              <div className="option-thumbs-1" />
              <div className="option-thumbs-2" />
            </div>
            <div className="cost">
              <div className="total">총 주문금액</div>
              <div className="cost-num">
                ₩&nbsp;{message?.totalAmount.toLocaleString()}
              </div>
            </div>
            <div className="terms-wrapper">
              <input
                onClick={() =>
                  setRequirements({ ...requirements, terms: !terms })
                }
                type="checkbox"
                className="terms"
              />
              <div>이용 약관을 읽었으며 동의합니다.</div>
            </div>
            <div
              onClick={() => setModalOpen(!modalOpen)}
              className={`btn-purchase ${formNotComplete && `disabled`}`}
            >
              <div className="btn-content">
                <div className="btn-text">결제하기</div>
                <div className="arrow-wrapper">
                  <Icons
                    name="ArrowRight"
                    className="arrow"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="content-right">
            <div className="order-item-container">
              <div className="title-wrapper">
                <div className="title">주문 정보</div>
                <div className="fix-link">수정</div>
              </div>
              <div className="item-thumb-container">
                {message?.imageUrl.map((link, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundImage: `url(${link})`,
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
                  <div>제품 가격 (배송비 제외)</div>
                  <div>₩&nbsp;{message?.totalAmount.toLocaleString()}</div>
                </div>
                <div className="sum-text">
                  <div>배송비</div>
                  <div>₩ 0</div>
                </div>
              </div>
            </div>
            <div className="cost">
              <div className="total">총 주문금액</div>
              <div className="cost-num">
                ₩&nbsp;{message?.totalAmount.toLocaleString()}
              </div>
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
