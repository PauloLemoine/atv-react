import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../src/style/cadastro.module.css';

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
    <div className={`container ${styles.container}`}>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4"> 
          <div className={`${styles.card} p-4`}> 
            <h2 className="text-center mb-4">Cadastro</h2>
            <form onSubmit={handleCadastro}>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="form-control" 
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  placeholder="Senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="form-control"
                />
              </div>
              {erro && <p className="text-danger">{erro}</p>}
              <button type="submit" className="btn btn-primary w-100">
                Cadastrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
