import React, { useEffect, useState } from 'react';
import OrderBar from './components/OrderBar';
import { ArrowRight } from 'react-feather';
import './ProductDetail.scss';

function ProductDetail() {
  const [detailData, setDetailData] = useState([]);

  useEffect(() => {
    fetch('http://10.58.52.225:3000/products/product/1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      //query: JSON.stringify({filter:"ASC" }),
      //바디 대신에 query:{"main_"}
    })
      .then(response => response.json())
      .then(data => setDetailData(data));
  }, []);

  const { id, names, price, sub_description, image_url, detail, descriptions } =
    detailData;

  return (
    <div className="product-detail">
      <div className="product-detail-page">
        <div className="product-page">
          <div className="image-box">
            {IMG.map(imgDate => {
              return (
                <p className="img-x" key={imgDate.id}>
                  <img className="back-img" url={imgDate.adress} />
                </p>
              );
            })}
          </div>
          <div className="detail-box">
            <div className="detail-text-box">
              <p className="detail-text"> {descriptions}</p>
              <div className="product-code-box">
                <p className="text">제품번호</p>
                <p className="code">{id}</p>
              </div>
            </div>

            <div className="inner-menu-box">
              <div className="inner-menu-item">
                <p>제품 설명</p>
                {/* {detail} */}
                <button className="inner-btu">
                  <ArrowRight />
                </button>
              </div>
              <div className="inner-menu-item">
                <p>치수</p>
                <button className="inner-btu">
                  <ArrowRight />
                </button>
              </div>
              <div className="inner-menu-item">
                <div>
                  <span className="text">상품평</span>
                  <span className="five-star">★★★★☆ (16)</span>
                </div>
                <button className="inner-btu">
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OrderBar
        id={id}
        names={names}
        price={price}
        sub_description={sub_description}
        image_url={image_url}
        detail={detail}
        descriptions={descriptions}
      />
    </div>
  );
}

export default ProductDetail;

const IMG = [
  {
    id: 1,
    adress:
      'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
  },
  {
    id: 2,
    adress:
      'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
  },
  {
    id: 3,
    adress:
      'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
  },
  {
    id: 4,
    adress:
      'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
  },
];
