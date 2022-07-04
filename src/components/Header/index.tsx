import React from "react";
import { View, Image, Text, TouchableOpacityProps } from "react-native";
import { style } from "./style";
import Receita from "../../assets/images/receita.png"

interface BotaoProps extends TouchableOpacityProps {
    titulo: string;
}

export const Header = ( {titulo, ...rest}: BotaoProps ) => {
    return (
        <View style={style.header}>
            <Image source={Receita} style={style.logo} />
            <Text style={style.nome}>{titulo}</Text>
        </View>

    )
}