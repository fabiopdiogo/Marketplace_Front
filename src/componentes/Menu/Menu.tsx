import React, { useContext, useState} from "react";
import {useRef} from 'react'
import { Link } from "react-router-dom";
import styled,{ css } from "styled-components";
import { AuthContext } from '../../contexts/Auth/AuthContext';

const Container = styled.section<{ isVisible: boolean }>`
  display: none;
  
  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    position: fixed; /* Alterado para posição fixa */
    width: 50%; /* Ajustado para cobrir toda a largura da tela */
    height: 100%; /* Ajustado para cobrir toda a altura da tela */
    top: 0;
    left: 0;
    z-index: 5;
    align-items: center;
    justify-content: flex-start; /* Ajustando a posição inicial do conteúdo */

    background-color: white; /* Fundo branco */
    color: black; /* Texto preto */
    opacity: 0;
    pointer-events: none;
    transition: 0.1s;

    ${({ isVisible }) =>
      isVisible &&
      css`
        opacity: 1;
        pointer-events: auto;
      `}
  }
`;

const DivMain = styled.div`  
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;  
`
const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;    
  width: 100%;
  gap: 5px;
`
const Close = styled.img`
  display:flex;
  width: 30px;
  height: 30px;
  perspective: 20px;
  cursor: pointer;

  @media(max-width:368px){
    flex-direction: column;
    padding: 10px;

  }
`
const Perfil = styled.img`
  display:flex;
  width: 30px;
  height: 30px;
  padding: 20px;
  cursor: pointer;

  @media(max-width:368px){
    flex-direction: column;
    padding: 10px;
  }
`

const A = styled.a`
  display: flex;
  align-items: center;  
  justify-content: center;
  border-block: solid;
  writing-mode: horizontal-tb;
  border-color: orange;   
  width: 100%;  
  color: #ececec;  
  &:link{
    text-decoration: none;
  }
`
const User = styled.div`
  display: flex;
  @media(max-width:368px){
    flex-direction: column;
  }
`

const Div= styled.div`
  display: flex;
  justify-content: space-between;
  width:100%;
  margin-top: 10px;
`

interface Props{
  menuIsVisible: boolean,
  setMenuIsVisible(setMenuIsVisible: boolean): void ;
}

function Menu({menuIsVisible, setMenuIsVisible}: Props){
  const auth = useContext(AuthContext); 
  
  return(
    <Container isVisible={menuIsVisible}>
      <Div>
        <User>
          <Link to="/perfil"><Perfil src="icons/user-50.png" alt="" /></Link>
          {auth.user && <p>{auth.user.name}</p>}
        </User>        
        <Close src="./Menu/icons8-close-50.png" onClick={() => setMenuIsVisible(false)}/>
      </Div>
      
      <DivMain>
        <ButtonsDiv>          
          <a>FEMININO</a>
          <a>MASCULINO</a>
          <a>CALÇADOS</a>
          <a>ACESSÓRIOS</a>
          <a>FUTEBOL</a>
          <a>ESPORTES</a>
          <a>ROUPAS</a>
          <a>MARCAS</a>
          <a>OUTLET</a>
        </ButtonsDiv>
      </DivMain>
    </Container>
  )
}

export default Menu