import React from 'react';
import { useContext } from 'react';
import Toast from 'react-bootstrap/Toast';
import { AppContext } from '../../context';
import { Container } from './style';

const ToastModal = () => {
  const { show, toggleShow, ErrMessage } = useContext(AppContext);
  return (
    <Container>
      <Toast
        show={show}
        onClose={() => toggleShow(false)}
        className="toast-modal"
      >
        <Toast.Header>
          <strong className="mr-auto">Message</strong>
        </Toast.Header>
        <Toast.Body>{ErrMessage}</Toast.Body>
      </Toast>
    </Container>
  );
};

export default ToastModal;
