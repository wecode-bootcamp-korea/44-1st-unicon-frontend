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
      {showroomData.map(showroom => {
        return (
          <ShowroomItem
            key={showroom.id}
            {...showroom}
            rightAligned={showroom.id % 2 === 0 ? true : false}
          />
        );
      })}
    </div>
  );
};

export default Showroom;
