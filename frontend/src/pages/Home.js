import LoginForm from '../components/loginForm/loginForm';
import './Home.css';

export default function Home() {
    return <>
        <section class="screen">
            <h1>EasyNotes</h1>
            <LoginForm />
        </section>
    </>
}