import React, { FormEvent,useContext, useState, ChangeEvent } from "react"
import styled from "styled-components"
import axios from 'axios'

import { AuthContext } from "../../src/contexts/Auth/AuthContext"
import { baseURL } from "../utils/constant"
import Input from "../componentes/inputs/Input"
import { useNavigate, Link } from "react-router-dom"

export default function Login (){
  const[email, setEmail] = useState<string>("");
  const[password, setPassword] = useState<string>("");
  
  const auth = useContext(AuthContext);
  const navigate = useNavigate()

  const createSession = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try{
      
      if(email && password){
        console.log("aqui")  
        const response = await auth.signin(email,password);       
         
        console.log(response)
        if (response === true ) {
          console.log("Conectado");
          navigate('/')
        } else {
          console.log("Senha ou usuário inválidos");
        }
    
      setEmail("");
      setPassword("");
      }      
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "email") {
      setEmail(e.target.value);
    }
    else {
      setPassword(e.target.value)
    }
  };

  return(
    <Div>
      <Img src="icons/user-50.png" alt="" />
      <h1>Olá, faça seu login!</h1>
      <Form onSubmit={createSession}>
        <Input label="Email" name="email" error={""} onChange={handleChange} value={email}/>
        <Input label="Senha" name="password"  error={""} onChange={handleChange} value={password}/>
        <Button>Entrar</Button>
        <Link to="/cadastro">Não tem login? Cadastre-se!</Link>
      </Form>
      
    </Div>
  )

}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

const Div = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items: center;
  background-color: #fff;  
  height: 100vh;
  p{
    font-weight: bold;
  }
`
const Img = styled.img`
  width: 50px;
`
const Button = styled.button`
  width: 100px;
  resize:none;  
  background-color: #111111;
  color:#ffffff;  
  padding: 15px;
  cursor: pointer;
`

const DivButton = styled.div`
  display:flex;
  gap:5px;
`
