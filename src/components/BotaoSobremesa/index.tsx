import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";

import { style } from "./style"


export const BotaoSobremesa = () => {
    
    return(
            <View style={style.box}>
                <TouchableOpacity style={style.botaoSobremesa}
                activeOpacity={0.5}>
                    <Image source={require('./src/assets/images/sobremesa.png')}
                    style={style.sobremesaImage}/>

                    <Text style={style.textoBox} >
                    Confira as melhores sobremesas para fazer com as crianças nas férias!
                    </Text>
                </TouchableOpacity>
            </View>
      
    );
};