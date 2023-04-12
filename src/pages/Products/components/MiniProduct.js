import React from 'react';
import { Heart, ShoppingCart } from 'react-feather';
import { APIS } from '../../../config';
import './MiniProduct.scss';

const MiniProduct = ({ id, names, sub_description, price, image_url }) => {
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
      .then(result => console.log(result));
  };

  return (
    <div className="mini-product" key={id}>
      <div
        style={{
          backgroundImage: `url(${image_url})`,
        }}
        className="img"
      />

      <div className="text-box">
        <p className="title">{names}</p>
        <p className="commit">{sub_description}</p>
        <span className="price-box">
          <p>￦</p>
          <p>{Math.floor(price).toLocaleString()}</p>
        </span>
        <div className="star-wrap">
          <span className="star">★★★★☆ (16)</span>
        </div>

        <div className="icon-box">
          <div className="cart-wrap">
            <button
              onClick={() => {
                console.log(id);
                handleAddCart(id);
              }}
              className="cart-btn"
            >
              <ShoppingCart className="cart-icon" />
            </button>
          </div>
          <Heart className="heart" />
        </div>
      </div>
    </div>
  );
};

export default MiniProduct;
