import React, { FC } from 'react';
import './Header.scss';

export const Header: FC = () => {
  // const [isUserMenu, setIsUserMenu] = useState(false);
  // const handleUserMenuToggle = () => {
  //   setIsUserMenu(!isUserMenu);
  // };

  return (
    <header className="header">
      <h2 className="header__title">Shopping Cart</h2>
    </header>
  );
};
