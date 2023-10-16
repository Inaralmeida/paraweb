import styled from "styled-components";

export const StylesRepresentatividade = styled.main`
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

    &.intro {
      max-width: 1120px;
      flex-direction: column;
      text-align: center;
      gap: 24px;
    }

    > .destaque, .data-interviewed{
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    > h3 {
      width: 48%;
      max-width: 350px;
    }

    > .materia {
      column-count: 3;
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

      > h3 {
        width: 100%;
      }

      > .materia {
        column-count: 1;
        column-width: 98%;
        margin-bottom: 24px;
      }
    }
  }
`;
