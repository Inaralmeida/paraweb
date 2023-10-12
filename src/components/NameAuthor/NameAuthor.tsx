import styled from "styled-components";

interface INameAuthorProps {
  name: string;
  data: string;
}

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
  width: 388px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.black900};

  > hr {
    width: 100%;
  }
`;
