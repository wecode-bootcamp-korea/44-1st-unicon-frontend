/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
import React from 'react';
import MiniProduct from '../Products/components/MiniProduct';
import Modal from './components/Modal';
import './Products.scss';

const Products = () => {
  fetch('http://10.58.52.225:3000/products/category?sc=3&filter=DESC', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    //query: JSON.stringify({filter:"ASC" }),
    //바디 대신에 query:{"main_"}
  })
    .then(response => response.json())
    .then(data => console.log(data));

  return (
    <div className="product">
      <h1 className="page-title">조명</h1>
      <div className="inner-menu-box">
        {INNER_MENU.map(info => {
          return (
            <div className="inner-menu-item" key={info.id}>
              <img className="img" src={info.img} />
              <p className="text">{info.name}</p>
            </div>
          );
        })}
      </div>
      <div className="product-text-box">
        <h2 className="semi-title">많은 사랑을 받은 조명</h2>
        <p className="semi-text">
          밝기 조절 가능한 등으로 공간을 밝히세요. 온라인 미팅에 참석하거나
          SNS에 올릴
          <br />
          영상을 찍을 때 조명으로도 활용해보세요. 네 가지 색상 온도로 설정할 수
          있으며,
          <br />
          스마트폰을 거치하고 펜, 헤드폰 등을 보관할 수 있어요.
        </p>
      </div>
      <div className="modal-box">
        {FILTER.map(data => {
          return <Modal name={data.name} key={data.id} id={data.id} />;
        })}
      </div>
      <div className="product-box">
        {PRICE.map(data => (
          <MiniProduct
            key={data.id}
            id={data.id}
            name={data.name}
            commit={data.commit}
            price={data.price}
            img={data.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;

const INNER_MENU = [
  {
    id: 1,
    name: '일반 조명',
    img: 'https://www.ikea.com/global/assets/navigation/images/lamps-li002.jpeg?imwidth=400',
  },
  {
    id: 2,
    name: '장식 조명',
    img: 'https://www.ikea.com/kr/ko/navigation/images/decorative-lighting-14971.jpeg?imwidth=400',
  },
  {
    id: 3,
    name: '시스템 조명',
    img: 'https://www.ikea.com/global/assets/navigation/images/integrated-lighting-16280.jpeg?imwidth=400',
  },
  {
    id: 4,
    name: '스마트 조명',
    img: 'https://www.ikea.com/global/assets/navigation/images/smart-lighting-36812.jpeg?imwidth=400',
  },
  {
    id: 5,
    name: '야외용 조명',
    img: 'https://www.ikea.com/global/assets/navigation/images/outdoor-lighting-17897.jpeg?imwidth=400',
  },
  {
    id: 6,
    name: '욕실 조명',
    img: 'https://www.ikea.com/global/assets/navigation/images/bathroom-lighting-10736.jpeg?imwidth=400',
  },
  {
    id: 7,
    name: 'LED 전구',
    img: 'https://www.ikea.com/global/assets/navigation/images/led-bulbs-20514.jpeg?imwidth=400',
  },
];

const FILTER = [
  { id: 1, name: '정렬' },
  { id: 2, name: '베스트셀러' },
  { id: 3, name: '가격' },
  { id: 4, name: '색상' },
];

const PRICE = [
  {
    id: 1,
    name: '일반 조명',
    img: 'https://www.ikea.com/kr/ko/images/products/tagarp-floor-uplighter-black-white__0810840_pe771436_s5.jpg?f=xs',
    commit: '멋진 조명',
    price: 10000,
  },
  {
    id: 2,
    name: '장식 조명',
    img: 'https://www.ikea.com/kr/ko/images/products/forsa-work-lamp-beige__1031615_pe836564_s5.jpg?f=xs',
    commit: '따듯한 조명',
    price: 42000,
  },
  {
    id: 3,
    name: '시스템 조명',
    img: 'https://www.ikea.com/kr/ko/images/products/fado-table-lamp-white__0606976_pe682645_s5.jpg?f=xs',
    commit: '밝다',
    price: 30000,
  },
  {
    id: 4,
    name: '스마트 조명',
    img: 'https://www.ikea.com/kr/ko/images/products/rolfstorp-led-lighting-dimmable__1055094_pe847930_s5.jpg?f=xs',
    commit: '반짝반짝',
    price: 29000,
  },
  {
    id: 5,
    name: '야외용 조명',
    img: 'https://www.ikea.com/kr/ko/images/products/dejsa-table-lamp-beige-opal-white-glass__0967540_pe810183_s5.jpg?f=xxxs',
    commit: '물에 강하다',
    price: 17000,
  },
  {
    id: 6,
    name: '욕실 조명',
    img: 'https://www.ikea.com/kr/ko/images/products/lampan-table-lamp-white__0459937_pe606395_s5.jpg?f=xs',
    commit: '밝은 조명',
    price: 72000,
  },
  {
    id: 7,
    name: 'LED 전구(백색)',
    img: 'https://www.ikea.com/kr/ko/images/products/tokabo-table-lamp-glass-opal-white__0714489_pe730101_s5.jpg?f=xs',
    commit: '꼭 필요한 필수품!',
    price: 13000,
  },
  {
    id: 8,
    name: 'LED 전구(주광색)',
    img: 'https://www.ikea.com/kr/ko/images/products/arstid-table-lamp-brass-white__0609329_pe684454_s5.jpg?f=xs',
    commit: '밝은 빛!',
    price: 18000,
  },
];
