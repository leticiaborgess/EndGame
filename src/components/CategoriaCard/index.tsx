import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { style } from "./style";


interface CategoriaCardProps extends TouchableOpacityProps{
    title: string
}

export const CategoriaCard = ({title, ...rest}: CategoriaCardProps) => {
    return (
        <TouchableOpacity
            style={style.container}
            {...rest}
        >
            <Text style={style.text}>{title}</Text>
        </TouchableOpacity>
    )
}