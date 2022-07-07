import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { style } from "./style"
import Sobremesa from "../../assets/images/sobremesa.png"


export const BotaoSobremesa = ({navigation}) => {
    
    return(
            <View style={style.box}>
               
                <TouchableOpacity style={style.botaoSobremesa}
                onPress={() => navigation.navigate('Receitas',{title:"dessert"})}>
                <Image source={Sobremesa} style={style.sobremesaImage} />
                    <Text style={style.textoBox}>
                        Check out the best desserts to make with the kids on vacation!
                    </Text>
                </TouchableOpacity>
                
            </View>
      
    );
};