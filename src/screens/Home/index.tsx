import React from "react";
import { style } from "./style";
import { View } from "react-native";
import { Header } from "../../components/Header";
import { Pesquisa } from "../../components/Pesquisa";
import { BotaoSobremesa } from "../../components/BotaoSobremesa";


import 'react-native-gesture-handler';

export const Home = ({ navigation }) => {
    return (
        <View style={style.container}>
            <Header
                titulo="Cozinha10"
           />
        <BotaoSobremesa />   
        <Pesquisa />
        </View>
    )
}