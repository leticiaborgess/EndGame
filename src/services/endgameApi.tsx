import axios from "axios";

const endgameApi = axios.create({
    baseURL: 'http://192.168.15.9:8080' //Mudar para o IP da sua máquina
});

export function cadastro(cadastroData) {
    return endgameApi.post('/usuario', cadastroData);
};

export function login(loginData) {
    return endgameApi.post('/login', loginData);
};

export function getUserData(username) {
    return endgameApi.get(`/usuario/${username}`);
};