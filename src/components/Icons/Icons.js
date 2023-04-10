import React from 'react';
import {
  Truck,
  Phone,
  Menu,
  Heart,
  User,
  ShoppingBag,
  Home,
  X,
  ChevronRight,
} from 'react-feather';

const Icons = ({ name, width, height, className = '' }) => {
  const iconList = {
    X: <X width={width} height={height} className={className} />,
    ChevronRight: (
      <ChevronRight width={width} height={height} className={className} />
    ),
    Home: <Home width={width} height={height} className={className} />,
    Truck: <Truck width={width} height={height} className={className} />,
    Phone: <Phone width={width} height={height} className={className} />,
    Menu: <Menu width={width} height={height} className={className} />,
    User: <User width={width} height={height} className={className} />,
    Heart: <Heart width={width} height={height} className={className} />,
    ShoppingBag: (
      <ShoppingBag width={width} height={height} className={className} />
    ),
  };

  return <div>{iconList[name]}</div>;
};

export default Icons;
