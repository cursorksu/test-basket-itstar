import React, { FC, useState } from 'react';
import { CartTotal } from '../CartTotal';
import { CartAgreement } from '../CartAgreement';
import { ButtonsBlock } from '../ButtonsBlock';
import { CartBonus } from '../CartBonus';
import { CartShipping } from '../CartShipping';
import { CartList } from '../CartList';
import './Cart.scss';

interface Props {
  onSubmit(): void;
}


export const Cart: FC<Props> = ({ onSubmit }) => {
  const [priceDiscaunt, setPriceDiscaunt] = useState<number>(0);
  const [priceTotal, setPriceTotal] = useState<number>(0);

  const setSubtotal = (value: number) => {
    setPriceDiscaunt(value);
    setPriceTotal(value + 4.99 + 20);
  };

  return (
    <form action="#" className="cart">
      <CartList subtotal={setSubtotal} />
      <CartTotal>
        <p>
          Price with
          <br className="md-hidden" />
          all discounts:
        </p>
        <p>
          <span>&#36;</span>
          {priceDiscaunt}
        </p>
      </CartTotal>
      <CartBonus />
      <CartShipping />
      <CartAgreement />
      <CartTotal>
        <p>Total:</p>
        <p>
          <span>&#36;</span>
          {priceTotal}
        </p>
      </CartTotal>
      <ButtonsBlock submitForm={onSubmit} />
    </form>
  );
};
