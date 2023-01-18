import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  background: var(--color-light);

  main {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 100%;
  }
`;
