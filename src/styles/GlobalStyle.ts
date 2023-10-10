import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #222;
  }

  :root,body{
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }

  a{
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    
    &.active{
      
    font-weight: 700;
    text-decoration-line: underline;
    }
  }

  .text{
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 30px;
  }

   .text-subtitle{
    font-size: 24px;
    font-weight: 500;
    line-height: normal;
  }

   .small{
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  }

  .title{
  font-size: 32px;
  font-weight: 500;
  line-height: normal;
  }

  .text-destaque{
    font-family:'Lobster Two', sans-serif;
    font-size: 54px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
  }

  .title-destaque{
    font-family: 'Lobster Two', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  }

  .title-banner{
    color: ${(props) => props.theme.white50};
    font-family: 'Lobster Two', sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
