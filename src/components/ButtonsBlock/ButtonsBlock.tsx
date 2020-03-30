import React, { FC } from 'react';
import './ButtonsBlock.scss';

interface Props {
  submitForm(): void;
}

export const ButtonsBlock: FC<Props> = ({ submitForm }) => {
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    submitForm();
  };

  return (
    <div className="buttons flex-container">
      <button
        className="btn btn__light"
        type="button"
      >
        <span className="arrow arrow-left">
          &#10140;
        </span>
          Continue shopping
      </button>
      <button
        onClick={handleSubmit}
        className="btn btn__submit"
        type="button"
      >
        Confirm data
        <span className="arrow arrow-right">
          &#10140;
        </span>
      </button>
    </div>
  );
};
