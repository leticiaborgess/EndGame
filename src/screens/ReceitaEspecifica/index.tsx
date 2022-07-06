import React, { useState } from "react";
import { TouchableOpacity, TouchableOpacityProps, Text, ViewProps, View, Image } from "react-native";
import { Header } from "../../components/Header";
import { style } from "./style"
import Estrela from "../../assets/icons/estrela.png"
import Fav from "../../assets/icons/fav.png"
import { FlatList, ScrollView } from "react-native-gesture-handler";

// interface ReceitaProps extends ViewProps {
//     title: string;
//     image: string;
//     readyInMinutes: number;
//     servings: number;
//     extendedIngredients: [
//         {
//             original: string;
//         }
//     ]
//     steps: [
//         {
//             number: number;
//             step: string;
//         }
//     ]
// }


export const ReceitaEspecifica = () => {

    const [fav, setFav] = useState<boolean>(true);


    function mudaCor() {
        if (fav === false) {
            setFav(true);
        } else {
            setFav(false);
        }
    }

    return (
        <View style={{ flexDirection: 'column' }}>
            <Header
           
                titulo="Pasta with Garlic"
            />

            <View >

                <Image style={style.imagem}
                    source={{
                        uri: "https://spoonacular.com/recipeImages/716429-556x370.jpg"
                    }} />
            </View>
            <View style={style.card}>
                <View style={style.info}>
                    <Text style={style.titulo}>
                        Preparo
                    </Text>
                    <Text style={style.texto}>
                        45 min
                    </Text>
                </View>
                <View style={style.info}>
                    <Text style={style.titulo}>
                        Porções
                    </Text>
                    <Text style={style.texto}>
                        5
                    </Text>
                </View>
                <View style={style.info}>
                    <Text style={style.titulo}>
                        Favoritar
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
                    <Text>Ingredientes</Text>

                    <FlatList
                        data={[
                            { key: '5 dentes de alho amassados' },
                            { key: '5 colheres de sopa de óleo' },
                            { key: '1 colher de sopa de manteiga' },
                            { key: 'Sal a gosto' },
                        ]}
                        renderItem={({ item }) => <Text style={style.item}> ☼ {item.key};</Text>}
                    />
                </View>

                <View style={style.ingredient}>
                    <FlatList
                        data={[
                            { key: '5 dentes de alho amassados' },
                            { key: '5 colheres de sopa de óleo' },
                            { key: '1 colher de sopa de manteiga' },
                            { key: 'Sal a gosto' },
                        ]}
                        renderItem={({ item }) => <Text style={style.item}> ☼ {item.key};</Text>}
                    />
                </View>
            </View>
        </View>

    )
}