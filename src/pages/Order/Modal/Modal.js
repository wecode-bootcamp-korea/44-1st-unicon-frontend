import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { APIS } from '../../../config';
import './Modal.scss';

const Modal = ({ modalOpen, setModalOpen, data }) => {
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [paymentData, setPaymentData] = useState();
  const [checkboxes, setCheckboxes] = useState({
    point: false,
    terms: false,
  });
  const { point, terms } = checkboxes;

  const token = localStorage.getItem('token');
  const orderNumber = sessionStorage.getItem('orderNumber');

  useEffect(() => {
    fetch(`${APIS.payment}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({
        orderNumber: orderNumber,
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setPaymentData(result);
      });
  }, []);

  const handleClick = () => {
    fetch(`${APIS.payment}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: token,
      },
    })
      .then(response => response.json())
      .then(result => {
        return result;
      });
    setPaymentComplete(true);
  };

  console.log(paymentData);

  const navigate = useNavigate();
  return (
    <>
      <div onClick={() => setModalOpen(!modalOpen)} className="modal" />
      <div className="modal-box">
        {paymentComplete ? (
          <>
            <div className="header blue">Tack</div>
            <div className="header">감사합니다</div>
            <div className="complete-text">결제가 완료되었습니다</div>
            <div className="purchased-label">결제 상품 정보</div>
            <div className="complete-items">
              <div>{paymentData?.productName.names} 외 상품들</div>
              <div>₩ {paymentData?.totalAmount.toLocaleString()}</div>
            </div>
            <div className="purchased-label">
              결제 상품 정보 및 주문 내역은 <span>주문 내역</span>에서 확인할 수
              있습니다.
            </div>
            <button onClick={() => navigate('/')} className="cta-btn">
              메인 페이지로 돌아가기
            </button>
          </>
        ) : (
          <>
            <div className="header">결제</div>
            <div className="total-wrapper">
              <div className="label">총 결제 금액:</div>
              <div className="cost">
                ₩ {paymentData?.totalAmount.toLocaleString()}
              </div>
            </div>
            <div className="payment-type">결제 방식:</div>
            <div className="option-wrapper">
              <input
                name="point"
                onClick={() => setCheckboxes({ ...checkboxes, point: !point })}
                className="checkbox"
                value={point}
                type="checkbox"
              />
              <div className="wekea-point-logo" />
              <div className="option">위케아 포인트</div>
              <input className="radio disabled" type="radio" />
              <div className="option disabled">신용카드</div>
            </div>
            {point && (
              <div className="total-wrapper">
                <div className="label">보유 중인 WEKEA points:</div>
                <div className="point">{paymentData?.updatePoint.points}</div>
              </div>
            )}

            <div className="subtract-value">
              <div className="label">결제할 금액:</div>
              <div className="subtract">
                -&nbsp;{paymentData?.totalAmount.toLocaleString()}
              </div>
            </div>
            <div className="divider" />
            {point && (
              <div className="total-wrapper">
                <div className="label">결제 후 잔여 WEKEA points:</div>
                <div className="point">{paymentData?.updatePoint.points}</div>
              </div>
            )}

            <div className="confirm">
              <input
                name="terms"
                value={terms}
                type="checkbox"
                onClick={() => setCheckboxes({ ...checkboxes, terms: !terms })}
              />
              <span>결제조건 확인 및 정보 제공</span>에 동의합니다.
            </div>
            <button
              onClick={handleClick}
              className={`cta-btn ${
                (point === false || terms === false) && `disabled`
              }`}
            >
              {`${paymentData?.totalAmount.toLocaleString()}원 결제하기`}
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Modal;
