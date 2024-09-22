import axios from 'axios';


export const baseURL = 'http://localhost:5000';

const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});

// Configurando o interceptor para adicionar o token
axiosInstance.interceptors.request.use(config => {
    const token = localStorage.getItem('token'); // Obtendo o token do local storage
    if (token) {
        config.headers.Authorization = `Bearer ${token}`; // Adicionando o token ao cabeçalho
    }
    return config;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

export async function getUserNotes(id) {
    try {
        const response = await axios.get(`${baseURL}/note/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Falha ao acessar as notas do usuário.', error.message);
    }
}

export async function login(username, password) {
    try {
        const response = await axios.post(`${baseURL}/auth/login`, { username, password });
        return response.data;
    } catch (error) {
        throw new Error('Falha ao fazer login.', error.message);
    }
}

export async function CreateUser(username, password, email) {
    try {
        const response = await axios.post(`${baseURL}/user`, { username, password, email });
        return response.data;
    } catch (error) {
        throw new Error('Falha ao fazer login.', error.message);
    }
}

export async function CreateNote(title, body) {
    try {
        console.log(`api.js: ${title} ${body}`);
        console.log('1')
        const response = await axiosInstance.post(`${baseURL}/note`, { title, body });
        console.log("Resposta da API: ", response);
        return response.data;
    } catch (error) {
        throw new Error('Falha ao criar a nota.', error.message);
    }
}