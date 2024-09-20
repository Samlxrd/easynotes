import './loginForm.css';

function LoginForm() {
    return (
        <div className="form">
            <h3>Entrar</h3>
            <form action="">
                <div className="form-group">
                    <label htmlFor="username">Usuário</label>
                    <input type="text" id="username" name="username" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" name="password" />
                </div>

                <button type="submit">Entrar</button>
        </form>
    </div>
    );
  }
  
  export default LoginForm;