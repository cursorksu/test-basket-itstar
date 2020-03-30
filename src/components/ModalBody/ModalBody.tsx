import React, { FC } from 'react';
import './ModalBody.scss';


export const ModalBody: FC = () => {
  return (
    <>
      <div className="modal__header">
        <h2 className="modal__title">Discount Coupon</h2>
      </div>
      <div className="modal__body">
        <p className="modal__text">Enter your coupon code if you have one.</p>
        <label htmlFor="bonusCode" className="modal__label">
          <span className="modal__code">code</span>
          <input type="text" className="modal__input" />
        </label>
      </div>
      <button type="button" className="btn modal__btn">
        apply
        <span className="arrow arrow-right">
            &#10140;
        </span>
      </button>
    </>
  );
};
