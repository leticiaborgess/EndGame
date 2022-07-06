import axios from "axios";
import { cadDataType } from "../screens/Cadastro";

const spoonacularApi = axios.create({
    baseURL: 'https://api.spoonacular.com',
    
    params: {
        apiKey: 'b923a21be2144adfa667ea87421d30fd'
    }
});

export function spoonCadastro(connectData: cadDataType) {
    return spoonacularApi.post('/users/connect', connectData);
};

export function getReceitas() {
    return spoonacularApi.get('/recipes/complexSearch', {params: {
        number: 100
    }});
};