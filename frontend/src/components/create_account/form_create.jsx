import './form_create.css';

function CreateAccountForm() {
    return (
        <div className="form">
            <h3>Criar Conta</h3>
            <form action="">
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