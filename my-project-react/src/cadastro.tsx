import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './style/cadastro.module.css'; // Import CSS Module corretamente

interface CadastroProps {
  adicionarUsuario: (usuario: { nome: string; email: string; senha: string }) => void;
}

const Cadastro: React.FC<CadastroProps> = ({ adicionarUsuario }) => {
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [erro, setErro] = useState<string>('');
  const navigate = useNavigate();

  const validarCadastro = () => {
    if (!email.includes('@')) {
      setErro('E-mail inválido!');
      return false;
    }
    if (senha.length < 6) {
      setErro('A senha deve ter no mínimo 6 caracteres.');
      return false;
    }
    if (nome.trim() === '') {
      setErro('O nome é obrigatório.');
      return false;
    }
    setErro('');
    return true;
  };

  const handleCadastro = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validarCadastro()) {
      adicionarUsuario({ nome, email, senha });
      navigate('/login');
    }
  };

  return (
    <div className={styles.container}> {/* Aplica classe CSS aqui */}
      <h1 className={styles.title}>Cadastro</h1> {/* Exemplo de uso da classe 'title' */}
      <form onSubmit={handleCadastro} className={styles.form}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className={styles.input}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className={styles.input}
        />
        {erro && <p className={styles.error}>{erro}</p>}
        <button type="submit" className={styles.button}>
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Cadastro;
