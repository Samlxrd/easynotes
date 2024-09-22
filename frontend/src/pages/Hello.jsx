import { useEffect, useState } from "react";
import { getUserNotes } from "../services/api";

export default function Hello() {
    const [notas, setNotas] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            await getUserNotes(1).then(data => {
                setNotas(data)
                console.log(data);
            })
        };
        fetchData();
    }, []);


    return (
        <div>
            <h1>Hello World!</h1>

            <h2>Notas do usuário 1</h2>

            <ul>Notas: </ul>
            {notas && notas.length > 0 ? notas.map((nota) => {
                return (
                    <li key={nota.id}>
                        {nota.title} | {nota.body}
                    </li>
                )
            }) : <p>Nenhuma nota encontrada.</p>}
        </div>

    )
}