import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderBar from './components/OrderBar';
import { ArrowRight } from 'react-feather';
import Drawer from '../../components/Drawer/Drawer';
import { APIS } from '../../config';
import './ProductDetail.scss';

function ProductDetail() {
  const [detailData, setDetailData] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [num, setNum] = useState(1);

  //장바구니에 담은 수량 보내주기
  //drawer가 열릴때(클릭할때) 리뷰달기가 나와야 됨

  const params = useParams();
  const detailPageId = params.id;

  useEffect(() => {
    fetch(`${APIS.productDetail}${detailPageId}}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(result => setDetailData(result));
  }, [detailPageId]);

  const { id, names, price, sub_description, image_url, detail, descriptions } =
    detailData;
  return (
    <div className="product-detail">
      <Drawer
        drawerOpen={drawerOpen}
        closeDrawer={() => setDrawerOpen(!drawerOpen)}
      />
      <div className="product-detail-page">
        <div className="product-page">
          <div className="image-box">
            <div className="img-border">
              <div className="img-wrap">
                {image_url?.map((image, i) => {
                  return (
                    <div
                      key={i}
                      className="img"
                      style={{
                        background: `url(${image})`,
                        backgroundSize: 'cover',
                      }}
                    />
                  );
                })}
              </div>
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
              <div
                className="inner-menu-item"
                onClick={() => setDrawerOpen(!drawerOpen)}
              >
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
      {detailData.id && <OrderBar {...detailData} num={num} setNum={setNum} />}
    </div>
  );
}

export default ProductDetail;
