import React from 'react';
import {
  ArrowRight,
  Lock,
  CreditCard,
  Truck,
  Phone,
  Menu,
  MoreHorizontal,
  Heart,
  User,
  Tool,
  ShoppingBag,
  Home,
  X,
  ChevronRight,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
} from 'react-feather';

const Icons = ({ name, width, height, className = '' }) => {
  const iconList = {
    ArrowRight: (
      <ArrowRight width={width} height={height} className={className} />
    ),
    Lock: <Lock width={width} height={height} className={className} />,
    CreditCard: (
      <CreditCard width={width} height={height} className={className} />
    ),
    MoreHorizontal: (
      <MoreHorizontal width={width} height={height} className={className} />
    ),
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
    Tool: <Tool width={width} height={height} className={className} />,
    ShoppingBag: (
      <ShoppingBag width={width} height={height} className={className} />
    ),
    Facebook: <Facebook width={width} height={height} className={className} />,
    Instagram: (
      <Instagram width={width} height={height} className={className} />
    ),
    Youtube: <Youtube width={width} height={height} className={className} />,
    MessageCircle: (
      <MessageCircle width={width} height={height} className={className} />
    ),
  };

  return <div>{iconList[name]}</div>;
};

export default Icons;
