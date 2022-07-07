import React from "react";
import { Botao } from "../../components/Botao";
import { style } from "./style";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Receita from "../../assets/images/receita.png"
import { Header } from "../../components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Logout = ( {navigation} ) => {

    const removeValue = async (key: string) => {
        try {
            await AsyncStorage.removeItem(key);
        } catch(e) {
            console.log(e);
        }
    }

    function handleSim() {
        removeValue("@username");
        removeValue("@hash");

        navigation.navigate('Login');
    }

    function handleNao() {
        navigation.navigate('Home');
    }

    return (
        <View>
            <Header 
            titulo="Sair"
            />
            <View style={style.container}>
                <Text style={style.sair}>Are you sure you want to logout?</Text>
            </View>
            <View style={style.botoesSair}>
                
                <TouchableOpacity onPress={handleSim}>
                    <Text style={style.sim}>Yes</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={handleNao}>
                    <Text style={style.nao}>No</Text>
                </TouchableOpacity>
            
            </View>
        </View>
    )
}