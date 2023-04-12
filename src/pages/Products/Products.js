import React, { useState, useEffect } from 'react';
import {
  Link,
  useLocation,
  useSearchParams,
  ShoppingCart,
} from 'react-router-dom';
import MiniProduct from '../Products/components/MiniProduct';
import ChipModal from './components/ChipModal';
import { APIS } from '../../config';
import './Products.scss';

const Products = () => {
  const [openModalId, setOpenModalId] = useState(0);
  const [productsData, setProductsData] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const queryString = location.search;

  useEffect(() => {
    fetch(`http://10.58.52.225:3000/products${queryString}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(data => {
        setProductsData(data);
      });
  }, [queryString]);

  //location.search -> 백앤드가 보내준 주소 '?mainCategory=순번'
  //주소의 순번 === TOP_TEXT의 id 번호
  //바뀌어야 하는 값에 {}를 사용해서 동적으로 바꾸기

  // const locationHandle = () => {
  //   if (location.search === '?mainCategory=1') {
  //     return '무었을 넣어야 할까..';
  //   } else if (location.search === '?mainCategory=2') {
  //     return '무었을 넣어야 할까..';
  //   } else if (location.search === '?mainCategory=3') {
  //     return '무었을 넣어야 할까..';
  //   }
  // };

  // console.log(pricefilter);
  // console.log(location.search);
  console.log(Object.keys(TOP_TEXT));

  const currentCategory = searchParams.get('mainCategory');

  console.log(currentCategory);

  return (
    <div className="products">
      {/* {currentCategory === Object.keys(TOP_TEXT) &&
        TOP_TEXT.map(({ id, title, sub_title, contents }) => {
          return (
            <div key={id} className="category-explain">
              <h1 className="page-title">{title}</h1>
              <div className="products-text-box">
                <h2 className="semi-title">{sub_title}</h2>
                <p className="semi-text">{contents}</p>
              </div>
            </div>
          );
        })} */}
      <div key={TOP_TEXT[currentCategory - 1].id} className="category-explain">
        <h1 className="page-title">{TOP_TEXT[currentCategory - 1].title}</h1>
        <div className="products-text-box">
          <h2 className="semi-title">
            {TOP_TEXT[currentCategory - 1].sub_title}
          </h2>
          <p className="semi-text">{TOP_TEXT[currentCategory - 1].contents}</p>
        </div>
      </div>
      {/* {TOP_TEXT.map(({ id, title }) => {
        return (
          <h1 key={id} className="page-title">
            {title}
          </h1>
        );
      })}

      <div className="products-text-box">
        {TOP_TEXT.map(({ id, sub_title }) => {
          return (
            <h2 key={id} className="semi-title">
              {sub_title}
            </h2>
          );
        })}
        {TOP_TEXT.map(({ id, contents }) => {
          return (
            <p key={id} className="semi-text">
              {contents}
            </p>
          );
        })}
      </div> */}

      {/* <div className="category-explain">
        <h1 className="page-title">
          {location.search === '?mainCategory=1' && TOP_TEXT[1].title}
          {location.search === '?mainCategory=2' && TOP_TEXT[2].title}
          {location.search === '?mainCategory=3' && TOP_TEXT[3].title}
        </h1>

        <div className="products-text-box">
          <h2 className="semi-title">
            {location.search === '?mainCategory=1' && TOP_TEXT[1].sub_title}
            {location.search === '?mainCategory=2' && TOP_TEXT[2].sub_title}
            {location.search === '?mainCategory=3' && TOP_TEXT[3].sub_title}
          </h2>
          <p className="semi-text">
            {location.search === '?mainCategory=1' && TOP_TEXT[1].contents}
            {location.search === '?mainCategory=2' && TOP_TEXT[2].contents}
            {location.search === '?mainCategory=3' && TOP_TEXT[3].contents}
          </p>
        </div>
      </div> */}

      <div className="chip-modal-box">
        {FILTER_BTN.map(data => {
          return (
            <ChipModal
              setOpenModalId={setOpenModalId}
              openModalId={openModalId}
              name={data.name}
              key={data.id}
              id={data.id}
            />
          );
        })}
      </div>
      <div className="products-box">
        {productsData.length > 0 &&
          productsData.map(
            ({ id, names, sub_description, price, image_url }) => (
              <div key={id}>
                <Link
                  to={`/products/detail/${id}`}
                  className="mini-product-link"
                >
                  <MiniProduct
                    id={id}
                    names={names}
                    sub_description={sub_description}
                    price={price}
                    image_url={image_url}
                  />
                </Link>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default Products;

const FILTER_BTN = [
  { id: 1, name: '정렬' },
  { id: 2, name: '베스트셀러' },
  { id: 3, name: '가격' },
  { id: 4, name: '색상' },
];

const TOP_TEXT = [
  {
    id: 1,
    title: '소파',
    sub_title: '소파 고르는 팁',
    contents:
      '소파를 고를 때는 신경 쓸 부분이 너무 많습니다. 내 공간에도 어울려야 하고, 편해야겠죠? 오랜 세월을 함께할 가구인만큼, 충분히 고려하고 비교해 보세요.',
  },
  {
    id: 2,
    title: '의자',
    sub_title: '모든 면이 만족스러운 의자',
    contents:
      '날렵한 디자인이 돋보이는 스타일리시한 ÖSTANÖ 외스타뇌 의자를 만나보세요. 프레임도 튼튼하고 등받이도 편안해 안정적으로 몸을 받쳐줍니다. 가격 또한 아주 착한 보석 같은 제품이지요.',
  },
  {
    id: 3,
    title: '조명',
    sub_title: '공간을 은은하게 밝혀주는 새로운 탁상스탠드',
    contents:
      '은은한 빛으로 방의 분위기를 연출할 수 있는 푹신한 구름 모양의 조명은 어떠세요? 조명이 켜져 있지 않을 때도 재미를 선사해주죠.',
  },
];
