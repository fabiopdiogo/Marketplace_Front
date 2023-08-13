import React, {ChangeEvent, FormEvent, useState} from "react";
import styled from "styled-components";

import { baseURL } from "../utils/constant"
import Input from "../componentes/inputs/Input";
import axios from "axios";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 50px;
`

function Cadastro(){
  const[name, setName] = useState<string>("");
  const[email, setEmail] = useState<string>("");
  const[password, setPassword] = useState<string>("");

  const createUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();  
    console.log({name,email,password})
    axios.post(`${baseURL}/cadastro`, {
      name: name,
      email: email,
      password: password
    }).then((res) =>{
        console.log(res.data)
       })
      setName("")
      setEmail("")
      setPassword("")
  } 

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "name") {
      setName(e.target.value);
    }
    if(e.target.name === "email") {
      setEmail(e.target.value)
    }
    if(e.target.name === "password") {
      setPassword(e.target.value)
    }
  }

  return(
    <Form onSubmit={createUser}>      
      <Input label="Nome" name="name" error={""} onChange={handleChange} value={name}/>
      <Input label="Email" name="email" error={""} onChange={handleChange} value={email}/>
      <Input label="Senha" name="password" error={""} onChange={handleChange} value={password}/>

      <button type="submit"/>
     </Form>
  )
  
}

export default Cadastro;