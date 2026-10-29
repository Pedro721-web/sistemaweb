import './usuario.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Usuario() {
  const navigate = useNavigate();

  // Estados dos campos
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [status, setStatus] = useState('admin');

  const handleCadastro = (e) => {
    e.preventDefault();

    // Como não vamos mais usar a API, apenas simulamos o sucesso e voltamos para o login
    alert("Usuário cadastrado com sucesso!");
    navigate("/"); // Redireciona para a tela de login
  };

  return (
    <div className="app-container">
      <h2 className="main-content">Cadastrar Usuário</h2>
      
      <form onSubmit={handleCadastro}>
        <div className="form-group">
          <label>Nome Completo</label>
          <input 
            type="text" 
            placeholder="Digite seu nome completo" 
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required 
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            placeholder="Digite seu email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>

        <div className="form-group">
          <label>Senha</label>
          <input 
            type="password" 
            placeholder="Digite sua senha" 
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required 
          />
        </div>

        <div className="form-group">
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="comum">Comum</option>
          </select>
        </div>

        <div className="form-group">
          <button type="submit">Cadastrar Usuário</button>
        </div>
      </form>
    </div>
  );
}

export default Usuario;