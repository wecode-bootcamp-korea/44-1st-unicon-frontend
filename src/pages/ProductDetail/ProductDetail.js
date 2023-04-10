import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderBar from './components/OrderBar';
import { ArrowRight } from 'react-feather';
import './ProductDetail.scss';

function ProductDetail() {
  const [detailData, setDetailData] = useState([]);

  const paramas = useParams();
  const detailPageId = paramas.id;

  useEffect(() => {
    fetch(`http://10.58.52.225:3000/products/product/${detailPageId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(data => setDetailData(data));
  }, [detailPageId]);

  const { id, names, price, sub_description, image_url, detail } = detailData;

  return (
    <div className="product-detail">
      <div className="product-detail-page">
        <div className="product-page">
          <div className="image-box">
            <div className="img-border">
              {detailData.map(({ id, image_url }) => {
                return (
                  <div className="img-wrap" key={id}>
                    <div
                      className="img"
                      style={{
                        background: `url(${image_url})`,
                        backgroundSize: 'cover',
                      }}
                    />
                    <div
                      className="img"
                      style={{
                        background: `url(${image_url})`,
                        backgroundSize: 'cover',
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="detail-box">
            <div className="detail-text-box">
              <p className="detail-text"> {sub_description}</p>
              <div className="product-code-box">
                <div className="product-code-wrap">
                  <p className="text">제품번호</p>
                  <p className="code">{id}</p>
                </div>
              </div>
            </div>

            <div className="inner-menu-box">
              <div className="inner-menu-item">
                <p>제품 설명</p>
                {detail}
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
      {detailData.id && (
        <OrderBar
          id={detailData.id}
          names={detailData.names}
          price={detailData.price}
          sub_description={detailData.sub_description}
          image_url={detailData.image_url}
          detail={detailData.detail}
          descriptions={detailData.descriptions}
        />
      )}
    </div>
  );
}

export default ProductDetail;
