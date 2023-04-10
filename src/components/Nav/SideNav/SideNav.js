import React, { useState } from 'react';
import { ArrowLeft, X, User } from 'react-feather';
import SecondLevelMenus from './SecondLevelMenu/SecondLevelMenus';
import { menuData } from './menuData';
import './SideNav.scss';

const SideNav = ({ navbarOpen, closeNavbar }) => {
  const [navigationState, setNavigationState] = useState({
    topLevelOpen: true,
    secondLevelOpen: false,
    panelOpen: false,
    currentTopLevel: 0,
  });

  const { topLevelOpen, secondLevelOpen, panelOpen, currentTopLevel } =
    navigationState;

  const handleTopLevelClick = id => {
    setNavigationState({
      topLevelOpen: false,
      secondLevelOpen: true,
      currentTopLevel: id,
    });
  };

  const handleMovePrev = () => {
    setNavigationState({
      topLevelOpen: true,
      secondLevelOpen: false,
      panelOpen: false,
    });
  };

  const handleSubMenuClick = () => {
    setNavigationState({
      ...navigationState,
      panelOpen: true,
    });
  };

  const { headerLevelMenu, boldMenus, regMenus } = menuData;

  return (
    <div>
      {navbarOpen ? <div onClick={closeNavbar} className="backdrop" /> : null}
      <div className={navbarOpen ? 'navbar open' : 'navbar'}>
        <span
          className={
            panelOpen
              ? 'navbar-content-container panel-open'
              : 'navbar-content-container'
          }
        >
          <div className="left-column">
            <X width={24} height={24} onClick={closeNavbar} className="icon" />
            {secondLevelOpen && (
              <ArrowLeft onClick={handleMovePrev} className="icon prev" />
            )}
          </div>
          <div className="content">
            <span>
              <div className="wekea-logo" />
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
          {panelOpen && <div className="panel">PANEL</div>}
        </span>
      </div>
    </div>
  );
};

export default SideNav;
