import React, { useState, useEffect } from 'react';
import ShowroomItem from './ShowroomItem/ShowroomItem';
import './Showroom.scss';

const Showroom = () => {
  const [showroomData, setShowroomData] = useState([]);

  useEffect(() => {
    fetch('/data/showroomData.json')
      .then(response => response.json())
      .then(result => setShowroomData(result));
  }, []);

  return (
    <div className="showroom">
      <div className="header-main">온라인 쇼룸</div>
      {showroomData.map(({ id, image_url, header, description, products }) => {
        return (
          <ShowroomItem
            image_url={image_url}
            key={id}
            header={header}
            description={description}
            products={products}
            rightAligned={id % 2 === 0 ? true : false}
          />
        );
      })}
    </div>
  );
};

export default Showroom;
