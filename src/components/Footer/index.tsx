import styled from "styled-components"

const Footer = () => {
  return (
    <StyleFooter>
      <p>
       <a href="">Inara Almeida</a> 2023 &copy; Projeto feito para fins Educacionais
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
  background-color: ${({theme}) => theme.blue50};

  > p{
    
  }
`