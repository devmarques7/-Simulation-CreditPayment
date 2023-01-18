import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 80%;
  height: 50%;

  h1 {
    color: var(--color-dark);

    font-weight: lighter;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  width: 50%;
  height: 100%;

  .select {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    width: 80%;
    height: 50px;

    label {
      opacity: 50%;
    }

    #installments {
      width: 60%;

      margin-top: 5px;
      padding: 10px;

      border-radius: 5px;
    }
  }
`;
