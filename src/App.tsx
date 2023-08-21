import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/index';
import Carrinho from './pages/carrinho';
import Login from './pages/login';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import Cadastro from './pages/cadastro';
function App() {
  
  return (
    <div className="App">
      <Routes>        
        <Route path="/login" element={<Login/>} />           
        <Route path="/cadastro" element={<Cadastro/>} />     
        <Route path="/carrinho" element={<RequireAuth><Carrinho/></RequireAuth>} />
        <Route path="/" element={<RequireAuth><HomePage/></RequireAuth>}/>
      </Routes>
    </div>
  );
}

export default App;
