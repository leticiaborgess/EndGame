import React from "react";
import { Botao } from "../../components/Botao";
import { style } from "./style";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Receita from "../../assets/images/receita.png"
import { TextInput } from "react-native-gesture-handler";

export const Login = ({ navigation }) => {
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={Receita} style={style.logo} />
                <Text style={style.nome}>COZINHA10</Text>
            </View>
            <View>
                <TextInput style={style.input} placeholder="Username" />
                <TextInput style={style.input} placeholder="Senha" />
            <Botao
                titulo="Login"
            />
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} 
                style={{alignSelf:'center', marginTop: 10}}>
                <Text>Criar conta</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}