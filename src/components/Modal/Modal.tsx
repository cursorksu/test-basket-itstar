import React, { FC, useEffect, useRef } from 'react';
import './Modal.scss';

interface Props {
  onClose(): void;
}

export const Modal: FC<Props> = ({
  onClose,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const handleClick = (e: Event) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  return (
    <div className="modal__backdrop">
      <div
        className="modal__wrapper"
        ref={ref}
      >
        <button type="button" className="modal__close" onClick={onClose}>
          <svg width="10px" height="10px" viewBox="0 0 10 10" version="1.1">
            <path d="M8.3772 0.0598547C8.2974 -0.0199516 8.16677 -0.0199516 8.08696 0.0598547L5.12556 3.02126C5.04575 3.10107 4.91512 3.10107 4.83531 3.02126L1.87396 0.0598547C1.79416 -0.0199516 1.66353 -0.0199516 1.58372 0.0598547L0.0598547 1.58366C-0.0199516 1.66347 -0.0199516 1.7941 0.0598547 1.8739L3.02126 4.83531C3.10107 4.91512 3.10107 5.04575 3.02126 5.12555L0.0598547 8.08696C-0.0199516 8.16677 -0.0199516 8.2974 0.0598547 8.3772L1.58366 9.90101C1.66347 9.98082 1.7941 9.98082 1.8739 9.90101L4.83531 6.93961C4.91512 6.8598 5.04575 6.8598 5.12556 6.93961L8.08691 9.90096C8.16671 9.98076 8.29734 9.98076 8.37715 9.90096L9.90096 8.37715C9.98076 8.29734 9.98076 8.16671 9.90096 8.08691L6.93961 5.12555C6.8598 5.04575 6.8598 4.91512 6.93961 4.83531L9.90096 1.87396C9.98076 1.79416 9.98076 1.66353 9.90096 1.58372L8.3772 0.0598547L8.3772 0.0598547Z" id="Shape" fill="#333333" stroke="none" />
          </svg>
        </button>
        <div className="modal__content">
          {children}
        </div>
      </div>
    </div>
  );
};
