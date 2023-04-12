import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icons from '../../components/Icons/Icons';
import CartItem from './CartItem/CartItem';
import { APIS } from '../../config';
import './Cart.scss';

const Cart = () => {
  const [cartData, setCartData] = useState([]);

  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      alert('먼저 로그인해주세요');
      navigate('/login');
    }
  }, []);

  useEffect(() => {
    fetch(`${APIS.cart}`, {
      method: 'GET',
      heas: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: token,
      },
    })
      .then(response => response.json())
      .then(result => {
        setCartData(result);
      });
  }, []);

  const totalCost = cartData
    ?.map(({ quantity, price }) => quantity * price)
    .reduce((acc, cur) => acc + cur, 0);

  const handleAmountChange = (id, num) => {
    const updatedData = cartData?.map(item =>
      id === item.id ? { ...item, quantity: item.quantity + num } : item
    );
    setCartData(updatedData);
  };

  const handleDelete = id => {
    const updatedData = cartData.filter(item => item.id !== id);
    window.confirm('정말 삭제하시겠습니까?') && setCartData(updatedData);
  };

  const handleSubmit = () => {
    // TODO: 아래 fetch함수를 위한 변수 선언
    // const bodyData = cartData?.map(item => {
    //   return {
    //     id: item.id,
    //     quantity: item.quantity,
    //   };
    // });

    fetch(`${APIS.cart}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: token,
      },
      body: {
        // TODO: 백엔드가 받기 원하는 게 아이디와 수량뿐일 경우, 위 bodyData 변수를 사용
        whateverthekeyis: cartData,
      },
    })
      .then(response => response.json())
      .then(result => {
        setCartData(result);
        navigate('/order');
      });
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
              <Icons name="MoreHorizontal" width={24} height={24} />
            </div>
            {cartData.length > 0 && (
              <>
                <div className="sub">주문을 어떻게 받고 싶으세요?</div>
                <div className="choice">
                  <div className="option">
                    <Icons name="Truck" width={24} height={24} /> &nbsp;&nbsp;
                    배송
                  </div>
                  <div className="option">
                    <Icons name="ShoppingBag" width={24} height={24} />
                    &nbsp;&nbsp; 픽업
                  </div>
                </div>
              </>
            )}
            {cartData?.map(cartItem => (
              <CartItem
                key={cartItem.id}
                {...cartItem}
                handleAmountChange={handleAmountChange}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        </div>
        <div className="right">
          <div className="content-right">
            <div className="service">
              <Icons
                name="Tool"
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
                  <Icons
                    name="ArrowRight"
                    className="arrow"
                    width={24}
                    height={24}
                  />
                </div>
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

export default Cart;
