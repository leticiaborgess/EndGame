import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity, TouchableOpacityProps, Text, ViewProps, View, Image } from "react-native";
import { Header } from "../../components/Header";
import { style } from "./style"
import Estrela from "../../assets/icons/estrela.png"
import Fav from "../../assets/icons/fav.png"
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { getInstructions, getReceitaById } from "../../services/spoonacularApi";
import { UserInfoContext } from "../../context/UserInfoContext";

 interface ReceitaType{
     id: string;
     title: string;
     image: string;
     readyInMinutes: number;
     servings: number;

     extendedIngredients: [
         {original: string}
     ];
}

interface InstructionsType{
    steps: [
        step: string
    ]
}

export const ReceitaEspecifica = ({route}) => {

    const [fav, setFavorito] = useState<boolean>(true);
    const [receita, setReceita] = useState<ReceitaType>();
    const [instructions, setInstructions] = useState<InstructionsType[]>([]);

    const {favoritos, setFav} = useContext(UserInfoContext)


    useEffect(() => {
        if(favoritos.find(element => element.id === receita?.id)) {
            setFavorito(false);
        }
    }, [receita])


    function mudaCor() {
        if (fav === false) {
            setFavorito(true);
            setFav(favoritos.filter((item) => item.id !== receita?.id));
        } else {
            setFavorito(false);
            setFav([...favoritos, {id:receita.id, title: receita.title, imgUrl: receita.image}]);
            console.log(favoritos)
        }
    }

    useEffect(() => {
        getReceitaById(route.params.id).then(res => {
            setReceita(res.data);
        }).catch(error => {
            console.log(error)
        });

        getInstructions(route.params.id).then(res => {
            setInstructions(res.data);
        }).catch(error => {
            console.log(error)
        });
    }, [])

    return (
        <ScrollView style={{ flexDirection: 'column' }}>
            <Header
           />
           <Text style={style.nomeReceita}>{receita?.title}</Text>

            <View >
                <Image style={style.imagem}
                    source={{
                        uri: receita?.image
                    }} />
            </View>
            <View style={style.card}>
                <View style={style.info}>
                    <Text style={style.titulo}>
                        Prepare
                    </Text>
                    <Text style={style.texto}>
                        {receita?.readyInMinutes} min
                    </Text>
                </View>
                <View style={style.info}>
                    <Text style={style.titulo}>
                        Servings
                    </Text>
                    <Text style={style.texto}>
                        {receita?.servings}
                    </Text>
                </View>
                <View style={style.info}>
                    <Text style={style.titulo}>
                        Like
                    </Text>
                    <TouchableOpacity onPress={mudaCor}>
                        <Image
                            source={fav ? Estrela : Fav}
                            style={style.fav}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <View style={style.ingredient}>
                    <Text style={style.head}>Ingredients</Text>

                    <FlatList
                        data={receita?.extendedIngredients}
                        renderItem={({ item }) => <Text style={style.item}> ☼ {item.original};</Text>}
                    />
                </View>

                <View style={style.ingredient}>
                    <Text style={style.head}>Steps</Text>

                    <FlatList
                        data={instructions[0]?.steps}
                        renderItem={({ item }) => <Text style={style.item}> ☼ {item.step}</Text>}
                    />
                </View>
            </View>
        </ScrollView>

    )
}