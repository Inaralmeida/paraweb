import styled from "styled-components";

export const StylesHistory = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  > ul {
    display: flex;
    width: 100%;
  }

  > section {
    width: 100%;
    padding: 24px 50px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    > .author,
    .podcast {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 48px;
      justify-content: space-evenly;
    }

    > .podcast {
      > h3 {
        width: 48%;
        max-width: 350px;
      }

      > .react-audio-player .player {
        width: 48%;
        max-width: 540px;
      }
    }

    /* &.materia {
      width: 80%;
      height: 300px;
      display: flex;
      flex-wrap: wrap;
    } */
    > .text {
      column-count: 2;
      column-width: 48%;
      column-gap: 24px;
      margin-bottom: 24px;
    }

    @media screen and (max-width: 623px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 48px;
      justify-content: space-evenly;

      > .author,
      .podcast {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 48px;
        justify-content: space-evenly;

        > .player,
        > h3 {
          width: 100%;
        }
      }

      > .text {
        column-count: 1;
        column-width: 98%;
        margin-bottom: 24px;
      }
    }
  }
`;
