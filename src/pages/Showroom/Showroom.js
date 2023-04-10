import React, { useState, useEffect } from 'react';
import ShowroomItem from './ShowroomItem/ShowroomItem';
import './Showroom.scss';

const Showroom = () => {
  const [showroomData, setShowroomData] = useState([]);

  useEffect(() => {
    fetch('http://10.58.52.225:3000/products/showRoom', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(result => {
        setShowroomData(result);
      });
  }, []);

  return (
    <div className="showroom">
      <div className="header-main">온라인 쇼룸</div>
      {showroomData.map(
        ({ id, image_url, header, descriptions, products, price }) => {
          return (
            <ShowroomItem
              image_url={image_url}
              key={id}
              header={header}
              descriptions={descriptions}
              products={products}
              price={price}
              rightAligned={id % 2 === 0 ? true : false}
            />
          );
        }
      )}
    </div>
  );
};

export default Showroom;
