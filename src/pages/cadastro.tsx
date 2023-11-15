import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import Button from "../componentes/inputs/Button";
import { AuthContext } from "../../src/contexts/Auth/AuthContext";
import { baseURL } from "../utils/constant";
import { signupSchema } from '../modules/validationSchema';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 50px;
`;

function Cadastro() {

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(signupSchema)
  });

  const createUser = async (values: any) => {
    console.log(values);
    
    axios.post(`${baseURL}/cadastro`, values).then((res) => {
      console.log(res.data);
    });

    navigate('/login');
  
  };

  return (
    <>
      <Form onSubmit={handleSubmit(createUser)}>
        <InputContainer>
          <StyledLabel>Nome</StyledLabel>
          <StyledInput type="text" {...register("firstName")} />
          <ErrorLabel>{errors?.firstName?.message?.toString()}</ErrorLabel>
        </InputContainer>
        <InputContainer>
          <StyledLabel>Sobrenome</StyledLabel>
          <StyledInput type="text" {...register("lastName")} />
          <ErrorLabel>{errors?.lastName?.message?.toString()}</ErrorLabel>
        </InputContainer>
        <InputContainer>
          <StyledLabel>Email</StyledLabel>
          <StyledInput type="text" {...register("email")} />
          <ErrorLabel>{errors?.email?.message?.toString()}</ErrorLabel>
        </InputContainer>
        <InputContainer>
          <StyledLabel>Data de Nascimento</StyledLabel>
          <StyledInput type="text" {...register("date_of_birth")} />
          <ErrorLabel>{errors?.date_of_birth?.message?.toString()}</ErrorLabel>
        </InputContainer>
        <InputContainer>
          <StyledLabel>Sexo</StyledLabel>
          <StyledInput type="text" {...register("sex")} />
          <ErrorLabel>{errors?.sex?.message?.toString()}</ErrorLabel>
        </InputContainer>
        <InputContainer>
          <StyledLabel>CPF</StyledLabel>
          <StyledInput type="text" {...register("cpf")} />
          <ErrorLabel>{errors?.cpf?.message?.toString()}</ErrorLabel>
        </InputContainer>
        <InputContainer>
          <StyledLabel>Telefone</StyledLabel>
          <StyledInput type="text" {...register("number")} />
          <ErrorLabel>{errors?.number?.message?.toString()}</ErrorLabel>
        </InputContainer>
        <InputContainer>
          <StyledLabel>Senha</StyledLabel>
          <StyledInput type="password" {...register("password")} />
          <ErrorLabel>{errors?.password?.message?.toString()}</ErrorLabel>
        </InputContainer>        
        <Button type="submit">Cadastrar</Button>
      </Form>
    </>
  );
}

export default Cadastro;

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid black;
  background-color: #F5F5F5;
  padding: 15px 20px;
  box-sizing: border-box;
  border-radius: 10px;

  &:focus {
    outline: none;
  }
`;
const StyledLabel = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
`
const InputContainer = styled.div`
  width: 500px;

  @media (max-width: 500px) {
    width: 250px;
  }
  @media (max-width: 300px) {
    width: 200px;
  }
`
const ErrorLabel = styled.span`
  color: ${props => props.theme.error};
  font-weight: bold;
  font-size: 14px;
`