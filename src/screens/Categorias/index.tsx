import React from "react";
import { FlatList, View } from "react-native";
import { CategoriaCard } from "../../components/CategoriaCard";
import { Header } from "../../components/Header";

export const Categorias = ({navigation}) => {
    const categorias = [
        "main course",
        "side dish",
        "dessert",
        "appetizer",
        "salad",
        "bread",
        "breakfast",
        "soup",
        "beverage",
        "sauce",
        "marinade",
        "fingerfood",
        "snack",
        "drink"
    ]

    return (
        <View>
            <Header
                titulo="Categorias"
            />

            <FlatList data={categorias} renderItem={({item}) =>
                <CategoriaCard
                    title={item}
                    onPress={() => navigation.navigate('Receitas', {title: item})}
                />
            }/>
        </View>
    )
}