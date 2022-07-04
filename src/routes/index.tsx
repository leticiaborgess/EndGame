import { Cadastro } from "../screens/Cadastro";
import { Login } from "../screens/Login";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

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
                
            </Stack.Navigator>
        </NavigationContainer>
  )
}
    