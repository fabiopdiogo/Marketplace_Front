import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('O campo "Nome" é obrigatório')
    .max(50, 'O campo "Nome" pode ter no máximo 50 caracteres'),    
  lastName: Yup.string()
    .required('O campo "Sobrenome" é obrigatório')
    .max(50, 'O campo "Sobrenome" pode ter no máximo 50 caracteres'),
    
  email: Yup.string()
    .email('O campo "E-mail" deve ser um e-mail válido')
    .required('O campo "E-mail" é obrigatório')
    .max(100, 'O campo "E-mail" pode ter no máximo 100 caracteres'),
  
  date_of_birth: Yup.string()
    .required('O campo "Data de Nascimento" é obrigatório')
    .max(50, 'O campo "Data de Nascimento" pode ter no máximo 50 caracteres'),
  
  sex: Yup.string()
    .required('O campo "Gênero" é obrigatório')
    .max(50, 'O campo "Gênero" pode ter no máximo 50 caracteres'),
  
  cpf: Yup.string()
    .required('O campo "CPF" é obrigatório')
    .max(50, 'O campo "CPF" pode ter no máximo 50 caracteres'),
  
  password: Yup.string()
    .required('O campo "Senha" é obrigatório')
    .max(50, 'O campo "Senha" pode ter no máximo 50 caracteres')
    .min(6, 'O campo "Senha" deve ter no mínimo 6 caracteres'),
});


export const loginSchema = Yup.object().shape({
  email: Yup.string().required('O campo "email" é obrigatório'),
  password: Yup.string()
    .required('O campo "senha" é obrigatório')
    .max(50, 'O campo "senha" pode ter no máximo 50 caracteres')
    .min(6, 'O campo "senha" deve ter no mínimo 6 caracteres'),
});
