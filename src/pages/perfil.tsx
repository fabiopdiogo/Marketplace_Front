import {useContext} from 'react'

import styled from "styled-components"
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/Auth/AuthContext';

const ProfileContainer = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 400px;
  margin: 0 auto;
`;

const ProfileInfos = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 400px;
  margin: 0 auto;
`;

const ProfileItem = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
`;

const ProfileLabel = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const Sair = styled.a`
  font: bolder;
  cursor: pointer;
`

function Perfil (){

  const auth = useContext(AuthContext); 
  
  const handleLogout = async () => {
    await auth.signout();
  }              
  return(
    <>
    <ProfileContainer>
      <ProfileItem>
          <ProfileLabel>Name:</ProfileLabel>
          <p>{auth.user && auth.user.name}</p>
          
      </ProfileItem>
      <ProfileItem>
        {auth.user && <Link to="/"><Sair onClick={handleLogout}>Sair</Sair></Link>}
      </ProfileItem> 
      <ProfileItem>
        <Link to="/">Voltar</Link>
      </ProfileItem>        
    </ProfileContainer>
    <ProfileInfos>
      <ProfileItem>
        <ProfileLabel>Email:</ProfileLabel>
        <p>{auth.user && auth.user.email}</p>
      </ProfileItem>
      <ProfileItem>
        <ProfileLabel>Date of Birth:</ProfileLabel>
        <p>{auth.user && auth.user.date_of_birth}</p>
      </ProfileItem>
      <ProfileItem>
        <ProfileLabel>Sex:</ProfileLabel>
        <p>{auth.user && auth.user.sex}</p>
      </ProfileItem>
      <ProfileItem>
        <ProfileLabel>CPF:</ProfileLabel>
        <p>{auth.user && auth.user.cpf}</p>
      </ProfileItem>
      <ProfileItem>
        <ProfileLabel>Number:</ProfileLabel>
        <p>{auth.user && auth.user.number}</p>
      </ProfileItem>
    </ProfileInfos>
    </>
    
  )
  }


export default Perfil;