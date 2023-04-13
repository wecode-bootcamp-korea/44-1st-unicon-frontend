import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderBar from './components/OrderBar';
import { ArrowRight } from 'react-feather';
import Drawer from '../../components/Drawer/Drawer';
import ReviewItem from './components/ReviewItem/ReviewItem';
import { APIS } from '../../config';
import './ProductDetail.scss';

function ProductDetail() {
  const [detailData, setDetailData] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [num, setNum] = useState(1);

  const params = useParams();
  const detailPageId = params.id;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      >
        <ReviewItem detailPageId={detailPageId} />
      </Drawer>
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
