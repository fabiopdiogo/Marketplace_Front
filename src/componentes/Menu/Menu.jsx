import React, { useState} from "react";
import {useRef} from 'react'
import './style.css'
import styled,{ css } from "styled-components";
import Shortcut from "../Elements/Shortcut";

const Container= styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index:5;
  align-items: center;
  justify-content: center;

  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(18,18,19,1) 0%, rgba(255,165,0,1) 100%, rgba(0,212,255,1) 100%);

  opacity: 0;
  pointer-events: none;
  transition: .1s;

  ${({ isVisible}) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
  `  
  }
  
`
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
  position: absolute;
  top: 1px;
  right: 1px;
  padding: 20px;
  cursor: pointer;
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

const Nav= styled.nav`

`

function Menu({menuIsVisible,setMenuIsVisible} ){
  return(
    <Container isVisible={menuIsVisible}>
      <Close src="./Menu/icons8-close-window-50.png" onClick={() => setMenuIsVisible(false)}/>
      <Nav>
      <DivMain>
        <ButtonsDiv>          
              <A href="#beginning" onClick={() => setMenuIsVisible(false)}>Inicio</A>
              <Shortcut href="#about" setMenuIsVisible={setMenuIsVisible}>Sobre</Shortcut>
              <Shortcut href="#skills" setMenuIsVisible={setMenuIsVisible}>Minhas Skills</Shortcut>
              <Shortcut href="#projects" setMenuIsVisible={setMenuIsVisible}>Projetos</Shortcut>
              <Shortcut href="#contact"setMenuIsVisible={setMenuIsVisible}>Contato</Shortcut>
        </ButtonsDiv>
      </DivMain>
      </Nav>
    </Container>
  )
}

export default Menu