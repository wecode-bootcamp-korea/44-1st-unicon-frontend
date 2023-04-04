import React from 'react';
import OrderBar from './components/OrderBar';
import { ArrowRight } from 'react-feather';
import './ProductDetail.scss';

function ProductDetail() {
  return (
    <div className="product-detail">
      <div className="product-detail-page">
        <div className="product-page">
          <div className="image-box">
            <p className="img-x">
              <p className="back-img" />
            </p>
            <p className="img-x">
              <p className="back-img" />
            </p>
            <p className="img-x">
              <p className="back-img" />
            </p>
            <p className="img-x">
              <p className="back-img" />
            </p>
          </div>
          <div className="detail-box">
            <div className="detail-text-box">
              <p className="detail-text">
                TÄLLBYN 텔뷘 시리즈의 조명은 메탈과 입으로 불어 만드는 유리
                소재로 만들어서 클래식하면서도 튼튼한 디자인이에요.
                <br />
                멋진 분위기를 연출하는 기능성 조명이죠.
                <br />
                집안에 추억을 떠올리게 하는 공간을 만들어보세요.
              </p>
              <div className="product-code-box">
                <p className="text">제품번호</p>
                <p className="code">504.376.69</p>
              </div>
            </div>

            <div className="inner-menu-box">
              <div className="inner-menu-item">
                <p>제품 설명</p>
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
      <OrderBar />
    </div>
  );
}

export default ProductDetail;
