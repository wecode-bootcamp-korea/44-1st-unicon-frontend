import React from 'react';
import { Heart, ShoppingCart } from 'react-feather';
import './MiniProduct.scss';

const MiniProduct = ({ id, img, name, commit, price }) => {
  return (
    <div className="mini-product" key={id}>
      <img className="img" src={img} alt="mini-img" />
      <div className="text-box">
        <p className="title">{name}</p>
        <p className="commit">{commit}</p>
        <span className="price-box">
          <p>￦</p>
          <p>{Math.floor(price).toLocaleString()}</p>
        </span>
        <div className="star-wrap">
          <span className="star">★★★★☆ (16)</span>
        </div>

        <div className="icon-box">
          <div className="cart-wrap">
            <button className="cart-btn">
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
