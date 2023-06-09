import React, { useState } from 'react';
import { ArrowLeft, X, ChevronRight } from 'react-feather';
import { useNavigate, Link } from 'react-router-dom';
import SecondLevelMenus from './SecondLevelMenu/SecondLevelMenus';
import { menuData } from './menuData';
import './SideNav.scss';

const SideNav = ({ navbarOpen, setNavbarOpen }) => {
  const [navigationState, setNavigationState] = useState({
    topLevelOpen: true,
    secondLevelOpen: false,
    panelOpen: false,
    currentTopLevel: 0,
  });

  const navigate = useNavigate();

  const { topLevelOpen, secondLevelOpen, panelOpen, currentTopLevel } =
    navigationState;

  const handleTopLevelClick = id => {
    if (id === 1 || id === 3) {
      setNavigationState({
        topLevelOpen: false,
        secondLevelOpen: true,
        currentTopLevel: id,
      });
    } else if (id === 2) {
      navigate('/showroom');
      setNavbarOpen(false);
    } else {
      return;
    }
  };

  const handleMovePrev = () => {
    setNavigationState({
      topLevelOpen: true,
      secondLevelOpen: false,
      panelOpen: false,
    });
  };

  const handleSubMenuClick = id => {
    setNavigationState({
      ...navigationState,
      panelOpen: true,
    });
  };

  const { headerLevelMenu, boldMenus, regMenus } = menuData;

  return (
    <div>
      {navbarOpen ? (
        <div onClick={() => setNavbarOpen(false)} className="backdrop" />
      ) : null}
      <div className={navbarOpen ? 'navbar open' : 'navbar'}>
        <span
          className={
            panelOpen
              ? 'navbar-content-container panel-open'
              : 'navbar-content-container'
          }
        >
          <div className="left-column">
            <X
              width={24}
              height={24}
              onClick={() => setNavbarOpen(false)}
              className="icon"
            />
            {secondLevelOpen && (
              <ArrowLeft onClick={handleMovePrev} className="icon prev" />
            )}
          </div>
          <div className="content">
            <span>
              <div
                onClick={() => {
                  navigate('/');
                  setNavbarOpen(false);
                }}
                className="wekea-logo"
              />
            </span>
            <div className="menus">
              {/* 메뉴 최상단 레벨일 경우 아래 부분 렌더 */}
              {topLevelOpen && (
                <>
                  <div className="header-level-menus">
                    {headerLevelMenu.map(menu => (
                      <div
                        onClick={() => handleTopLevelClick(menu.id)}
                        key={menu.id}
                      >
                        {menu.name}
                      </div>
                    ))}
                  </div>
                  <div className="bold-menus">
                    {boldMenus.map(menu => (
                      <div key={menu.id}>{menu.name}</div>
                    ))}
                  </div>
                  <div className="reg-menus">
                    {regMenus.map(menu => (
                      <div key={menu.id}>{menu.name}</div>
                    ))}
                  </div>
                </>
              )}
              {/* 메뉴 2번째 레벨일 경우 아래 부분 렌더 */}
              {secondLevelOpen && (
                <SecondLevelMenus
                  handleSubMenuClick={handleSubMenuClick}
                  currentTopMenu={currentTopLevel}
                />
              )}
            </div>
          </div>
          {panelOpen && (
            <div className="panel">
              <div className="chevron-container">
                <ChevronRight />
              </div>
              <div className="text-section">
                <div className="header">가구</div>
                {FURNITURE_PAGES_LINK.map(link => (
                  <Link
                    onClick={() => setNavbarOpen(false)}
                    to={link.path}
                    key={link.id}
                    className="category"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </span>
      </div>
    </div>
  );
};

export default SideNav;

const FURNITURE_PAGES_LINK = [
  {
    id: 1,
    name: '소파',
    path: '/products?mainCategory=1',
  },
  {
    id: 2,
    name: '의자',
    path: '/products?mainCategory=2',
  },
  {
    id: 3,
    name: '조명',
    path: '/products?mainCategory=3',
  },
];
