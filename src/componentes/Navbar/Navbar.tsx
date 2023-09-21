import React, { useContext } from 'react';
import styled from 'styled-components';
import styles from "./Navbar.module.css";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';


interface Props{
  setMenuIsVisible?(setMenuIsVisible: boolean): void;
  prodNum: Number
}

const Navbar = ({setMenuIsVisible,prodNum}:Props) => {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
  }

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
          <Link to="/carrinho"><img src="icons/carrinho.png" alt="" />{prodNum.toString()}</Link>
          <img src="icons/user-50.png" alt="" />   
          {auth.user && <button onClick={handleLogout}> Sair</button>}
          {auth.user && <p>{auth.user.name}</p>}
        </div>
        
        

      </header>
    </>
  )
}

export default Navbar;