import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import styles from "./Navbar.module.css";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import Menu from '../Menu/Menu';


interface Props{
  setMenuIsVisible(setMenuIsVisible: boolean): void;
  prodNum: Number;
}

const Open = styled.img`
  display: none;
  width: 30px;
  height: 30px;
  @media(max-width:1200px){
  display:flex;
  padding: 20px;
  cursor: pointer;
  }
`
const Perfil = styled.img`
  @media(max-width: 340px){
    display: none;
  }
`
const Logo = styled.h1`
  @media(max-width: 340px){
    font-size:10px;
  }
`
const Carrinho = styled.div`
  display: flex;
  flex-direction: row;
`
const Navbar = ({setMenuIsVisible,prodNum}:Props) => {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
  }
  
  return (
    <>      
      <header className={styles.header}>        
        <Open src="./Menu/icons8-menu-50.png" onClick={() => setMenuIsVisible(true)}/>
        <Logo>CALÇADOS</Logo>

        <div className={styles.options}>
          <a>CICLISMO</a>
          <a>FEMININO</a>
          <a>MASCULINO</a>
          <a>CALÇADOS</a>
          <a>ACESSÓRIOS</a>
          <a>FUTEBOL</a>
          <a>ESPORTES</a>
          <a>ROUPAS</a>
          <a>MARCAS</a>
          <a>OUTLET</a>
        </div>   

        <div className={styles.icons}>
      <div className={styles.icon}>
        <Link to="/carrinho">
          <img src="icons/carrinho.png" alt="Carrinho de compras" />
          <span className={styles.iconCount}>{prodNum.toString()}</span>
        </Link>
      </div>
      <div className={styles.icon}>
        <Link to="/perfil">
          <img src="icons/user-50.png" alt="Perfil" />
        </Link>
      </div>
    </div>
      </header>
    </>
  )
}

export default Navbar;