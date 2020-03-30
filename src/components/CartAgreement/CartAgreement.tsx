import React, { FC, useState } from 'react';
import './CartAgreement.scss';

export const CartAgreement: FC = () => {
  const [isChecked, setIsChecked] = useState<boolean|undefined>(undefined);

  const handleChange = () => {
    setIsChecked(isChecked ? undefined : true);
  };

  return (
    <fieldset className="cart__bonus agreement">
      <h3 className="cart__sub-title">
        <span>
Include delivery insurance, USD
          <span className="cart__value">4.99</span>
        </span>
        <span className="cart__sub-price">$4.99</span>
      </h3>
      <input
        onChange={handleChange}
        checked={isChecked}
        className="cart__checkbox"
        type="checkbox"
        name="checkbox"
        id="agreement"
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="label agreement__label" htmlFor="agreement">
        <span className="label__checkbox--square">
          <svg width="13px" height="12px" viewBox="0 0 13 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.8593 1.57828L11.1387 0.0661648C11.0859 0.0194709 11.0157 -0.00427397 10.9464 0.000634193C10.8763 0.00527705 10.8107 0.0375117 10.7643 0.0904403L4.52352 7.19348L2.3045 4.25641C2.26218 4.20043 2.19917 4.16342 2.12953 4.15387C2.06002 4.14352 1.98905 4.16236 1.93307 4.20494L0.105375 5.58559C-0.0114919 5.67394 -0.0347062 5.84029 0.0536408 5.95715L4.16244 11.3954C4.21046 11.4589 4.28474 11.4977 4.36434 11.5006C4.36752 11.5006 4.37083 11.5006 4.37402 11.5006C4.45016 11.5006 4.52286 11.468 4.5734 11.4104L12.8833 1.95262C12.9802 1.84265 12.9694 1.67485 12.8593 1.57828L12.8593 1.57828Z" id="Shape" fill="#E8F0F9" stroke="none" />
          </svg>
        </span>
        <span className="agreement__text">You pay for each package in case they are sent separately.</span>
      </label>
    </fieldset>
  );
};
