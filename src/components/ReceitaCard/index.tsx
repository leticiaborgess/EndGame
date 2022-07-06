import React from "react";
import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { style } from "./style";


interface ReceitaCardProps extends TouchableOpacityProps{
    imgUrl: string,
    nome: string
}

export const ReceitaCard = ({imgUrl, nome, ...rest}: ReceitaCardProps) => {
    return (
        <TouchableOpacity {...rest} style={style.container}>
            <Image
                source={{uri: imgUrl}}
                style={style.img}
            />

            <Text style={style.nome}>{nome}</Text>
        </TouchableOpacity>
    )
}