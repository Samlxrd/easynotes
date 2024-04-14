function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);
    fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            form.reset();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

const form = document.getElementById('myForm');

// Adicione um ouvinte de evento ao formulário para lidar com o envio
form.addEventListener('submit', handleSubmit);