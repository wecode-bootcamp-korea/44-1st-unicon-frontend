import React from 'react';
import { Minus, Plus } from 'react-feather';
import './CartItem.scss';

const CartItem = ({
  id,
  name,
  image,
  cost,
  description,
  dimension,
  count,
  handleAmountChange,
  handleDelete,
}) => {
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
            <div>₩&nbsp;{(cost * count).toLocaleString()}</div>
          </div>
          <div className="subtext">{description}</div>
          <div className="subtext">{dimension}</div>
        </div>
        <div className="section-bottom">
          <div className="counter-component">
            <div
              onClick={() => count > 1 && handleAmountChange(id, -1)}
              className="btn"
            >
              <Minus width={18} height={18} />
            </div>
            <div className="number">{count}</div>
            <div onClick={() => handleAmountChange(id, 1)} className="btn">
              <Plus width={18} height={18} />
            </div>
          </div>
          <div onClick={() => handleDelete(id)} className="btn-link">
            삭제
          </div>
          <div className="btn-link">위시리스트 저장</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
