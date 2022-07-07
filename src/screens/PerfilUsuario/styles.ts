import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    userImage: {
        width: 150,
        height: 150,
        borderRadius: 40,
        tintColor: '#FFBD17',
        marginTop: "10%",

    },
    userInfo: {
       fontSize: 25,
       fontWeight: 'bold',
       marginBottom: '5%',
    },
    input: {
        padding: 10,
        marginHorizontal: 20,
        marginTop: 15,
        borderRadius: 7,
        fontSize: 18,
        borderWidth: 1.8,
        borderColor: '#aaa',
        color: '#aaa'
    },
    text: {
        marginLeft: 22,
        fontSize: 20,
    },
}
);