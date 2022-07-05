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
    marginLeft: '20%',
    fontWeight: 'bold',
    fontSize: 25
  },
  body: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginTop: '5%',
    width: 250

  }
 
})