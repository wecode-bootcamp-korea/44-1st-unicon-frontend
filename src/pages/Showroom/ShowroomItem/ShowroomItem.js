import React from 'react';
import './ShowroomItem.scss';

const ShowroomItem = ({ header, description, products, rightAligned }) => {
  return (
    <div className={`showroom-item ${rightAligned && `right-aligned`}`}>
      <div className="column-image">
        <div
          className="image-container"
          style={{
            backgroundImage: `url(${`https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80`})`,
          }}
        />
      </div>
      <div className="column-text">
        <div>
          <div className="header-sub">{header}</div>
          <p>{description}</p>
        </div>
        <div className="items-container">
          {products?.map(({ id, image_url, name, description, dimension }) => (
            <div key={id} className="item-wrapper">
              <div
                style={{
                  backgroundImage: `url(${image_url})`,
                }}
                className="item-thumb"
              />
              <div className="item-text">
                <div className="name">{name}</div>
                <div className="description">{description}</div>
                <div className="dimension">{dimension}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowroomItem;
