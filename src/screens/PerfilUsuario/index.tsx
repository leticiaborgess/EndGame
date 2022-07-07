import React, { useEffect, useState } from "react";
import { View, Text, Image, TextInput } from 'react-native';
import { Header } from "../../components/Header";
import { getUserData } from "../../services/endgameApi";
import { styles } from "./styles";
import userImage from '../../assets/images/user.png'
import { style } from "../Cadastro/style";
import { Botao } from "../../components/Botao";
import { Home } from "../Home";

interface userInterface {
    "id": number,
    "username": string,
    "spoonUsername": string,
    "nome": string,
    "sobrenome": string
    "senha": string,
    "email": string,
    "hash": string,
    "favoritos": []
}

export const PerfilUsuario = (identificacao) => {

    const [userData, setUserData] = useState<userInterface>();

    useEffect(() => {
        getUserData("biaramos").then(data => { //substituir por username
            setUserData(data.data)
        }).catch(error => { console.log(error) })
    }, []);

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');

    function update () {
        if (nome != ''){
            setUserData({ ...userData, nome: nome})
        }       
        if (sobrenome != ''){
            setUserData({ ...userData, sobrenome: sobrenome})
        }  
        if (email != ''){
            setUserData({ ...userData, email: email})
        } 
        if (username != ''){
            setUserData({ ...userData, username: username})
        } 
        if (senha != ''){
            setUserData({ ...userData, senha: senha})
        };
    };

    return (
        <View style={{ flex: 1 }}>
            <Header
                titulo="Perfil"
            />
            <View style={styles.container}>
                <Image style={styles.userImage}
                    source={userImage} />
                <Text style={styles.userInfo}>{userData ? userData.nome : "error"} {userData ? userData.sobrenome : " "}</Text>
            </View>
            <View>
                <Text style={styles.text}>Atualizar dados: </Text>
                <TextInput
                    style={styles.input}
                    placeholder={userData ? userData.nome : "error"}
                    onChangeText={(text)=>setNome(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder={userData ? userData.sobrenome : "error"}
                    onChangeText={(text)=>setSobrenome(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder={userData ? userData.email : "error"}
                    onChangeText={(text)=>setEmail(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder={userData ? userData.username : "error"}
                    onChangeText={(text)=>setUsername(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    onChangeText={(text)=>setSenha(text)}
                />
                <Botao
                    titulo="Salvar"
                    onPress={update}
                />
            </View>

        </View>
    )
}