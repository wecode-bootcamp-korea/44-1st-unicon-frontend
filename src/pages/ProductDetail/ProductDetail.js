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
      //TODO: 통신할때 참고할 코드입니다. 잠시 주석 처리 하겠습니다.
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
            <div className="img-border">
              {IMG.map(({ id, left, right }) => {
                return (
                  <div className="img-wrap" key={id}>
                    <div
                      className="img"
                      style={{
                        background: `url(${left})`,
                        backgroundSize: 'cover',
                      }}
                    />
                    <div
                      className="img"
                      style={{
                        background: `url(${right})`,
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
              <p className="detail-text"> {descriptions}</p>
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
    left: 'https://www.ikea.com/kr/ko/images/products/forsa-work-lamp-beige__1031615_pe836564_s5.jpg?f=xl',
    right:
      'https://www.ikea.com/kr/ko/images/products/forsa-work-lamp-beige__1031618_pe836565_s5.jpg?f=xl',
    text: 'detail image',
  },
  {
    id: 2,
    left: 'https://www.ikea.com/kr/ko/images/products/forsa-work-lamp-beige__1031626_pe836581_s5.jpg?f=xl',
    right:
      'https://www.ikea.com/kr/ko/images/products/forsa-work-lamp-beige__1031630_pe836584_s5.jpg?f=xl',
    text: 'detail image',
  },
];
