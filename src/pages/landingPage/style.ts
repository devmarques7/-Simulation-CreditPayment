import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;

  padding: 20px;

  width: 100vw;
  height: 100vh;
  background: var(--color-background);

  .description {
    width: 100%;
    margin-bottom: 60px;

    .title {
      font-size: 25px;
      font-weight: 100;
      color: var(--color-light);
      opacity: 75%;
    }

    .title.up {
      width: 50%;
    }
    .title.down {
      width: 100%;
      margin-right: 10px;
    }
  }
`;
