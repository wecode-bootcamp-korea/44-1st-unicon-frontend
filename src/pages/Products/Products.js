import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MiniProduct from '../Products/components/MiniProduct';
import Modal from './components/Modal';
import './Products.scss';

const Products = () => {
  const [innerMenu, setInnerMenu] = useState([]);
  const [openModalId, setOpenModalId] = useState(0);

  const [productsData, setProductsData] = useState([]);

  // TODO : 차후 백앤드와 통신을 할 때 사용할 코드입니다! 잠시 주석처리 하겠습니다!
  useEffect(() => {
    fetch('http://10.58.52.225:3000/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      //query: JSON.stringify({filter:"ASC" }),
      //바디 대신에 query:{"main_"}
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProductsData(data);
      });
  }, []);

  useEffect(() => {
    fetch('/data/ProductsData/innerMenu.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setInnerMenu(data);
      });
  }, []);

  // const [price, setPrice] = useState([]);

  // fetch('data/ProductsData/price.json', {
  //   method: 'GET',
  // })
  //   .then(res => res.json())
  //   .then(data => {
  //     setPrice(data);
  //   });

  const { id, image_url, names, price, sub_description } = productsData;

  return (
    <div className="products">
      <h1 className="page-title">조명</h1>
      <div className="inner-menu-box">
        {innerMenu.map(info => {
          return (
            <div className="inner-menu-item" key={info.id}>
              <img className="img" src={info.img} alt="img" />
              <p className="text">{info.name}</p>
            </div>
          );
        })}
      </div>
      <div className="products-text-box">
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
        {FILTER_BTN.map(data => {
          return (
            <Modal
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
        {/** id, image_url, names, price, sub_description */}
        {productsData?.map(({ id, names, sub_description, price, img_url }) => (
          <Link key={id} to={`/products/detail/${id}`}>
            <MiniProduct
              // productsData={productsData}
              id={id}
              names={names}
              sub_description={sub_description}
              price={price}
              img={img_url}
            />
          </Link>
        ))}
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
