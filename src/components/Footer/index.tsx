import styled from "styled-components"

const Footer = () => {
  return (
    <StyleFooter>
      <p>
       <a href="">Inara Almeida</a> 2023 &copy; Projeto para fins Educacionais
      </p>
    </StyleFooter>
  )
}

export default Footer

const StyleFooter = styled.footer`
  width: 100%;
  display : flex ;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-top: 1px solid #b3dde690;
  
  > p{
    color: ${({theme}) => theme.blue500};
    font-size: 1.2rem;
    >   a {
      color: ${({theme}) => theme.blue500};
      font-size: 1.2rem!important;
      text-transform: capitalize!important;
    }
  }
`