import React, {useState} from 'react';
import {TextInput, TextInputProps, View, Text, Image} from 'react-native';
import { style } from './style';

interface BotaoProps extends TextInputProps {
    titulo? : string;
}
export const Pesquisa = ( {titulo, ...rest}: BotaoProps ) => {

    return(
        <View>
            <Text>Search here</Text>
            <TextInput style={style.barraPesquisa}/>
            <Image source={require('./src/assets/icons/search.png')}
                    style={style.lupa}/>
        </View>
    );
    }
