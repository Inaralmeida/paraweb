import Avatar from '../Avatar/Avatar'
import { MdOutlineMailOutline } from "react-icons/md";
import styled from 'styled-components';
interface MiniBioProps {
  name: string
  age: string
  photo: string
  text: string
  email: string
  alt: string
}

const MiniBio = ({name, age, photo, text, email, alt}: MiniBioProps) => {
  return (
    <StylesMiniBio>
      <Avatar
        img={photo}
        alt={alt}
        hasShadow
        size={100}/>

          <h3>{name}</h3>

          <p> {age} anos</p>
         
          <hr />
          <p>{text}</p>
          <div>
          <MdOutlineMailOutline />
          <p>{email}</p>
          </div>
        
    </StylesMiniBio>
  )
}

export default MiniBio

const StylesMiniBio = styled.div`
 
  width: 400px;
  min-height: 564px;
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  background-color: ${({theme})=> theme.blue50};
  border-radius: 8px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 24px;

  > div{
    display: flex;
    align-items: center;
    gap: 6px;    
  }
`