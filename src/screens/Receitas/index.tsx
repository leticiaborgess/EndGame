import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Header } from "../../components/Header";
import { ReceitaCard } from "../../components/ReceitaCard";
import { getReceitas } from "../../services/spoonacularApi";

export interface recipesDataType {
    id: string,
    title: string,
    image: string
}

export const Receitas = ({navigation}) => {
    const [recipes, setRecipes] = useState<recipesDataType[]>([]);

    useEffect(() => {
        getReceitas().then(res => {
            setRecipes(res.data.results);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <View>
            <Header
                titulo="Receitas"
            />

            <FlatList data={recipes} renderItem={({item}) => 
                <ReceitaCard
                    imgUrl={item.image}
                    nome={item.title}
                />
            } />
            
        </View>
    )
}