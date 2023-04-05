import React from 'react';
import { menuData } from '../menuData';
import './SecondLevelMenus.scss';

const SecondLevelMenus = ({ currentTopMenu, handleSubMenuClick }) => {
  const { headerLevelMenu } = menuData;
  return (
    <div>
      {currentTopMenu &&
        headerLevelMenu[currentTopMenu - 1].sub.map(menu => (
          <div
            onClick={handleSubMenuClick}
            key={menu.id}
            className="second-level-menus"
          >
            {menu.name}
          </div>
        ))}
    </div>
  );
};

export default SecondLevelMenus;
