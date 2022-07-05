import React, { useState } from "react";
import { Botao } from "../../components/Botao";
import { style } from "./style";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Receita from "../../assets/images/receita.png"
import { TextInput } from "react-native-gesture-handler";
import { login } from "../../services/endgameApi";

interface loginDataType {
    username: string,
    senha: string
}

export const Login = ({ navigation }) => {
    const [loginData, setLoginData] = useState<loginDataType>();

    function handleSubmit() {
        login(loginData).then(res => {
            console.log(res.headers.username);
        }).catch(error => {
            console.log(error.response.headers.errormsg);
        });
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={Receita} style={style.logo} />
                <Text style={style.nome}>COZINHA10</Text>
            </View>
            <View>
                <TextInput
                    onChangeText={(text) => setLoginData({...loginData, username:text})}
                    style={style.input}
                    placeholder="Username"
                />
                <TextInput
                    onChangeText={(text) => setLoginData({...loginData, senha:text})}
                    style={style.input}
                    placeholder="Senha"
                />
            <Botao
                onPress={handleSubmit}
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