import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'react-feather';
import MiniProduct from './components/MiniProduct';
import './Main.scss';

function Main() {
  const [mainPageData, setMainPageData] = useState([]);
  useEffect(() => {
    fetch('/data/mainPageData.json')
      .then(response => response.json())
      .then(result => setMainPageData(result));
  }, []);

  return (
    <div className="main">
      <div className="main-top">
        <div className="main-img" />
        <div className="img-text">
          <div className="text-box">
            <h2 className="main-title-text">봄맞이 그린테리어</h2>
            <span className="main-small-text">
              집안 어디서든 간편하게 봄을 시작해보세요.
              <br />
              새로운 계절, 집에서 시작될 푸르른 행복을 IKEA가 응원합니다.
            </span>
            <button className="main-img-btn">
              집에 활기를 더할 제품 보러가기
            </button>
          </div>
        </div>
      </div>
      <div className="main-mid">
        <h2>베스트 카테고리 쇼핑하기</h2>

        <div className="card-box">
          <div className="mapping-box">
            <div className="color-card-map">
              <div className="card-contents-first">
                <span>IKEA 신제품 보러가기</span>
                <ArrowRight className="btn" />
              </div>
            </div>
            {mainPageData[0]?.map(({ id, name, img }) => {
              return (
                <div
                  key={id}
                  className="color-card-map"
                  style={{
                    backgroundImage: `url(${img})`,
                    alt: 'img',
                  }}
                >
                  <div className="card-contents">
                    <div className="color-box-btn">{name}</div>
                  </div>
                  <div className="scroll" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="event-box">
        <h2 className="promotion-text">진행 중인 이벤트 및 프로모션</h2>
        <div className="event-wrap">
          {mainPageData[1]?.map(({ id, name, color, text, comment, img }) => {
            return (
              <div
                className="event-slide"
                key={id}
                style={{ backgroundColor: `${color}` }}
              >
                <div
                  className="event-img"
                  style={{
                    backgroundImage: `url(${img})`,
                  }}
                />
                <div className="event-content">
                  <div className="event-text-box">
                    <h2
                      style={{
                        color: `${text}`,
                      }}
                      className="event-title"
                    >
                      {name}
                    </h2>
                    <span
                      style={{
                        color: `${text}`,
                      }}
                      className="event-text"
                    >
                      {comment}
                    </span>
                  </div>
                  <ArrowRight className="btn" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h2>추천 제품</h2>
        <div className="components">
          {mainPageData[2]?.map(data => {
            return (
              <MiniProduct
                className="items"
                key={data.id}
                img={data.img}
                name={data.name}
                commit={data.commit}
                price={data.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Main;
