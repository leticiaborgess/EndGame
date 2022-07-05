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
        padding: 20
    },
    sair: {
        fontSize: 25,
        fontWeight: 'bold',
        alignItems: 'center',
        padding: 10,
        textAlign: 'center'
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
        textAlign: 'center',
        color: '#fff' 
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
