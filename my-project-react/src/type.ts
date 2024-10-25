export interface Usuario {
    nome: string;
    email: string;
    senha: string;
  }
  
  
  export interface LoginProps {
    usuarios: Usuario[];
  }
  
  export interface CadastroProps {
    adicionarUsuario: (usuario: Usuario) => void;
  }
  