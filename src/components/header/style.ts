import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100vw;
  height: 80px;

  padding: 10px 30px 10px 30px;

  background: var(--color-light);

  -webkit-box-shadow: 0px 10px 20px -12px rgba(0, 0, 0, 0.43);
  -moz-box-shadow: 0px 10px 20px -12px rgba(0, 0, 0, 0.43);
  box-shadow: 0px 10px 20px -12px rgba(0, 0, 0, 0.43);

  .header-title {
    font-size: 40px;

    color: var(--color-backround);
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0;

    width: 90px;
    height: 40px;

    padding: 10px;
  }
`;
