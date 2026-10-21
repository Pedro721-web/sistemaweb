import './login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Digite seu email" />
          </div>
          <div className="input-group">
            <label>Senha</label>
            <input type="password" placeholder="Digite sua senha" />
          </div>
          <button type="submit"><a href="/home">Entrar</a></button>

          <div className='register-link'>
            <p>
                Não tem uma conta? <a href="/usuario">Cadastre-se</a>
            </p>
          </div>

          </form>
      </div>
    </div>
  );
}
export default Login;
