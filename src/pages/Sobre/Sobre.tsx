import styled from "styled-components";
import MiniBio from "../../components/MiniBio/MiniBio";
import { miniBioData } from "../../core/MiniBio";

const Sobre = () => {
  
  return <StylesSobre>
    {miniBioData.map((bio) => (
      <MiniBio
        name={bio.name}
        age={bio.age}
        photo={bio.photo}
        text={bio.text}
        email={bio.email}
        alt={bio.alt}
      />
    ))}
  </StylesSobre>;

};

export default Sobre;

const StylesSobre = styled.main`
padding: 24px;
margin: 0 auto;
 width: 100%;
  max-width: 900px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  column-gap: 20px;
  `