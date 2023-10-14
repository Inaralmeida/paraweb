import styled from "styled-components";
import { INameAuthorProps } from "../../core/interfaces";

const NameAuthor = ({ name, data }: INameAuthorProps) => {
  return (
    <StyleNameAuthor>
      <span
        className="text subtitle"
        aria-label="Nome do(a) autor(a) do artigo"
      >
        {name}
      </span>
      <hr />
      <span className="text small" aria-label="Data de publicação do artigo">
        {data}
      </span>
    </StyleNameAuthor>
  );
};

export default NameAuthor;

const StyleNameAuthor = styled.p`
  width: 100%;
  max-width: 388px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.black900};

  > hr {
    width: 100%;
  }
`;
