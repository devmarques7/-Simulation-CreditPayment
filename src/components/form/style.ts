import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  width: 50vw;
  max-width: 524px;
  height: 75%;

  h1 {
    color: var(--color-dark);

    font-weight: lighter;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;

  width: 70%;
  height: 100%;

  .select-installments {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    width: 100%;
    height: 50px;

    label {
      opacity: 50%;
    }

    #installments {
      width: 100%;

      margin-top: 5px;
      padding: 10px;

      border-radius: 5px;
    }
  }

  .select-day {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    width: 100%;
    height: 50px;

    label {
      opacity: 50%;
    }

    .container-select {
      display: flex;
      width: 100%;
      height: 90px;

      #days {
        width: 100%;

        margin-top: 5px;
        padding: 10px;

        border-radius: 5px;
      }
    }
  }
`;
