import React from 'react';
import { Heart, ShoppingCart } from 'react-feather';
import './MiniProduct.scss';

const MiniProduct = ({ id, names, sub_description, price, image_url }) => {
  return (
    <div className="mini-product" key={id}>
      <div
<<<<<<< HEAD
        className="img"
        // key={id}
        style={{
          backgroundImage: `url(${img})`,
          // , alt: 'mini-img'
        }}
      />
=======
        style={{
          backgroundImage: `url(${image_url})`,
        }}
        className="img"
      />

>>>>>>> main
      <div className="text-box">
        <p className="title">{names}</p>
        <p className="commit">{sub_description}</p>
        <span className="price-box">
<<<<<<< HEAD
          <p>￦ &nbsp;{price.toLocaleString()}</p>
=======
          <p>￦</p>
          <p>{Math.floor(price).toLocaleString()}</p>
>>>>>>> main
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
