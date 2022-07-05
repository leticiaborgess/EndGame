import { Cadastro } from "../screens/Cadastro";
import { Login } from "../screens/Login";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "../screens/Home";

const Stack = createStackNavigator();

export const Rotas = () => {
  return (
    <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Cadastro'
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name='Cadastro' component={Cadastro}/>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='Home' component={Home}/>
                
            </Stack.Navigator>
        </NavigationContainer>
  )
}
    