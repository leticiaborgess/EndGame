import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    
    container: {
        backgroundColor: 'lightgray',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        width: 300,
        height: 130,
        marginTop: 60,
        padding: 30
    },
    sair: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    botoesSair:{
        flexDirection: 'row',
        alignSelf: 'center',
    },
    
    sim: {
       fontSize: 25,
        fontWeight: 'bold',
        borderRadius: 15,
        padding: 5,
        width: 100,
        backgroundColor: 'red',
        marginTop: 15,
        textAlign: 'center' 
    },
    nao: {
        fontSize: 25,
        fontWeight: 'bold',
        borderRadius: 15,
        padding: 5,
        width: 100,
        backgroundColor: 'lightgray',
        marginTop: 15, 
        textAlign: 'center',
        marginLeft: 15,
    },

})
