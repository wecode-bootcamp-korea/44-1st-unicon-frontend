import React from 'react';
import { Minus, Plus } from 'react-feather';
import './CartItem.scss';

const CartItem = ({
  id,
  image_url,
  names,
  image,
  sub_description,
  product_size,
  price,
  quantity,
  handleAmountChange,
  handleDelete,
}) => {
  return (
    <div className="cart-item">
      <div
        style={{
          backgroundImage: `url(${image_url[0]})`,
        }}
        className="image"
      />
      <div className="content">
        <div className="text">
          <div className="header">
            <div>{names}</div>
            <div>₩&nbsp;{(price * quantity).toLocaleString()}</div>
          </div>
          <div className="subtext">{sub_description}</div>
          <div className="subtext">{product_size}</div>
        </div>
        <div className="section-bottom">
          <div className="counter-component">
            <div
              onClick={() => quantity > 1 && handleAmountChange(id, -1)}
              className="btn"
            >
              <Minus width={18} height={18} />
            </div>
            <div className="number">{quantity}</div>
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
