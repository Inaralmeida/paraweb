import styled from "styled-components";

export const StylesRepresentatividade = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1200px;
  padding: 24px 50px;
  margin: 0 auto;

  > section {
    width: 100%;
    display: flex;
    align-items: center;

    
    > .destaque{
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      text-align: center;
      margin: 0 auto;
    }

    >.box-destaque{
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 12px;
      > .boxOrange{
        display: flex;
        flex-direction: column;
        gap: 12px;
        background-color: ${({ theme }) => theme.orange100};
        border-radius: 12px;
        padding: 12px;
      }
    }
    &.textContent{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
      padding: 24px 0;
    }
    > .text {
     > span{
      font-weight: 600;
     }
    }
    >h2{
      margin-top: 58px;
    }
  

    
  }
  @media screen and (max-width: 623px) {
      padding: 12px;

      > .destaque > .title-destaque{
  
        text-align: center;
      
    }

      &.textContent{
    
      padding: 12px;
      text-align: center;
    }
    
    }
`;
