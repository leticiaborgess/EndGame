import axios from "axios";

const endgameApi = axios.create({
    baseURL: 'http://localhost:8080'
});

export function cadastro(cadastroData) {
    return endgameApi.post('/usuario', cadastroData);
};

export function login(loginData) {
    return endgameApi.post('/login', loginData);
};

export function getUserData() {
    return endgameApi.get('/usuario');
};