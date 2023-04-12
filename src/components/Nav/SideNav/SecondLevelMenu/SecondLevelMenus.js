import React from 'react';
import { menuData } from '../menuData';
import './SecondLevelMenus.scss';

const SecondLevelMenus = ({ currentTopMenu, handleSubMenuClick }) => {
  const { headerLevelMenu } = menuData;
  return (
    <div>
      <div className="second-level-header">
        {headerLevelMenu[currentTopMenu - 1].name}
      </div>
      {currentTopMenu &&
        headerLevelMenu[currentTopMenu - 1].sub.map(menu => (
          <React.Fragment key={menu.id}>
            <div
              onClick={() => {
                handleSubMenuClick(menu.id);
              }}
              className="second-level-menus"
            >
              {menu.name}
            </div>
          </React.Fragment>
        ))}
    </div>
  );
};

export default SecondLevelMenus;
