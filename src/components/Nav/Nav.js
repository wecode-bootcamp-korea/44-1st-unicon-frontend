import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SideNav from './SideNav/SideNav';
import Drawer from '../Drawer/Drawer';
import Icons from '../Icons/Icons';
import './Nav.scss';

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState('');

  const handleInput = event => {
    const { value } = event.target;
    setSearchInputValue(value);

    fetch('http://10.58.52.225:3000/products/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        word: value,
      }),
    })
      .then(response => response.json())
      .then(result => setSearchData(result));
  };

  return (
    <div className="nav">
      <SideNav
        navbarOpen={navbarOpen}
        closeNavbar={() => {
          setNavbarOpen(false);
        }}
      />
      <Drawer drawerOpen={drawerOpen} closeDrawer={() => setDrawerOpen(false)}>
        <div className="drawer-container">
          <div className="section-top">
            <div className="close-container">
              <div className="drawer-icon-btn">
                <Icons name="X" width={24} height={24} className="close-btn" />
              </div>
            </div>
            <div className="close-header">
              <div className="header-text">Hej</div>
              <div className="login-btn">로그인</div>
            </div>
          </div>
          <div className="signup-link-container">
            <div className="signup-link">IKEA 계정 생성하기</div>
            <div className="drawer-icon-btn">
              <Icons name="ChevronRight" width={24} height={24} />
            </div>
          </div>
          <div className="signup-link-container">
            <div className="signup-link">IKEA Business Network 가입하기</div>
            <div className="drawer-icon-btn">
              <Icons name="ChevronRight" width={24} height={24} />
            </div>
          </div>
          <div className="drawer-extra">
            {DRAWER_EXTRA_LINKS.map(link => (
              <div key={link.id} className="extra-link">
                {link.title}
              </div>
            ))}
          </div>
        </div>
      </Drawer>
      <div className="msg-wrapper">
        <div className="icon-text-wrap">
          <div className="icon-text">
            <Icons name="Truck" width={16} height={16} />
            <p>합리적인 배송 요금</p>
          </div>
          <div className="icon-text">
            <Icons name="ShoppingBag" width={16} height={16} />
            <p>베스트셀러</p>
          </div>
          <div className="icon-text">
            <Icons name="Phone" width={16} height={16} />
            <p>쉽고 빠른 주문, 헤이오더</p>
          </div>
        </div>
      </div>
      <div className="center-wrapper">
        <div className="side-nav-container">
          <div
            onClick={() => {
              setNavbarOpen(!navbarOpen);
            }}
            className="menu-icon"
          >
            <Icons name="Menu" width={24} height={24} />
          </div>
          <p>메뉴</p>
        </div>
        <div className="nav-center-section">
          <div className="logo-input-wrapper">
            <div className="wekea-logo" />

            <div className="input-wrapper">
              <input
                onChange={handleInput}
                value={searchInputValue}
                className="input"
                type="text"
                placeholder="검색어 입력"
              />
              <div
                className={`search-result-container ${
                  !searchInputValue.length && `hidden`
                }`}
              >
                {searchData.map(
                  ({
                    id,
                    name,
                    image_url,
                    sub_description,
                    subCategory,
                    mainCategory,
                  }) => (
                    <Link
                      key={id}
                      to={`products/detail/${id}`}
                      style={{
                        textDecoration: 'none',
                      }}
                    >
                      <div className="search-result-item">
                        <div
                          style={{
                            backgroundImage: `url(${image_url})`,
                          }}
                          className="image"
                        />
                        <div className="text-section">
                          <div className="name">{name}</div>
                          <div className="properties">
                            {`${sub_description}, ${subCategory}, ${mainCategory}`}
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
          <span className="btn-container">
            <div
              onClick={() => setDrawerOpen(prev => !prev)}
              className="icon-text-btn"
            >
              <Icons name="User" width={20} height={20} />
              <p>Hej! 로그인 또는 가입하기</p>
            </div>
            <div className="icon-text-btn">
              <Icons name="Heart" width={20} height={20} />
            </div>
            <div className="icon-text-btn">
              <Icons name="ShoppingBag" width={20} height={20} />
            </div>
          </span>
        </div>
        <div />
      </div>
      <div className="second-row">
        <div>
          {NAV_FILTER_LINKS.map(link => (
            <Link key={link.id} path={link.path} className="nav-filter-link">
              {link.name}
            </Link>
          ))}
        </div>
        <span className="btn-container">
          <div className="icon-text-btn">
            <Icons name="Truck" width={20} height={20} />
            <p>우편 번호 입력</p>
          </div>
          <div className="icon-text-btn">
            <Icons name="Home" width={20} height={20} />
            <p>매장 선택</p>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Nav;

const NAV_FILTER_LINKS = [
  {
    id: 1,
    name: '모든 제품',
    path: '/',
  },
  {
    id: 2,
    name: '온라인 쇼룸',
    path: '/',
  },
  {
    id: 3,
    name: '특별한 가격',
    path: '/',
  },
  {
    id: 4,
    name: '홈 액세서리',
    path: '/',
  },
  {
    id: 5,
    name: '서비스',
    path: '/',
  },
];

const DRAWER_EXTRA_LINKS = [
  {
    id: 1,
    title: '구매 내역',
  },
  {
    id: 2,
    title: '위시리스트',
  },
  {
    id: 3,
    title: '플래너',
  },
  {
    id: 4,
    title: '배송 조회',
  },
];
