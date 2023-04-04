import React from 'react';
import { Heart, AlertCircle, PlusCircle, Truck, Package } from 'react-feather';
import StarRating from '../components/StarRating/StarRating';
import CountButton from '../components/CountButton/CountButton';
import './OrderBar.scss';

const OrderBar = () => {
  return (
    <div className="order-bar">
      <div className="order-top">
        <div className="title-wrap">
          <div className="title-text">
            <p className="text-weight">TÄLLBYN 텔뷘</p>
            <p>탁상스탠드, 니켈 도금/오팔</p>
            <p>화이트 유리, 40 cm</p>
          </div>
          <Heart className="heart-icon" />
        </div>

        <div className="price-box">
          <span>￦</span>
          <span>63,000</span>
        </div>
        <div className="star-box">
          <StarRating />
        </div>
        <div className="caution">
          <AlertCircle className="icon" />
          <p>
            조명은 별도구매입니다. LED전구 E14 구형 오팔 화이트 사용을
            권장합니다.
          </p>
        </div>
      </div>

      <div className="together-item-box">
        <div className="together-border-font">함께 필요한 제품</div>
        <div className="together-item">
          <div className="together-item-img">img</div>
          <PlusCircle className="plus-icon" />
        </div>
      </div>

      <div className="how-to-box">
        <div className="how-border-font">어떻게 구매하시겠어요?</div>
        <div className="how-to-border-box">
          <div className="how-to-order bottom-border">
            <div>
              <Truck className="icon" />
            </div>
            <div className="how-to-get-box">
              <span className="border-font">배송</span>
              <span>구매 가능 여부 확인</span>
            </div>
          </div>
          <div className="how-to-order">
            <div>
              <Package className="icon" />
            </div>
            <div className="how-to-get-box">
              <span className="border-font">매장</span>
              <span>매장 재고 및 재입고 날짜 확인</span>
            </div>
          </div>
        </div>

        <div className="count-btn-box">
          <CountButton className="count-btn" />
          <button className="order-btn">구매하기</button>
        </div>
      </div>
    </div>
  );
};

export default OrderBar;
