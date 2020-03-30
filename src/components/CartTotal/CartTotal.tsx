import React, { FC } from 'react';
import './CartTotal.scss';

export const CartTotal: FC = ({ children }) => {
  return (
    <div className="cart__total">
      {children}
    </div>
  );
};
