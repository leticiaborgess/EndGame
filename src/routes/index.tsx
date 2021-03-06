import { Cadastro } from "../screens/Cadastro";
import { Login } from "../screens/Login";
import { Home } from "../screens/Home";
import { Logout } from "../screens/Logout";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Receitas } from "../screens/Receitas";
import { Categorias } from "../screens/Categorias";
import { useContext } from "react";
import { UserInfoContext } from "../context/UserInfoContext";
import { ReceitaEspecifica } from "../screens/ReceitaEspecifica";
import { PerfilUsuario } from "../screens/PerfilUsuario";
import { Favoritos } from "../screens/Favoritos";

const Stack = createStackNavigator();

function MyStack() {

  return (
    <Stack.Navigator
      initialRouteName= "Cadastro"
      screenOptions={{
        headerShown: false
      }}>

      <Stack.Screen name='Cadastro' component={Cadastro} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='ReceitaEspecifica' component={ReceitaEspecifica} />
      <Stack.Screen name='Home' component={MyDrawer} />
    </Stack.Navigator>
  )
}

const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (

    <Drawer.Navigator
    
    screenOptions={{
      headerShown: false,
      drawerPosition: "right",
      drawerActiveBackgroundColor: '#FFBD17',
      drawerLabelStyle:{
        color: 'black'
      },
      drawerStyle: {
        backgroundColor: '#FFE9B1',
      }
      
    }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Recipes" component={Receitas} />
      <Drawer.Screen name="Categories" component={Categorias} />
      <Drawer.Screen name="Profile" component={PerfilUsuario} />
      <Drawer.Screen name="Favorites" component={Favoritos} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}
export const Rotas = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}
