import React, { useState } from 'react';
import { Minus, Plus } from 'react-feather';
import './CartItem.scss';

const CartItem = ({ name, image, cost, description, dimension, count }) => {
  return (
    <div className="cart-item">
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className="image"
      />
      <div className="content">
        <div className="text">
          <div className="header">
            <div>{name}</div>
            <div>₩&nbsp;{cost * count}</div>
          </div>
          <div className="subtext">{description}</div>
          <div className="subtext">{dimension}</div>
        </div>
        <div className="section-bottom">
          <div className="counter-component">
            <div className="btn">
              <Minus width={18} height={18} />
            </div>
            <div className="number">{count}</div>
            <div className="btn">
              <Plus width={18} height={18} />
            </div>
          </div>
          <div className="btn-link">삭제</div>
          <div className="btn-link">위시리스트 저장</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
