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
const Sair = styled.button`

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
        <h1>CALÇADOS</h1>

        <div className={styles.options}>
          <Link to="">CICLISMO</Link>
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
          <img src="icons/search.png" alt="" />
          <Link to="/carrinho"><img src="icons/carrinho.png" alt="" />{prodNum.toString()}</Link>
          <Link to="/perfil"><img src="icons/user-50.png" alt="" /></Link> 
          
        </div>
        
        

      </header>
    </>
  )
}

export default Navbar;