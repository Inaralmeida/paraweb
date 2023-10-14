import styled from "styled-components";
import {
  IPhraseHighlighter,
  IStylePhraseHighlightProps,
} from "../../core/interfaces";

const PhraseHighlight = ({ name, phrase, width }: IPhraseHighlighter) => {
  return (
    <StylePhraseHighlight
      title="Frase de impacto da pessoa intrevistada"
      width={width ? width : '100%'}
    >
      <p aria-label="Autor(a) da frase" className="text title">
        {name}:
      </p>
      <p aria-label="Frase de impacto" className="text-destaque">
        "{phrase}"
      </p>
    </StylePhraseHighlight>
  );
};

export default PhraseHighlight;

const StylePhraseHighlight = styled.section<IStylePhraseHighlightProps>`
  width: ${(props) =>  props.width};
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  word-wrap: break-word;
`;
