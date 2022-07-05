import { StyleSheet } from "react-native";

export const style = StyleSheet.create({

    container:{
        alignItems: 'center'
    },
    header: {
      alignItems: 'center',
      paddingTop: '15%'
    },
    logo: {
        alignItems: 'center',
        width : 90,
        height: 90,
       
      },
      nome:{
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: '10%',
      },
      input: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        width: 250
    
      },

      errorMsg: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
        backgroundColor: '#f77',
        textAlign: 'center'
      }
})