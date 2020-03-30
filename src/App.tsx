import React, { FC, useState } from 'react';
import { Modal } from './components/Modal';
import { ModalBody } from './components/ModalBody';
import { Header } from './components/Header';
import { Catalogue } from './components/Catalogue';
import { CustomBreadCrumbs } from './components/CustomBreadCrumbs';
import { Cart } from './components/Cart';

import './styles/reset.scss';
import './styles/App.scss';

export const App: FC = () => {
  const width = window.innerWidth;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="container">
      {(width < 998) && (
        <>
          <button
            onClick={handleMenuOpen}
            type="button"
            className="open-menu"
          >
            Categories
            <span className="open-menu__arrow nav__arrow" />
          </button>
          {isMenuOpen && <Catalogue menuClose={handleMenuClose} />}
        </>
      )}

      <Catalogue extraClass="desktop" />
      <main className="main">
        <CustomBreadCrumbs />
        <Header />
        <Cart onSubmit={openModal} />
      </main>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <ModalBody />
        </Modal>
      )}
    </div>
  );
};
