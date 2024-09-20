import axios from 'axios';

export const baseURL = 'http://localhost:5000';

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