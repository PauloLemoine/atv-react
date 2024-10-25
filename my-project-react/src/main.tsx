// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Cadastro from './cadastro';
import Login from './login';

const adicionarUsuario = (usuario: { nome: string, email: string, senha: string }) => {
  console.log("Usuário cadastrado:", usuario);
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cadastro" element={<Cadastro adicionarUsuario={adicionarUsuario} />} />
        <Route path="/login" element={<Login usuarios={[]} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
