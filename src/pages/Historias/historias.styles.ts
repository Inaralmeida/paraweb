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
    align-items: flex-start;
    gap: 24px;

    &.title {
      justify-content: center;
    }
    > .author {
      width: 50%;
      max-width: 750px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 48px;
    }

    &.content {
      max-width: 1200px;
    }
    > .podcast {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 12px;
    }

    > .materia {
      width: 50%;
      height: auto;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
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
      padding: 24px;

      > .author,
      .podcast,
      .materia {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 48px;
        justify-content: space-evenly;
        text-align: center;

        > .player,
        > h3 {
          width: 100%;
          text-align: center;
        }
      }

      > .author {
        width: 60%;
      }
      > .text {
        text-align: center;
        column-count: 1;
        column-width: 98%;
        margin-bottom: 24px;
      }
    }
  }
`;
