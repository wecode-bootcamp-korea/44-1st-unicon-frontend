import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { APIS } from '../../config';
import './PurchasedItems.scss';

const PurchasedItems = () => {
  const [purchasedItemsData, setPurchasedItemsData] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch(`${APIS.purchasedItems}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: token,
      },
    })
      .then(response => response.json())
      .then(result => setPurchasedItemsData(result));
  }, []);

  return (
    <div className="purchased-items">
      <div className="page-header">구매한 상품들</div>
      <div className="items-container">
        {purchasedItemsData.length > 0 ? (
          purchasedItemsData.map(
            ({ id, names, quantity, price, sub_description, image_url }, i) => (
              <Link
                key={i}
                to={`/products/detail/${id}`}
                className="purhcased-link"
              >
                <div className="item-wrapper">
                  <div
                    style={{
                      backgroundImage: `url(${image_url[0]})`,
                    }}
                    className="item-image"
                  />
                  <div className="section-right">
                    <div className="text-section">
                      <span>
                        <div className="item-name">{names}</div>
                        <div className="description">{sub_description}</div>
                      </span>
                      <span>
                        <div className="price-count-wrapper">
                          <div className="price">{quantity}개</div>
                          <div className="separator">|</div>
                          <div className="price">
                            개당 가격:&nbsp;₩&nbsp;{price}
                          </div>
                        </div>
                      </span>
                    </div>
                    <div
                      className="purchased-btn"
                      onClick={e => {
                        e.stopPropagation();
                        navigate(`/products/detail/${id}`, { state: 'review' });
                      }}
                    >
                      리뷰 쓰기
                    </div>
                  </div>
                </div>
              </Link>
            )
          )
        ) : (
          <div>구매한 상품이 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default PurchasedItems;
