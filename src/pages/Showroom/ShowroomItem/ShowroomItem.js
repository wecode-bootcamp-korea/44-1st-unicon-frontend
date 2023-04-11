import React from 'react';
import { Link } from 'react-router-dom';
import './ShowroomItem.scss';

const ShowroomItem = ({
  header,
  image_url,
  descriptions,
  products,
  rightAligned,
}) => {
  return (
    <div className={`showroom-item ${rightAligned && `right-aligned`}`}>
      <div className="column-image">
        <div
          className="image-container"
          style={{
            backgroundImage: `url(${image_url})`,
          }}
        />
      </div>
      <div className="column-text">
        <div>
          <div className="header-sub">{header}</div>
          <p className="description">{descriptions}</p>
        </div>
        <div className="items-container">
          {products?.map(
            ({ id, image_url, name, sub_description, price, product_size }) => (
              <Link to={`/products/detail/${id}`} key={id} className="link">
                <div className="item-wrapper">
                  <div
                    style={{
                      backgroundImage: `url(${image_url})`,
                    }}
                    className="item-thumb"
                  />
                  <div className="item-text">
                    <span>
                      <div className="name">{name}</div>
                      <div className="description">{sub_description}</div>
                      <div className="dimension">{product_size}</div>
                    </span>
                    <div className="price">
                      ₩&nbsp;{price?.toLocaleString()}
                    </div>
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowroomItem;
