import Avatar from "../Avatar/Avatar";
import { AiFillInstagram } from "react-icons/ai";
import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa6";
interface MiniBioProps {
  name: string;
  age: string;
  photo: string;
  email: string;
  alt: string;
  insta: string,
  linkedin?: string
  text: string;
}

const MiniBio = ({ name, age, photo, text, alt, insta, linkedin }: MiniBioProps) => {
  return (
    <StylesMiniBio>
      <div>
      <Avatar img={photo} alt={alt} hasShadow size={100} />
      <h3>{name}</h3>
      <p> {age} anos</p>
      <hr className="row" />
      <p>{text}</p>
      </div>
      <div className="icons">
        {linkedin !== '' &&<a href={linkedin}>
        <FaLinkedin size={33} cursor="pointer" /></a>}
        <a href={insta}>
        <AiFillInstagram size={36}  cursor="pointer" />
        </a>
      </div>
    </StylesMiniBio>
  );
};

export default MiniBio;

const StylesMiniBio = styled.div`
  width: 400px;
  min-height: 585px;
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  background-color: aliceblue;
  border-radius: 8px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 24px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;

    > .row{
      width: 100%;
      color: black;
    }
  }

  > .icons {
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    a>{
      cursor: pointer;
      
      :hover{
        opacity: 0.7;
      }
    }
  }
`;
