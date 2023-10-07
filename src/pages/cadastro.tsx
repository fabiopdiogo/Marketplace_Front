import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import Button from "../componentes/inputs/Button";
import { AuthContext } from "../../src/contexts/Auth/AuthContext";
import { baseURL } from "../utils/constant";
import Input from "../componentes/inputs/Input";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 50px;
`;

function Cadastro() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    sex: "",
    number: "",
    password: "",
  });

  const createUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    axios.post(`${baseURL}/cadastro`, formData).then((res) => {
      console.log(res.data);
    });
    setFormData({
      ...formData,
      name: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
      sex: "",
      number: "",
      password: "",
    });
    createSession();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const createSession = async () => {
    try {
      const response = await auth.signin(formData.email, formData.password);
      if (response.status === 200) {
        console.log("Sessão criada com sucesso");
        navigate("/");
      } else {
        console.log("Senha ou usuário inválidos");
      }
  
      setFormData({
        ...formData,
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Erro ao criar sessão:", error);
    }
  };
  return (
    <Form onSubmit={createUser}>
      <Input label="Nome" name="name" error={""} onChange={handleChange} value={formData.name} />
      <Input label="Sobrenome" name="lastName" error={""} onChange={handleChange} value={formData.lastName} />
      <Input label="Email" name="email" error={""} onChange={handleChange} value={formData.email} />
      <Input label="Data de Nascimento" name="dateOfBirth" error={""} onChange={handleChange} value={formData.dateOfBirth} />
      <Input label="Sexo" name="sex" error={""} onChange={handleChange} value={formData.sex} />
      <Input label="Telefone" name="number" error={""} onChange={handleChange} value={formData.number} />
      <Input label="Senha" name="password" error={""} onChange={handleChange} value={formData.password} />
      <Button type="submit">
        <Link to="/">Cadastrar</Link>
      </Button>
    </Form>
  );
}

export default Cadastro;
