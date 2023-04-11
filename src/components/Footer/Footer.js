import React from 'react';
import { FOOTER_LINKS_DATA } from './footerData';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="row-top">
        <div className="section-left">
          <div className="header">WEKEA Family</div>
          <div className="text">
            지금 WEKEA Family에 무료로 가입하고 다양한 멤버 전용 혜택을
            누리세요.
          </div>
          <div className="link">자세히 보기</div>
          <div className="button">WEKEA Family 가입하기</div>
          <div className="header">WEKEA Business Network 가입하기</div>
          <div className="text">
            여러분의 더 나은 비즈니스 환경을 위한 다양한 혜택들을 받으세요.
          </div>
          <div className="link">자세히 보기</div>
          <div className="button">WEKEA Business Network 가입하기</div>
        </div>
        <div className="section-right">
          {FOOTER_LINKS_DATA.map(({ id, header, subMenu }) => (
            <div key={id} className="column">
              <div className="header">{header}</div>
              {subMenu.map(({ id, menu }) => (
                <div key={id} className="text">
                  {menu}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
