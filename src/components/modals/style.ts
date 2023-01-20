import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;

  .toast-modal {
    .toast-header {
      display: flex;
      justify-content: space-between;
    }
  }
`;
