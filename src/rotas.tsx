import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Tab = createNativeStackNavigator();

import Cadastro from "./Cadastro";
import Login from "./Login";
import Tabs from "./Tabs";
import Agendamento from "./Agendamento";
import Imc from "./Tabs/calculos/Imc"
import Proteinas from "./Tabs/calculos/Proteinas"
import Calorias from "./Tabs/calculos/Calorias"
import Agua from "./Tabs/calculos/Agua";

export default function Rotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Login" component={Login} options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Cadastro" component={Cadastro} options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Tabs" component={Tabs} options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Agendamento" component={Agendamento} options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Imc" component={Imc} options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Calorias" component={Calorias} options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Proteinas" component={Proteinas} options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Agua" component={Agua} options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}