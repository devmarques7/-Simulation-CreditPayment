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
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 100vh;

    padding: 20px;

    button {
      align-items: center;

      width: 100%;

      padding: 10px;
    }

    .notifications {
      display: flex;
      justify-content: center;
      flex-direction: column;

      width: 50vw;
      height: 80%;

      h1 {
        display: flex;
        position: absolute;

        top: 235px;

        color: var(--color-dark);

        font-weight: lighter;
      }

      .notifications-list {
        display: flex;
        justify-content: center;
        flex-direction: column;

        width: 50vw;
        height: 50%;

        border: 1px solid var(--color-dark);
        border-radius: 10px;
      }
    }
  }
`;
