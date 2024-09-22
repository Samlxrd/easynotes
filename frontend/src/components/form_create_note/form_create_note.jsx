import { CreateNote } from '../../services/api';
import './form_create_note.css';

function CreateNoteFormRequest(event) {
    event.preventDefault();
    let title = event.currentTarget.title.value; // Alterado para currentTarget
    let body = event.currentTarget.body.value; // Alterado para currentTarget
    
    title = "ola";
    body = "kkkkkkk";
    
    console.log(`form.js: Título: ${title}, Corpo: ${body}`);
    const response = CreateNote(title, body);
    response.then(data => {
        alert("Nota criada com sucesso!");
        window.location.href = '/hello';
    }).catch(error => {
        alert(error);
        console.error(error);
    });
}


function CreateNoteForm() {
    return (
        <div className="form">
            <h3>Criar Nota</h3>
            <form onSubmit={CreateNoteFormRequest} action="">
                <div className="form-group">
                    <label for="title">Título</label>
                    <input type="text" id="title" name="title" required />
                </div>

                <div className="form-group">
                    <label for="body">Corpo</label>
                    <textarea id="body" name="body" required></textarea>
                </div>

                <button type="submit">Criar Nota</button>
        </form>
    </div>
    );
  }
  
  export default CreateNoteForm;