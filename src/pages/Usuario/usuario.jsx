import './usuario.css';

function Usuario() {
  return (
    <div className="usuario-container">
      <div className="usuario-box">
        <h2>Cadastrar Usuário</h2>
        <form>
          {/* Novo campo de Nome Completo */}
          <div className="input-group">
            <label>Nome Completo</label>
            <input type="text" placeholder="Digite seu nome completo" />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Digite seu email" />
          </div>

          <div className="input-group">
            <label>Senha</label>
            <input type="password" placeholder="Digite sua senha" />
          </div>

          <div className="input-group">
            <label>Status</label>
            <input type="text" placeholder="Admin" />
          </div>

          <button type="submit">Cadastrar Usuário</button>
        </form>
      </div>
    </div>
  );
}

export default Usuario;