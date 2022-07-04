import React from "react";
import { Botao } from "../../components/Botao";
import { style } from "./style";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Receita from "../../assets/images/receita.png"
import { TextInput } from "react-native-gesture-handler";

export const Cadastro = ({ navigation }) => {
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={Receita} style={style.logo} />
                <Text style={style.nome}>COZINHA10</Text>
            </View>
                
                <View style={style.body}>
                        <Text style={{fontSize: 20, marginTop: 15}}>
                            Cadastre-se
                        </Text>
                        <View>
                            <TextInput style={style.input} placeholder="Username"/>
                            <TextInput style={style.input} placeholder="Primeiro Nome"/>
                            <TextInput style={style.input} placeholder="Segundo Nome"/>
                            <TextInput style={style.input} placeholder="E-mail"/>
                            <TextInput style={style.input} placeholder="Senha"/>
                        </View>
                </View>
            <Botao 
            titulo="Cadastrar"
            />
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{alignSelf:'center', marginTop: 10}}><Text>Já possui conta? Entre aqui!</Text></TouchableOpacity>
        </View>
    )
}