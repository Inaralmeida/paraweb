import styled from "styled-components";

export const StylesApoio = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  > section {
    width: 100%;
    max-width: 1200px;
    padding: 24px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;

    
    > .destaque, .data-interviewed{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      text-align: center;
    }

    &.content {
      flex-direction: column;
      max-width: 1200px;
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

     >picture{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap:6px;
      > img{
        width: 50%;
        height: 100%;
      }
     }

    @media screen and (max-width: 623px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 48px;
      justify-content: space-evenly;

      > .destaque > .title-destaque{
  
        text-align: center;
      
    }

      &.textContent{
    
      padding: 12px;
      text-align: center;
    }
    
    >picture{
      > img{
        width: 80%;
        height: 100%;
      }
     }
    }
  }
`;
