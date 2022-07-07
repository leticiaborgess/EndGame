import axios from "axios";
import { cadDataType } from "../screens/Cadastro";

const spoonacularApi = axios.create({
    baseURL: 'https://api.spoonacular.com',
    
    params: {
        apiKey: '2a65fe85a2bc422d80c3f85cddd88ca4'
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

export function getReceitaById(id: string) {
    return spoonacularApi.get(`/recipes/${id}/information`);
};

export function getInstructions(id: string) {
    return spoonacularApi.get(`/recipes/${id}/analyzedInstructions`);
};