import styled from "styled-components";
import { IAvatarProps, IStyleAvatarProps } from "../../core/interfaces";


const Avatar = ({ img, alt, size, hasShadow }: IAvatarProps) => {
  return (
    <StyleAvatar size={size} aria-label="Foto do entrevistado" hasShadow={hasShadow}>
      <img src={img} alt={alt} />
    </StyleAvatar>
  );
};

export default Avatar;

const StyleAvatar = styled.picture<IStyleAvatarProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  box-shadow: ${(props) => (props.hasShadow ? "2px 2px 4px rgba(0, 0, 0, 0.25)" : "none")};

  > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;
