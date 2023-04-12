import React from 'react';
import { Link } from 'react-router-dom';

import { Heart, ShoppingCart } from 'react-feather';
import './MiniProduct.scss';

const MiniProduct = ({ id, names, sub_description, price, image_url }) => {
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

        <Link to={`/products/detail/${id}`}>
          <div className="icon-box">
            <div className="cart-wrap">
              <button className="cart-btn">
                <ShoppingCart className="cart-icon" />
              </button>
            </div>
            <Heart className="heart" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MiniProduct;
