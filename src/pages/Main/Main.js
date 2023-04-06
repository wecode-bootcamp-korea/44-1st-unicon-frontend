import React from 'react';
import { ArrowRight } from 'react-feather';
import './Main.scss';

function Main() {
  return (
    <div className="main">
      <div className="semi-menu">
        <div className="semi-menu-left">
          <span className="text">모든 제품</span>
          <span className="text">온라인 쇼룸</span>
          <span className="text">특별한 가격</span>
          <span className="text">조립 서비스</span>
        </div>
      </div>
      <div className="main-top">
        <img className="main-img" alt="main img" />
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
          {/* .toLocailstring -> 가격에 컴마 붙이기 */}
          <div className="mapping-box">
            <div className="color-card-map">
              <div className="card-contents">
                <span>IKEA 신제품 보러가기</span>
                <ArrowRight className="right-btn" />
              </div>
            </div>
            {COLOR_BOX.map(({ id, name, img }) => {
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
                    <biv className="color-box-btn">{name}</biv>
                    {/* <div style={{
                      backgroundImage: `url(${img})`
                    }} className='map-img'/> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="event-box">
        <h2 className="promotion-text">진행 중인 이벤트 및 프로모션</h2>
        {/* {EVENT_IMG.map(({id, name, comment, img})=>{
          return(
            <div key={id} >
              <h2>{name}</h2>
              <span>{comment}</span>
              <button className='event-btn'>→</button>
              <img src={img}></img>
            </div>
          )
        })} */}
        <div className="event-wrap">
          {EVENT_IMG.map(({ id, name, color, text, comment, img }) => {
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
                    >
                      {name}
                    </h2>
                    <span
                      style={{
                        color: `${text}`,
                      }}
                    >
                      {comment}
                    </span>
                  </div>
                  {/* <div className='event-btn'>→</div> */}
                  <ArrowRight className="btn;" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h2>추천 제품</h2>
        <div>디테일 페이지에 썻던 재사용 컴포넌트</div>
      </div>
    </div>
  );
}

export default Main;

const COLOR_BOX = [
  // { id: 1, name: 'IKEA 신제품 보러가기', img: '' },
  {
    id: 2,
    name: '침실',
    img: 'https://www.ikea.com/ext/ingkadam/m/3aa319771247890b/original/PH171699-crop001.jpg?f=xxs',
  },
  {
    id: 3,
    name: '수납/정리',
    img: 'https://www.ikea.com/ext/ingkadam/m/57af553408fd829f/original/PE867858-crop001.jpg?f=xxs',
  },
  {
    id: 4,
    name: '홈오피스',
    img: 'https://www.ikea.com/images/f0/87/f087331e4416c4ce01d265d6c4288e9b.jpg?f=xxs',
  },
  {
    id: 5,
    name: '다이닝',
    img: 'https://www.ikea.com/ext/ingkadam/m/206171a86cff819c/original/PH166826-crop001.jpg?f=xxs',
  },
  {
    id: 6,
    name: '거실',
    img: 'https://www.ikea.com/ext/ingkadam/m/7a90f1e0176f5447/original/PH167387-crop001-crop002.jpg?f=xxs',
  },
  {
    id: 7,
    name: '주방',
    img: 'https://www.ikea.com/ext/ingkadam/m/7e56e5a9f682485f/original/PH181607.jpg?f=xxs',
  },
  {
    id: 8,
    name: '홈데코/장식품',
    img: 'https://www.ikea.com/ext/ingkadam/m/2cefdac0dd90b2a3/original/PH159748-crop002.jpg?f=xxs',
  },
];

const EVENT_IMG = [
  {
    id: 1,
    name: 'IKEA 신제품을 만나보세요',
    color: '#EDDDD3',
    text: 'black',
    comment:
      '1,000개가 넘는 IKEA의 신제품으로 내 기분에 맞는 컬러를 입히고 취향에 맞는 가구와 소품을 더해 애정이 깃들고 감각이 살아있는 공간을 만들어 보세요.',
    img: 'https://www.ikea.com/ext/ingkadam/m/7910eac39bbb23f4/original/PH191965.jpg?f=xl',
  },
  {
    id: 2,
    name: '지구의 달, 특별 혜택',
    color: '#00A554',
    text: 'black',
    comment:
      "IKEA에서 4월 한달을 '지구의 달'로 지정하여, 기후 발자국을 줄일 수 있는 다양한 이벤트를 준비했어요. 지구의 달 맞이 IKEA에서 준비한 다양한 이벤트 및 혜택을 확인하세요! ",
    img: 'https://www.ikea.com/images/56/f4/56f450fc851ae25fe8fc87708c391e97.jpg?f=xl',
  },
  {
    id: 3,
    name: '쾌적한 베란다에서 즐기는 봄의 여유',
    color: '#D3AA81',
    text: 'black',
    comment:
      '온갖 잡동사니가 뒤죽박죽 쌓인 좁고 답답한 베란다, 활용도 높은 다양한 IKEA의 야외용 수납가구로 깔끔하게 정리해 보세요. 마치 매장 진열대를 보듯 정갈하고 단정하게, 자투리 공간까지 내 취향대로 알차게 꾸며보는 거죠! 칙칙하던 공간이 생기가 도는 매력적인 공간으로 바뀔 거예요.',
    img: 'https://www.ikea.com/images/af/2c/af2ccb53e6e988dea92c1a46edf63122.jpg?f=xl',
  },
  {
    id: 4,
    name: '그냥 집이 아닌 다채로운 변화',
    color: '#F7DBC3',
    text: 'black',
    comment:
      '무난하고 평범한 집이 아닌, 내 취향을 가득 담은 집을 만들어 볼까요? IKEA에서는 내 취향을 가장 쉽게, 부담없이 만날 수 있어요. 아주 작은 시도로도 집은 계속 새로워질 수 있답니다.',
    img: 'https://www.ikea.com/images/31/08/3108ef6b3e75d5cae1879b3376da21e7.jpg?f=m',
  },
  {
    id: 5,
    name: '매주 목요일 오후 2시, WEKEA LIVE!',
    color: 'black',
    text: 'white',
    comment:
      '매주 다른 주제의 IKEA Live를 통해 다양한 홈퍼니싱 아이디어를 알아보고 마음에 드는 제품을 쇼핑하세요. 라이브 중 공개되는  🎁스페셜 할인 쿠폰🎁의 기회도 놓치지 마세요!',
    img: 'https://www.ikea.com/images/6d/8c/6d8c01028ce94de30a5af1c3d3940446.jpg?f=m',
  },
];
