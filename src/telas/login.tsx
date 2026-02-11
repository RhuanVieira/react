import "../style/login.css";


const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />

        <button>Entrar</button>

        <span className="forgot">Esqueceu a senha?</span>
      </div>
    </div>
  );
};

export default Login;
