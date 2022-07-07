import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    imagem: {
        width: 300,
        height: 300,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 10
    },
    card: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 10
    },
    info: {
        flexDirection: 'column',
        alignSelf: 'center',
        textAlign: 'center',
    
        backgroundColor: 'lightgray',
        padding: 10,
        width: 100,
        height: 70,
        borderRadius: 10,
        marginHorizontal: 4

    },
    titulo: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    texto: {
        fontSize: 17,
        textAlign: 'center',
    },
    fav: {
        width: 20,
        height: 20,
        alignSelf: 'center'
    },
    ingredient: {
        backgroundColor: 'lightgray',
        width: 300,
        flexDirection: 'column',
        alignSelf: 'center',
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
    },
    item: {
        fontSize: 15,
        marginVertical: 7
    }
})
