import {useContext, useEffect} from 'react'

import styled from "styled-components"
import { CartContext } from '../contexts/Cart/CartContext'
import { Product } from '../types/Product'
import ProdCart from '../componentes/ProdCart/ProdCart'
import { Link } from 'react-router-dom'
import Button  from '../componentes/inputs/Button'
import { AuthContext } from '../contexts/Auth/AuthContext';


const Sair = styled.p`

`
function Perfil (){

  const auth = useContext(AuthContext); 
  
  const handleLogout = async () => {
    await auth.signout();
  }
              
  return(
    <>
    {auth.user && <Sair onClick={handleLogout}> Sair</Sair>}

    </>
  )
  }


export default Perfil