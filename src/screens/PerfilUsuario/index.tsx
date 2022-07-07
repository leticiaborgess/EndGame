import React, { useEffect, useState } from "react";
import { View, Text, Image } from 'react-native';
import { Header } from "../../components/Header";
import { getUserData } from "../../services/endgameApi";
import { styles } from "./styles";
import userImage from '../../assets/images/user.png'
import { style } from "../Cadastro/style";

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

export const PerfilUsuario = (username) => {

    const [userData, setUserData] = useState<userInterface>();

    useEffect(() => {
        getUserData("biaramos").then(data => { //substituir por username
            setUserData(data.data)
        }).catch(error => { console.log(error) })
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <Header
                titulo="Perfil"
            />
            <View style={styles.container}>
                <Image style={styles.userImage}
                    source={userImage} />
                <Text style={styles.userInfo}>{userData ? userData.nome : "error"} {userData ? userData.sobrenome : " "}</Text>
                <Text style={styles.userInfo}>{userData ? userData.email : "error"}</Text>
            </View>
        </View>
    )
}