import React, { useContext, useEffect, useState } from "react";
import { Botao } from "../../components/Botao";
import { style } from "./style";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Header } from "../../components/Header";
import { spoonCadastro } from "../../services/spoonacularApi";
import { cadastro } from "../../services/endgameApi";
import { UserInfoContext } from "../../context/UserInfoContext";


export interface cadDataType {
    username: string,
    spoonUsername: string,
    nome: string,
    sobrenome: string,
    email: string,
    senha: string,
    hash: string
}

interface responseType {
    username: string,
    hash: string
}

export const Cadastro = ({ navigation }) => {
    const [connectData, setConnectData] = useState<cadDataType>();
    const [error, setError] = useState<string>();
    const {hash} = useContext(UserInfoContext);

    function handleSubmit() {
        spoonCadastro(connectData).then((res) => {
            setConnectData({...connectData, hash: res.data.hash, spoonUsername: res.data.username});
        }).catch(error => console.log(error));
    };

    useEffect(() => {
        if(connectData?.spoonUsername && connectData?.hash) {
            cadastro(connectData).then(res => {
                setError(undefined);
                navigation.navigate('Login');
            }).catch(error => {
                setError(error.response.headers.errormsg);
            });
        }
    }, [connectData?.spoonUsername, connectData?.hash])

    useEffect(() => {
        console.log(hash)
        if(hash !== "" && hash) {
            navigation.navigate('Home');
        }
    }, [hash])

    return (
        <View style={style.container}>
            <Header
            titulo="Cozinha10"
            />

                <View style={style.body}>
                        <Text style={{fontSize: 20, marginTop: 15}}>
                            Cadastre-se
                        </Text>

                        {error &&
                        <View style={style.errorMsg}>
                            <Text>
                                {error}
                            </Text>
                        </View>
                        }

                        <View>
                            <TextInput
                                onChangeText={(text) => setConnectData({...connectData, username:text})}
                                style={style.input}
                                placeholder="Username"
                            />

                            <TextInput
                                onChangeText={(text) => setConnectData({...connectData, nome:text})}
                                style={style.input}
                                placeholder="Primeiro Nome"
                            />

                            <TextInput
                                onChangeText={(text) => setConnectData({...connectData, sobrenome:text})}
                                style={style.input}
                                placeholder="Sobrenome"
                            />

                            <TextInput
                                onChangeText={(text) => setConnectData({...connectData, email:text})}
                                style={style.input}
                                placeholder="E-mail"
                            />

                            <TextInput
                                onChangeText={(text) => setConnectData({...connectData, senha:text})}
                                style={style.input}
                                secureTextEntry={true}
                                placeholder="Senha"
                            />
                        </View>
                </View>
            
            <Botao
                titulo="Cadastrar"
                onPress={handleSubmit}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{alignSelf:'center', marginTop: 10}}><Text>Já possui conta? Entre aqui!</Text></TouchableOpacity>
        </View>
    );
}