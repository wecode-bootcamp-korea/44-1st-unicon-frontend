import React from 'react';
import { Heart, Truck, Package } from 'react-feather';
import CountButton from '../components/CountButton/CountButton';
import { APIS } from '../../../config';
import './OrderBar.scss';

const OrderBar = ({
  id,
  names,
  product_size,
  price,
  sub_description,
  num,
  setNum,
}) => {
  const token = localStorage.getItem('token');

  const handleCartSave = () => {
    fetch(`${APIS.cart}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
      body: JSON.stringify({
        productId: id,
        quantity: num,
      }),
    })
      .then(response => response.json())
      .then(data => {
        return data;
      });
  };
  return (
    <div className="order-bar">
      <div className="order-top">
        <div className="title-wrap">
          <div className="title-text">
            <p className="text-weight">{names}</p>
            <div className="sub-info">
              <p className="sub">{sub_description}</p>
            </div>
          </div>
          <Heart width={16} height={16} className="heart-icon" />
        </div>

        <div className="price-box">
          <span className="won">￦</span>
          <span className="price-num">
            {Math.floor(price).toLocaleString()}
          </span>
        </div>
      </div>

      <div className="how-to-box">
        <div className="choose-size">
          <div>규격 선택</div>
          <div className="size">{product_size}</div>
        </div>

        <div className="how-border-font">어떻게 구매하시겠어요?</div>
        <div className="how-to-border-box">
          <div className="how-to-order bottom-border">
            <div>
              <Truck className="icon" />
            </div>
            <div className="how-to-get-box">
              <span className="border-font">배송</span>
              <span className="border-sub">구매 가능 여부 확인</span>
            </div>
          </div>
          <div className="how-to-order">
            <div>
              <Package className="icon" />
            </div>
            <div className="how-to-get-box">
              <span className="border-font">매장</span>
              <span className="border-sub">매장 재고 및 재입고 날짜 확인</span>
            </div>
          </div>
        </div>
      </div>
      <div className="how-border-font">상품 수량</div>
      <div className="count-btn-box">
        <CountButton className="count-btn" num={num} setNum={setNum} />
        <button onClick={handleCartSave} className="order-btn">
          장바구니에 담기
        </button>
      </div>
    </div>
  );
};

export default OrderBar;
