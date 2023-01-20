import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin: 0 auto;
  margin-bottom: 10px;

  width: 95%;
  min-height: 90px;

  border: 1px solid var(--color-dark);
  border-radius: 10px;

  overflow-y: hidden;

  .test {
    display: none;
  }

  .mark {
    background-color: black;

    width: 20px;
    height: 100%;

    margin-right: 45px;
  }

  .note-description {
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    width: 1000px;
    height: 90%;

    .note-enabled {
      display: flex;
      justify-content: center;
      flex-direction: column;

      width: 120px;
      height: 100%;

      .day {
        opacity: 50%;
      }

      .value {
        font-size: 20px;

        color: var(--color-dark);

        font-weight: lighter;
      }
    }

    .note-disabled {
      display: flex;
      justify-content: space-between;

      width: 95%;
      height: 100%;

      .info {
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        width: 92px;
        height: 100%;
        .day {
          opacity: 50%;
        }

        .value {
          font-size: 20px;

          color: var(--color-dark);

          font-weight: lighter;
        }
      }

      display: none;
    }
  }

  :hover {
    min-height: 120px;

    -webkit-transition: all 5s ease;
    -moz-transition: all 5s ease;
    -ms-transition: all 5s ease;
    -o-transition: all 5s ease;
    transition: all 5s ease;

    background-color: rgb(128, 0, 0, 0.2);

    .mark {
      background-color: var(--color-remove);

      width: 20px;
      height: 100%;

      margin-right: 45px;
    }

    .note-disabled {
      display: flex;
    }
  }
`;
