import React, { useContext } from "react";
import { FlatList, Text, View } from "react-native";
import { Header } from "../../components/Header";
import { ReceitaCard } from "../../components/ReceitaCard";
import { UserInfoContext } from "../../context/UserInfoContext";

export const Favoritos = ({navigation}) => {
    const {favoritos} = useContext(UserInfoContext);


    function handlePressReceita(id: string) {
        navigation.navigate('ReceitaEspecifica', {id: id});
    }

    return (
        <View>
            <Header titulo="Favoritos"/>

            <FlatList data={favoritos} renderItem={({item}) => 
                <ReceitaCard
                    nome={item.title}
                    imgUrl={item.imgUrl}
                    onPress={() => handlePressReceita(item.id)}
                />
            }/>
        </View>
    )
}