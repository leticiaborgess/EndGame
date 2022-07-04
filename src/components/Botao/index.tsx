import React from "react";
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { style } from "./style"

interface BotaoProps extends TouchableOpacityProps {
    titulo: string;
}

export const Botao = ( {titulo, ...rest}: BotaoProps ) => {
    
    return(
       <TouchableOpacity style={style.botao} {...rest}>
        <Text style={style.textoBotao}>{titulo}</Text>
       </TouchableOpacity>
    )
}