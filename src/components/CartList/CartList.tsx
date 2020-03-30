import React, {
  ChangeEvent, FC, useState, useEffect,
} from 'react';
import { CartSelect } from '../CartSelect';
import { goods } from '../../constants/data';
import './CartList.scss';

interface Props {
  subtotal(value: number): void;
}

export const CartList: FC<Props> = ({ subtotal }) => {
  const preparedGood: PreparedGood[] = goods.map(good => {
    return {
      ...good,
      quantity: '1',
      totalPrice: good.price,
    };
  });
  const [goodsList, setGoodsList] = useState<PreparedGood[]>(preparedGood);
  const setQuantity = (event: ChangeEvent<{ name?: string; value: string|unknown }>) => {
    const newGoods = preparedGood.map(good => {
      if (event.target.name === good.id) {
        return {
          ...good,
          quantity: event.target.value || '',
          totalPrice: Number((Number(event.target.value) * good.price).toFixed(2)),
        };
      }

      const goodItem = goodsList.find(item => event.target.name !== item.id) as PreparedGood;

      return {
        ...goodItem,
      };
    });

    setGoodsList(newGoods);
  };

  useEffect(() => {
    const subTotal = goodsList.reduce((acc, { quantity, price }) => {
      return acc + Number(quantity) * price;
    }, 0).toFixed(2);

    subtotal(+subTotal);
  }, [goodsList, subtotal]);

  const onDelete = (id: string) => {
    const newList = goodsList.filter(good => good.id !== id);

    setGoodsList(newList);
  };

  return (
    <fieldset className="cart__list">
      <table className="goods">
        <thead>
          <tr className="goods__head">
            <th className="goods__th goods__product">PRODUCT</th>
            <th className="goods__th goods__cell">QUANTITY</th>
            <th className="goods__th goods__cell">PER PACK</th>
            <th className="goods__th goods__cell">SUBTOTAL</th>
            <th className="goods__th goods__del">del</th>
          </tr>
        </thead>
        <tbody>
          {goodsList.map(({
            id,
            img,
            title,
            price,
            totalPrice,
          }) => (
            <tr key={title} className="goods__tr">
              <td className="goods__td goods__product">
                <span className="image">
                  <img
                    src={img}
                    alt={title}
                    className="image__content"
                  />
                </span>
                <span className="cart__good">{title}</span>
              </td>
              <td className="goods__td goods__cell goods__select">
                <CartSelect id={id} onSelect={setQuantity} />
              </td>
              <td className="goods__td goods__cell goods__price">
                <span className="md-hidden">$</span>
                {price}
              </td>
              <td className="goods__td goods__cell goods__price-total">
                <span className="md-hidden">$</span>
                {totalPrice}
              </td>
              <td className="goods__td goods__del">
                <button type="button" className="btn__del" onClick={() => onDelete(id)}>
                  <svg width="10px" height="10px" viewBox="0 0 10 10" version="1.1">
                    <path d="M8.3772 0.0598547C8.2974 -0.0199516 8.16677 -0.0199516 8.08696 0.0598547L5.12556 3.02126C5.04575 3.10107 4.91512 3.10107 4.83531 3.02126L1.87396 0.0598547C1.79416 -0.0199516 1.66353 -0.0199516 1.58372 0.0598547L0.0598547 1.58366C-0.0199516 1.66347 -0.0199516 1.7941 0.0598547 1.8739L3.02126 4.83531C3.10107 4.91512 3.10107 5.04575 3.02126 5.12555L0.0598547 8.08696C-0.0199516 8.16677 -0.0199516 8.2974 0.0598547 8.3772L1.58366 9.90101C1.66347 9.98082 1.7941 9.98082 1.8739 9.90101L4.83531 6.93961C4.91512 6.8598 5.04575 6.8598 5.12556 6.93961L8.08691 9.90096C8.16671 9.98076 8.29734 9.98076 8.37715 9.90096L9.90096 8.37715C9.98076 8.29734 9.98076 8.16671 9.90096 8.08691L6.93961 5.12555C6.8598 5.04575 6.8598 4.91512 6.93961 4.83531L9.90096 1.87396C9.98076 1.79416 9.98076 1.66353 9.90096 1.58372L8.3772 0.0598547L8.3772 0.0598547Z" id="Shape" fill="#333333" stroke="none" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </fieldset>
  );
};
