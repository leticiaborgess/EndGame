import axios from "axios";
import { cadDataType } from "../screens/Cadastro";

const spoonacularApi = axios.create({
    baseURL: 'https://api.spoonacular.com',
    
    params: {
        apiKey: '4612903f642543e9b6bdbd7bebf6925b'
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