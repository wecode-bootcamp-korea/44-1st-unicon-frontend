import React from 'react';
import { Truck, ShoppingBag, Phone, Menu } from 'react-feather';
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
      <div className="grid-wrapper">
        <div className="side-nav-container">
          <Menu />
          <p>메뉴</p>
        </div>
        <div className="nav-center-section">
          <div className="wekea-logo" />
        </div>
        <div />
      </div>
    </div>
  );
};

export default Nav;
