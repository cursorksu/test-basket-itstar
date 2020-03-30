import React, { FC } from 'react';
import './CartBonus.scss';

export const CartBonus: FC = () => {
  return (
    <fieldset className="cart__bonus">
      <h3 className="cart__subtitle">
        Chose your bonus,
        <br className="md-hidden" />
        it`s free!
        <span className="cart__sub-price">
          <span className="cart__free">free</span>
        </span>
      </h3>
      <p className="cart__caption">
        {
          `Each item in the basket increases the size of the bonus products.
          Update your product to increase the number of items in rebate.`
        }
      </p>


      <div className="bonus__item">
        <input
          className="bonus__radio"
          type="radio"
          name="bonus"
          id="bonusFirst"
        />

        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="bonusFirst" className="bonus__label">
          <span className="bonus__radio--circle">
            <svg width="13px" height="12px" viewBox="0 0 13 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.8593 1.57828L11.1387 0.0661648C11.0859 0.0194709 11.0157 -0.00427397 10.9464 0.000634193C10.8763 0.00527705 10.8107 0.0375117 10.7643 0.0904403L4.52352 7.19348L2.3045 4.25641C2.26218 4.20043 2.19917 4.16342 2.12953 4.15387C2.06002 4.14352 1.98905 4.16236 1.93307 4.20494L0.105375 5.58559C-0.0114919 5.67394 -0.0347062 5.84029 0.0536408 5.95715L4.16244 11.3954C4.21046 11.4589 4.28474 11.4977 4.36434 11.5006C4.36752 11.5006 4.37083 11.5006 4.37402 11.5006C4.45016 11.5006 4.52286 11.468 4.5734 11.4104L12.8833 1.95262C12.9802 1.84265 12.9694 1.67485 12.8593 1.57828L12.8593 1.57828Z" id="Shape" fill="#E8F0F9" stroke="none" />
            </svg>
          </span>
          <span className="bonus__img">
            <img src="/images/product-3.jpg" alt="product" />
          </span>
          <span className="bonus__text">ASOS Skinny Band Felt Floppy Hat</span>
        </label>
      </div>

      <div className="bonus__item">
        <input
          className="bonus__radio"
          type="radio"
          name="bonus"
          id="bonusSecond"
        />

        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="bonusSecond" className="bonus__label">
          <span className="bonus__radio--circle">
            <svg width="13px" height="12px" viewBox="0 0 13 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.8593 1.57828L11.1387 0.0661648C11.0859 0.0194709 11.0157 -0.00427397 10.9464 0.000634193C10.8763 0.00527705 10.8107 0.0375117 10.7643 0.0904403L4.52352 7.19348L2.3045 4.25641C2.26218 4.20043 2.19917 4.16342 2.12953 4.15387C2.06002 4.14352 1.98905 4.16236 1.93307 4.20494L0.105375 5.58559C-0.0114919 5.67394 -0.0347062 5.84029 0.0536408 5.95715L4.16244 11.3954C4.21046 11.4589 4.28474 11.4977 4.36434 11.5006C4.36752 11.5006 4.37083 11.5006 4.37402 11.5006C4.45016 11.5006 4.52286 11.468 4.5734 11.4104L12.8833 1.95262C12.9802 1.84265 12.9694 1.67485 12.8593 1.57828L12.8593 1.57828Z" id="Shape" fill="#E8F0F9" stroke="none" />
            </svg>
          </span>
          <span className="bonus__img">
            <img src="/images/product-4.jpg" alt="product" />
          </span>
          <span className="bonus__text">H&M Polo Shirt</span>
        </label>
      </div>

      <div className="bonus__item">
        <input
          className="bonus__radio"
          type="radio"
          name="bonus"
          id="bonusThird"
        />

        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="bonusThird" className="bonus__label">
          <span className="bonus__radio--circle">
            <svg width="13px" height="12px" viewBox="0 0 13 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.8593 1.57828L11.1387 0.0661648C11.0859 0.0194709 11.0157 -0.00427397 10.9464 0.000634193C10.8763 0.00527705 10.8107 0.0375117 10.7643 0.0904403L4.52352 7.19348L2.3045 4.25641C2.26218 4.20043 2.19917 4.16342 2.12953 4.15387C2.06002 4.14352 1.98905 4.16236 1.93307 4.20494L0.105375 5.58559C-0.0114919 5.67394 -0.0347062 5.84029 0.0536408 5.95715L4.16244 11.3954C4.21046 11.4589 4.28474 11.4977 4.36434 11.5006C4.36752 11.5006 4.37083 11.5006 4.37402 11.5006C4.45016 11.5006 4.52286 11.468 4.5734 11.4104L12.8833 1.95262C12.9802 1.84265 12.9694 1.67485 12.8593 1.57828L12.8593 1.57828Z" id="Shape" fill="#E8F0F9" stroke="none" />
            </svg>
          </span>
          <span className="bonus__text">Thank, no bonuses</span>
        </label>
      </div>
    </fieldset>
  );
};
