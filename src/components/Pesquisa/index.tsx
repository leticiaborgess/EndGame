import React, {useState} from 'react';
import {TextInput, View, Text, Image} from 'react-native';
import { style } from './style';

export default function Pesquisa(){

    const [palavras,setPalavras]=useState("")
    const mudarSearch=()=>{}
    return(
        <View>
            <Text>Search here</Text>
            <TextInput style={style.barraPesquisa}/>
            <Image source={require('./src/assets/icons/search.png')}
                    style={style.lupa}/>
        </View>
    );
};
