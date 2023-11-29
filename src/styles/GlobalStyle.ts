import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${(props) => props.theme.black900};
    font-family: 'Montserrat', sans-serif;
  }

  body{
    background-color: ${(props) => props.theme.white50};
  }

  :root{
    /* font-size: 90%; */
    font-size: ${(props)=> props.theme.fontSize}%;
  }
  li{
    list-style: none;
  }

  a{
    text-decoration: none;
    
    font-size: 1.6rem;
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
    font-size: 5.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }

  .text{
  font-family: 'Montserrat', sans-serif;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 300;
  line-height: 3rem;
  }

   .subtitle{
    font-size: 2.4rem;
    font-weight: 500;
    line-height: normal;
    
  }

   .small{
  font-size: 1.6rem;
  font-weight: 500;
  line-height: normal;
  }

  .title{
  font-size: 3.2rem;
  font-weight: 500;
  line-height: normal;
  }

  .text-destaque{
    font-size: 5.4rem;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
    @media screen and (max-width: 623px) {
      font-size: 3.2rem;
    }
  }

  .title-destaque{
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .title-banner{
    color: ${(props) => props.theme.white50};
    font-family: 'Montserrat';
    font-size: 6.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }

  legend{
    font-size: 1.2rem;
    font-weight: 100;
  }

  h3{
    word-wrap: break-word;
  }
`;
