import React from 'react';
import styled from 'styled-components';
import styles from "./Navbar.module.css";
import { Link } from 'react-router-dom';


interface Props{
  setMenuIsVisible?(setMenuIsVisible: boolean): void;
}

const Navbar = ({setMenuIsVisible}:Props) => {
  return (
    <>      
      <header className={styles.header}>
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
          <a href="/carrinho"><img src="icons/carrinho.png" alt="" /></a>
          <img src="icons/user-50.png" alt="" />   
        </div>
        
      </header>
    </>
  )
}

export default Navbar;