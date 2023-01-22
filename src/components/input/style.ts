import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  width: 100%;
  height: 50px;

  label {
    opacity: 50%;
  }

  input {
    width: 100%;

    margin-top: 5px;
    padding: 10px;

    border-radius: 5px;
  }
`;
