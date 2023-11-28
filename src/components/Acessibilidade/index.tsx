import { useState } from 'react';
import {AiOutlinePlus} from 'react-icons/ai'
import {IoIosRemove} from 'react-icons/io'
import { MdLightMode } from "react-icons/md";
import styled from 'styled-components';

interface IAcessibilidadeProps {
  handleMore: () => void
  handleRemove: () => void
  handleSetContrast: () => void
}

interface IAcessibilidadeStyle{
  showOptions: boolean
}
const Acessibilidade = ({handleMore, handleRemove, handleSetContrast}:IAcessibilidadeProps) => {

  const [showOptions, setShowOptions] = useState(false)
  return (
    <StyledAcessibilidade showOptions={showOptions}>
      <div 
      onClick={() => setShowOptions(!showOptions)}
      aria-role='button' className='btnGeral' title='Acessibilidade' aria-label='ferramentas de acessibilidade visual'>
        <img src="/acessibilidade/hands.png" alt="figura de duas maos, uma para cima e outra para baixo representando acessibilidade" />
      </div>
      {showOptions && (
        <ul>
        <button onClick={()=>{
          handleMore()
          setShowOptions(false)
        }}><AiOutlinePlus />A</button>
        <button onClick={()=>{
          handleRemove()
          setShowOptions(false)
        }}><IoIosRemove />A</button>
        <button onClick={()=>{
          handleSetContrast()
          setShowOptions(false)
        }}>
            <MdLightMode />
        </button>
      </ul>
      )}
    </StyledAcessibilidade>
  )
}

export default Acessibilidade

const StyledAcessibilidade = styled.div<IAcessibilidadeStyle>`
position: fixed;
right: 0;
top: 30vh;

  > .btnGeral{
    width: 50px;
    cursor: pointer;
    > img{
    border-radius:8px 8px ${(props)=> props.showOptions ? '0 0 ' : '8px 8px'};
    width: 100%;
    z-index: 4;
    box-shadow: -2px 2px 8px rgba(0, 0, 0, 0.55);}
    

}
> ul{
  position: relative;
  top: -5px;
  display: flex;
  flex-direction: column;
  padding: 5px 3px;
  border-radius: 0 0 8px 8px;
  border: 1px solid ${(props) => props.theme.blue500};
  align-items: center;
  gap: 6px;
  background-color: ${(props) => props.theme.blue500};
  color: ${(props) => props.theme.black900};
  z-index: 2;
  box-shadow: -2px 2px 8px rgba(0, 0, 0, 0.55);

  > button{
    border: 1px solid ${(props) => props.theme.black900};
    color: ${(props) => props.theme.black900};
    background-color: ${(props) => props.theme.white50};
    padding: 6px 8px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    cursor: pointer;
  }
}
  height: fit-content;
`