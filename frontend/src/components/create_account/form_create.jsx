import { CreateUser } from '../../services/api';
import './form_create.css';

function CreateLogin(event) {
    event.preventDefault();
    const username = event.currentTarget.name.value; // Alterado para currentTarget
    const password = event.currentTarget.password.value; // Alterado para currentTarget
    const email = event.currentTarget.email.value; // Alterado para currentTarget
    
    const response = CreateUser(username, password, email);
    response.then(data => {
        alert("Conta criada com sucesso!");
        window.location.href = '/';
    }).catch(error => {
        alert(error);
        console.error(error);
    });
}


function CreateAccountForm() {
    return (
        <div className="form">
            <h3>Criar Conta</h3>
            <form onSubmit={CreateLogin} action="">
                <div className="form-group">
                    <label for="name">Nome</label>
                    <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                    <label for="password">Senha</label>
                    <input type="password" id="password" name="password" required />
                </div>

                <button type="submit">Criar Conta</button>
        </form>
    </div>
    );
  }
  
  export default CreateAccountForm;