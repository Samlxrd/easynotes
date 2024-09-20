// import { useEffect, useState } from 'react';
import LoginForm from '../components/loginForm/loginForm';
// import { getUserNotes } from '../services/api';
import './Home.css';

export default function Home() {
    // const [notas, setNotas] = useState({});
    // useEffect(() => {
    //     getUserNotes(1).then(data => setNotas(data));
    // }, [])

    return <>
            <section className="screen">
                <h1>EasyNotes</h1>
                <LoginForm />
                {/* {notas.length > 0 && <ul>
                    {notas.map(nota => ( <li key={nota.id}>{nota.title} | {nota.body} </li>))}
                    </ul>} */}
            </section>
        </>
}