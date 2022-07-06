import axios from "axios";
import { cadDataType } from "../screens/Cadastro";

const spoonacularApi = axios.create({
    baseURL: 'https://api.spoonacular.com',
    
    params: {
        apiKey: 'b987c8c43e9c44e3ad10e12e4bdb8daa'
    }
});

export function spoonCadastro(connectData: cadDataType) {
    return spoonacularApi.post('/users/connect', connectData);
};

export function getReceitas() {
    return spoonacularApi.get('/recipes/complexSearch', {params: {
        number: 100,
    }});
};

export function getReceitasByCategoria(categoria: string) {
    return spoonacularApi.get('/recipes/complexSearch', {params: {
        number: 100,
        type: categoria
    }});
};