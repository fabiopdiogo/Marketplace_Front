import React, { FormEvent, useState, ChangeEvent } from "react"
import styled from "styled-components"
import axios from 'axios'
import { baseURL } from "../utils/constant"
import Input from "../componentes/inputs/Input"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 50px;
`

const Div = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items: center;
  background-color: #fff;  
  height: 100vh;  
  gap: 5px;

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


export default function Login (){
  const[email, setEmail] = useState<string>("");
  const[password, setPassword] = useState<string>("");

  const createSession = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(`${baseURL}/login`, {
        email: email,
        password: password
      });
  
      if (response.status === 200) {
        console.log("Conectado");
      } else {
        console.log("Senha ou usuário inválidos");
      }
  
      setEmail("");
      setPassword("");
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
      <h1>Seja bem vindo(a)!</h1>
      <Form onSubmit={createSession}>
        <Input label="Email" name="email" error={""} onChange={handleChange} value={email}/>
        <Input label="Senha" name="password"  error={""} onChange={handleChange} value={password}/>
        <Button>Entrar</Button>
      </Form>
    </Div>
  )

}