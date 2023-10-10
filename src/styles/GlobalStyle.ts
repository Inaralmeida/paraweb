import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #222;
  }


  li{
    list-style: none;
  }

  a{
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    transition: all 0.2s;

    &:hover{
      text-decoration-line: underline;
    }
    
    &.active{
      
    font-weight: 700;
    text-decoration-line: underline;
    }
  }

  h1{
    color: ${(props) => props.theme.blue500};;
    text-align: center;
    font-family: 'Montserrat';
    font-size: 52px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
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
