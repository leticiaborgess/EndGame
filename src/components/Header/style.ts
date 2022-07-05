import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    // paddingTop: 20,
    flex: 1
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    flexDirection : 'row',
    backgroundColor: '#FFBD17',
    padding: 30,
  },
  logo: {
    alignItems: 'center',
    width : 50,
    height: 50,
    marginLeft: '2%'
  },
  nome: {
    marginLeft: '27%',
    fontWeight: 'bold',
    fontSize: 25,
    
  },
})