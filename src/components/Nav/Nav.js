import React from 'react';
import { Link } from 'react-router-dom';
import {
  Truck,
  Phone,
  Menu,
  User,
  Heart,
  ShoppingBag,
  Home,
} from 'react-feather';
import './Nav.scss';

const Nav = () => {
  return (
    <div className="nav">
      <div className="msg-wrapper">
        <div className="icon-text-wrap">
          <div className="icon-text">
            <Truck width={16} height={16} />
            <p>합리적인 배송 요금</p>
          </div>
          <div className="icon-text">
            <ShoppingBag width={16} height={16} />
            <p>베스트셀러</p>
          </div>
          <div className="icon-text">
            <Phone width={16} height={16} />
            <p>쉽고 빠른 주문, 헤이오더</p>
          </div>
        </div>
      </div>
      <div className="center-wrapper">
        <div className="side-nav-container">
          <div className="menu-icon">
            <Menu />
          </div>
          <p>메뉴</p>
        </div>
        <div className="nav-center-section">
          <div className="logo-input-wrapper">
            <div className="wekea-logo" />

            <input className="input" type="text" placeholder="검색어 입력" />
          </div>
          <span className="btn-container">
            <div className="icon-text-btn">
              <User width={20} height={20} />
              <p>Hej! 로그인 또는 가입하기</p>
            </div>
            <div className="icon-text-btn">
              <Heart width={20} height={20} />
            </div>
            <div className="icon-text-btn">
              <ShoppingBag width={20} height={20} />
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
            <Truck width={20} height={20} />
            <p>우편 번호 입력</p>
          </div>
          <div className="icon-text-btn">
            <Home width={20} height={20} />
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
