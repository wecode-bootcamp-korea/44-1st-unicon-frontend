import React from 'react';
import './ShowroomItem.scss';

const ShowroomItem = ({
  header,
  image_url,
  description,
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
          <p>{description}</p>
        </div>
        <div className="items-container">
          {products?.map(
            ({ id, image_url, name, description, cost, dimension }) => (
              <div key={id} className="item-wrapper">
                <div
                  style={{
                    backgroundImage: `url(${image_url})`,
                  }}
                  className="item-thumb"
                />
                <div className="item-text">
                  <span>
                    <div className="name">{name}</div>
                    <div className="description">{description}</div>
                    <div className="dimension">{dimension}</div>
                  </span>
                  <div className="cost">₩&nbsp;{cost?.toLocaleString()}</div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowroomItem;
