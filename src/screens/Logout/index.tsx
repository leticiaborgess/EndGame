import React from "react";
import { Botao } from "../../components/Botao";
import { style } from "./style";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Receita from "../../assets/images/receita.png"
import { Header } from "../../components/Header";

export const Logout = ( {navigation} ) => {

    return (
        <View>
            <Header 
            titulo="Sair"
            />
            <View style={style.container}>
                <Text style={style.sair}>Tem certeza que deseja sair?</Text>
            </View>
            <View style={style.botoesSair}>
                
                <TouchableOpacity>
                    <Text style={style.sim}>Sim</Text>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Text style={style.nao}>Não</Text>
                </TouchableOpacity>
            
            </View>
        </View>
    )
}