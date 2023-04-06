import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  CreditCard,
  Lock,
  MoreHorizontal,
  Tool,
  Truck,
  ShoppingBag,
} from 'react-feather';
import CartItem from './CartItem/CartItem';
import './Cart.scss';

const Cart = () => {
  const [cartData, setCartData] = useState([]);
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
        setCartData(result);
      });
  }, []);

  const totalCost = cartData
    .map(item => item.cost * item.quantity)
    .reduce((acc, cur) => acc + cur, 0);

  const handleAmountChange = (id, num) => {
    const updatedData = cartData.map(item =>
      id === item.id ? { ...item, quantity: item.quantity + num } : item
    );
    setCartData(updatedData);
  };

  const handleDelete = id => {
    const updatedData = cartData.filter(item => item.id !== id);
    window.confirm('정말 삭제하시겠습니까?') && setCartData(updatedData);
  };

  const handleSubmit = () => {
    //상품, 수량, 보내는 사람 아이디
    const bodyData = cartData.map(item => {
      return {
        id: item.id,
        quantity: item.quantity,
        userId: localStorage.getItem('token'),
      };
    });
    console.log(bodyData);
  };

  return (
    <div className="cart">
      <div className="container">
        <div className="left">
          <div className="content-left">
            <div className="page-header">
              <h1 className="title">
                장바구니{!cartData.length && '가 비어있어요'}
              </h1>
              <MoreHorizontal />
            </div>
            {cartData.length && (
              <>
                <div className="sub">주문을 어떻게 받고 싶으세요?</div>
                <div className="choice">
                  <div className="option">
                    <Truck /> &nbsp;&nbsp; 배송
                  </div>
                  <div className="option">
                    <ShoppingBag />
                    &nbsp;&nbsp; 픽업
                  </div>
                </div>
              </>
            )}
            {cartData &&
              cartData.map(cartItem => (
                <CartItem
                  id={cartItem.id}
                  key={cartItem.id}
                  name={cartItem.name}
                  image={cartItem.image}
                  cost={cartItem.cost}
                  description={cartItem.description}
                  dimension={cartItem.dimension}
                  quantity={cartItem.quantity}
                  handleAmountChange={handleAmountChange}
                  handleDelete={handleDelete}
                />
              ))}
          </div>
        </div>
        <div className="right">
          <div className="content-right">
            <div className="service">
              <Tool
                style={{
                  flexShrink: 0,
                }}
                width={24}
                height={24}
                className="icon"
              />
              <div className="text-wrap">
                <div className="service-title">조립 서비스</div>
                <p className="service-content">
                  IKEA에게 조립을 맡기고 소중한 시간을 아끼세요. 공식 협력업체가
                  제공하는 조립 서비스는 3만원부터 시작합니다.
                </p>
                <p className="service-caption">
                  우편 번호를 추가하여 예약 가능 여부 및 가격 확인
                </p>
                <p className="service-extra">추가 정보</p>
                <div className="btn">조립 서비스 선택하기</div>
              </div>
            </div>
            <div className="delivery">
              <div className="title">주문 내역</div>
              <div className="header">
                <div>배송</div>
                <div>아직 배송비가 산정되지 않았습니다 </div>
              </div>
            </div>
            <div className="cost">
              <div className="total">총 주문금액</div>
              <div className="cost-num">
                ₩&nbsp;{totalCost?.toLocaleString()}
              </div>
            </div>
            <div onClick={handleSubmit} className="btn-purchase">
              <div className="btn-content">
                <div className="btn-text">결제하기</div>
                <div className="arrow-wrapper">
                  <ArrowRight className="arrow" width={24} height={24} />
                </div>
              </div>
            </div>
            <div className="extra-info">
              <CreditCard width={22} height={22} />
              <div className="info-text">
                반품 정책 365 이내에 제품 환불 가능
              </div>
            </div>
            <div className="extra-info">
              <Lock width={22} height={22} />
              <div className="info-text">SSL 데이터 암호화로 안전한 쇼핑</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
