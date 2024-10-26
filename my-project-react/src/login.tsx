
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginProps } from './type';
import styles from './login.module.css'

const Login: React.FC<LoginProps> = ({ usuarios }) => {
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [erro, setErro] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const usuarioValido = usuarios.find(
      (usuario) => usuario.email === email && usuario.senha === senha
    );

    if (usuarioValido) {
      setErro('');
      alert('Login realizado com sucesso!');
      navigate('/');
    } else {
      setErro('Email ou senha incorretos!');
    }
  };

  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
    };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={handleChange(setEmail)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Senha</label>
            <input
              type="password"
              className="form-control"
              value={senha}
              onChange={handleChange(setSenha)}
              required
            />
          </div>
          {erro && <p className="text-danger">{erro}</p>}
          <button type="submit" className="btn btn-primary w-100">
            Entrar
          </button>
        </form>
        <p className="text-center mt-3">
          Não tem conta? <a href="/cadastro">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
