import React from 'react';
import MiniProduct from './MiniProduct';
import { ChevronDown } from 'react-feather';
import './Products.scss';

const Products = () => {
  return (
    <div className="product">
      <div className="inner-menu-box">
        {INNERMENU.map(info => {
          return (
            <div className="inner-menu-item" key={info.id}>
              <div className="img" />
              <p className="text">{info.name}</p>
            </div>
          );
        })}
      </div>
      <div className="filter-menu">
        <button>
          정렬
          <ChevronDown className="filter-icon" />
        </button>
        <button>
          베스트샐러
          <ChevronDown className="filter-icon" />
        </button>
        <button>
          가격
          <ChevronDown className="filter-icon" />
        </button>
        <button>
          색상
          <ChevronDown className="filter-icon" />
        </button>
      </div>
      <div className="product-box">
        {PRICE.map(data => (
          <MiniProduct
            key={data.id}
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

const INNERMENU = [
  { id: 1, name: '일반 조명' },
  { id: 2, name: '장식 조명' },
  { id: 3, name: '시스템 조명' },
  { id: 4, name: '스마트 조명' },
  { id: 5, name: '야외용 조명' },
  { id: 6, name: '욕실 조명' },
  { id: 7, name: 'LED 전구' },
];

const PRICE = [
  {
    id: 8,
    name: '일반 조명',
    img: 'https://www.ikea.com/kr/ko/images/products/pello-armchair-holmby-natural__38296_pe130209_s5.jpg?f=xs',
    commit: '멋진 조명',
    price: 10000,
  },
  {
    id: 9,
    name: '장식 조명',
    img: 'https://www.ikea.com/kr/ko/images/products/pello-armchair-holmby-natural__38296_pe130209_s5.jpg?f=xs',
    commit: '따듯한 조명',
    price: 42000,
  },
  {
    id: 10,
    name: '시스템 조명',
    img: 'https://www.ikea.com/kr/ko/images/products/pello-armchair-holmby-natural__38296_pe130209_s5.jpg?f=xs',
    commit: '밝다',
    price: 30000,
  },
  {
    id: 11,
    name: '스마트 조명',
    img: 'https://www.ikea.com/kr/ko/images/products/pello-armchair-holmby-natural__38296_pe130209_s5.jpg?f=xs',
    commit: '이쁘다',
    price: 29000,
  },
  {
    id: 12,
    name: '야외용 조명',
    img: 'https://www.ikea.com/kr/ko/images/products/pello-armchair-holmby-natural__38296_pe130209_s5.jpg?f=xs',
    commit: '멋지다',
    price: 17000,
  },
  {
    id: 13,
    name: '욕실 조명',
    img: 'https://www.ikea.com/kr/ko/images/products/pello-armchair-holmby-natural__38296_pe130209_s5.jpg?f=xs',
    commit: '굉장해',
    price: 72000,
  },
  {
    id: 14,
    name: 'LED 전구(백색)',
    img: 'https://www.ikea.com/kr/ko/images/products/pello-armchair-holmby-natural__38296_pe130209_s5.jpg?f=xs',
    commit: '사라',
    price: 13000,
  },
  {
    id: 15,
    name: 'LED 전구(주광색)',
    img: 'https://www.ikea.com/kr/ko/images/products/pello-armchair-holmby-natural__38296_pe130209_s5.jpg?f=xs',
    commit: '사라고',
    price: 18000,
  },
];
