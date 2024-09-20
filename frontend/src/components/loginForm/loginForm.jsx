import { login } from '../../services/api';
import './loginForm.css';

function handleLogin(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    
    const response = login(username, password);
    response.then(data => {
        if (data.acess_token) {
            localStorage.setItem('token', data.acess_token);
            window.location.href = '/hello';
        }
    }).catch(error => {
        console.error(error);
    });
}

function LoginForm() {

    return (
        <div className="form">
            <h3>Entrar</h3>
            <form onSubmit={handleLogin} action="">
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