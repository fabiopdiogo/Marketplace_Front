import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/index';
import Carrinho from './pages/carrinho';
import Login from './pages/cadastro';
import { RequireAuth } from './contexts/Auth/RequireAuth';

function App() {
  if (typeof window === "object") {
    console.log("a")
  } else {
    console.log("b")
  }
  return (
    <div className="App">
      <p>React Router</p>
      <Routes>
        <Route path="/" element={<RequireAuth><HomePage/></RequireAuth>} />
        <Route path="/carrinho" element={<Carrinho/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
