import React from 'react';
import './Drawer.scss';

const Drawer = ({ closeDrawer, drawerOpen, children }) => {
  return (
    <div>
      {drawerOpen && <div onClick={closeDrawer} className="backdrop" />}
      <div className={`drawer ${drawerOpen && `open`}`}>{children}</div>
    </div>
  );
};

export default Drawer;
