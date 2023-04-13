import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SideNav from './SideNav/SideNav';
import Drawer from '../Drawer/Drawer';
import Icons from '../Icons/Icons';
import { APIS } from '../../config';
import './Nav.scss';

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState('');

  const handleInput = event => {
    const { value } = event.target;

    setSearchInputValue(value);

    if (value) {
      fetch(`${APIS.search}`, {
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
    }
  };

  const navigate = useNavigate();
  const location = useLocation();

  const pagesWithNoNav =
    location.pathname === '/login' ||
    location.pathname === '/signup' ||
    location.pathname === '/order';

  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');

  const handleButton = () => {
    if (token) {
      if (window.confirm('정말 로그아웃하시겠습니까?')) {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        navigate('/');
      }
    } else {
      navigate('/login');
    }
  };

  if (pagesWithNoNav) return null;

  return (
    <div className="nav">
      <SideNav navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <Drawer drawerOpen={drawerOpen} closeDrawer={() => setDrawerOpen(false)}>
        <div className="drawer-container">
          <div className="section-top">
            <div className="close-container">
              <div
                onClick={() => setDrawerOpen(false)}
                className="drawer-icon-btn"
              >
                <Icons name="X" width={24} height={24} className="close-btn" />
              </div>
            </div>
            <div
              onClick={() => {
                navigate('/login');
                setDrawerOpen(false);
              }}
              className="login-header"
            >
              <div className="header-text">
                {token ? `Hej ${username}!` : 'Hej · 안녕하세요!'}
              </div>
              <div onClick={handleButton} className="login-btn">
                {token ? '로그아웃' : '로그인'}
              </div>
            </div>
          </div>
          {!token && (
            <div className="signup-link-container">
              <div
                onClick={() => {
                  navigate('/signup');
                  setDrawerOpen(false);
                }}
                className="signup-link"
              >
                IKEA 계정 생성하기
              </div>
              <div
                onClick={() => {
                  navigate('/signup');
                  setDrawerOpen(false);
                }}
                className="drawer-icon-btn"
              >
                <Icons name="ChevronRight" width={24} height={24} />
              </div>
            </div>
          )}
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
          <div className="menu-icon-wrapper">
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
        </div>
        <div className="nav-center-section">
          <div className="logo-input-wrapper">
            <div className="wekea-logo" onClick={() => navigate('/')} />

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
                {searchData &&
                  searchData.map(
                    ({
                      id,
                      name,
                      image_url,
                      sub_description,
                      subCategory,
                      mainCategory,
                    }) => (
                      <Link
                        onClick={() => {
                          setSearchInputValue('');
                          setSearchData([]);
                        }}
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
              {token ? (
                <p>{`Hej ${username}!`}</p>
              ) : (
                <>
                  <Icons name="User" width={20} height={20} />
                  <p>Hej! 로그인 또는 가입하기</p>
                </>
              )}
            </div>
            <div className="icon-text-btn">
              <Icons name="Heart" width={20} height={20} />
            </div>
            <div
              onClick={() => {
                navigate('/cart');
              }}
              className="icon-text-btn"
            >
              <Icons name="ShoppingBag" width={20} height={20} />
            </div>
          </span>
        </div>
        <div />
      </div>
      <div className="second-row">
        <div>
          {NAV_FILTER_LINKS.map(link => (
            <div
              onClick={() => setNavbarOpen(true)}
              key={link.id}
              className="nav-filter-link"
            >
              {link.name}
            </div>
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
  },
  {
    id: 2,
    name: '온라인 쇼룸',
  },
  {
    id: 3,
    name: '특별한 가격',
  },
  {
    id: 4,
    name: '홈 액세서리',
  },
  {
    id: 5,
    name: '서비스',
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
