// import { useState } from 'react'
//import React from "react";
//import arrow7 from "./imgs/Arrow 7.svg";
//import image1 from "./imgs/image 1.png";
//import image6 from "./imgs/image 6.png";
//import "./App.css";

// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Cadastro from './cadastro';
import { Usuario } from './type';

const App: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([
    { nome: 'Paulo', email: 'paulo@example.com', senha: '123456' },
  ]);

  const adicionarUsuario = (novoUsuario: Usuario) => {
    setUsuarios([...usuarios, novoUsuario]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login usuarios={usuarios} />} />
        <Route path="/cadastro" element={<Cadastro adicionarUsuario={adicionarUsuario} />} />
      </Routes>
    </Router>
  );
};

export default App;