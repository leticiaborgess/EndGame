import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Header } from "../../components/Header";
import { ReceitaCard } from "../../components/ReceitaCard";
import { getReceitas, getReceitasByCategoria } from "../../services/spoonacularApi";

export interface recipesDataType {
    id: string,
    title: string,
    image: string
}

export const Receitas = ({navigation, route}) => {
    const [recipes, setRecipes] = useState<recipesDataType[]>([]);

    useEffect(() => {
        if(route.params?.title) {
            getReceitasByCategoria(route.params.title).then(res => {
                setRecipes(res.data.results);
            }).catch(error => {
                console.log(error);
            });
        }else{
            getReceitas().then(res => {
                setRecipes(res.data.results);
            }).catch(error => {
                console.log(error);
            });
        }
    }, [route.params]);

    function handlePressReceita(id: string) {
        navigation.navigate('ReceitaEspecifica', {id: id});
    }

    return (
        <View>
            <Header
                titulo="Receitas"
            />

            <FlatList data={recipes} renderItem={({item}) => 
                <ReceitaCard
                    imgUrl={item.image}
                    nome={item.title}
                    onPress={() => handlePressReceita(item.id)}
                />
            } />
            
        </View>
    )
}