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
        marginTop: "20%",
        marginBottom: "10%"

    },
    userInfo: {
       fontSize: 25,
       fontWeight: 'bold',
    },
}
);