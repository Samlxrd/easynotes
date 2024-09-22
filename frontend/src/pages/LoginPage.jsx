import LoginForm from '../components/loginForm/loginForm';
import CreateAccountForm from '../components/create_account/form_create';
import './LoginPage.css';
import { useState } from 'react';

export default function LoginPage() {
    const [showLogin, setShowLogin] = useState(true);

    return <>
        <section className="screen">
            <h1>EasyNotes</h1>
            <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Criar Conta' : 'Fazer Login'}</button>
            {showLogin ? <LoginForm /> : <CreateAccountForm />}
        </section>
    </>
}