import React, {useState} from 'react';
import {TextInput, TextInputProps, View, Text, Image} from 'react-native';
import { style } from './style';

interface PesquisaProps extends TextInputProps {
    titulo? : string;
}
export const Pesquisa = ( {titulo, ...rest}: PesquisaProps ) => {

    return(
        <View style={style.container}>
            <TextInput  
            inlineImageLeft="search_icon"
            placeholder='Search here'
            style={style.barraPesquisa}/>
           
        </View>
    );
    }
