import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClick, children }) => {
  useEffect(() => {
    const handleEscape = e => {
      if (e.code === 'Escape') {
        onClick();
      }
    };
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClick]);

  const handleBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClick();
    }
  };

  return createPortal(
    <ModalBackdrop onClick={handleBackdrop}>
      <ModalWindow>{children}</ModalWindow>
    </ModalBackdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
`;

const ModalWindow = styled.div`
  background-color: white;
  margin: auto;
  padding: 20px;
  width: 60%;
  border-radius: 4px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.5);
  z-index: 150;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
