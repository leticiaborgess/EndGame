import React from "react";
import { FlatList, View } from "react-native";
import { CategoriaCard } from "../../components/CategoriaCard";
import { Header } from "../../components/Header";

export const Categorias = ({navigation}) => {
    const categorias = [
        "Main Course",
        "Side Dish",
        "Dessert",
        "Appetizer",
        "Salad",
        "Bread",
        "Breakfast",
        "Soup",
        "Beverage",
        "Sauce",
        "Marinade",
        "Fingerfood",
        "Snack",
        "Drink"
    ]

    return (
        <View>
            <Header
                titulo="Categories"
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