import React, { useState } from 'react';
import { Heart, ShoppingCart } from 'react-feather';
import { APIS } from '../../../config';
import './MiniProduct.scss';

const MiniProduct = ({
  id,
  is_new,
  names,
  sub_description,
  price,
  image_url,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const token = localStorage.getItem('token');

  const handleAddCart = id => {
    fetch(`${APIS.cart}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
      body: JSON.stringify({
        productId: id,
        quantity: 1,
      }),
    })
      .then(response => response.json())
      .then(result => {
        return result;
      });
  };

  return (
    <div className="mini-product" key={id}>
      <div
        onMouseOver={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundImage: isHovering
            ? `url(${image_url[1]})`
            : `url(${image_url[0]})`,
        }}
        className="img"
      >
        {is_new && <div className="new-tag">새로 나온 제품</div>}
      </div>
      <div className="text-box">
        <p className="title">{names}</p>
        <p className="commit">{sub_description}</p>
        <span className="price-box">
          <p className="won">￦</p>
          <p className="price">{Math.floor(price).toLocaleString()}</p>
        </span>
        <div className="icon-box">
          <div className="cart-wrap">
            <button
              onClick={() => {
                handleAddCart(id);
              }}
              className="cart-btn"
            >
              <ShoppingCart className="cart-icon" />
            </button>
          </div>
          <Heart width={20} height={20} className="heart" />
        </div>
        <div className="available">
          <div className="circle" />
          <div className="text">재고 있음</div>
        </div>
      </div>
    </div>
  );
};

export default MiniProduct;
