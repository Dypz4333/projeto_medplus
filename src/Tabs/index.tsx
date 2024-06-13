import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'

import Principal from "./Principal";
import Consultas from "./Consultas";
import Explorar from "./Explorar";
import Perfil from "./Perfil";
import Recomendacoes from "./Recomendacoes"

const Tab = createBottomTabNavigator()

const screenOptions = {
  tabBarStyle: {
    backgroundColor: "darkorange",
  },
  tabBarActiveTintColor: "white",
  tabBarInactiveTintColor: "black",
}

const tabs = [
  {
    name: 'Principal',
    component: Principal,
    icon: 'home'
  },
  {
    name: 'Consultas',
    component: Consultas,
    icon: 'calendar'
  },
  {
    name: 'Explorar',
    component: Explorar,
    icon: 'search'
  },
  {
    name: 'Perfil',
    component: Perfil,
    icon: 'person'
  },
  {
    name: 'Recomendações',
    component: Recomendacoes,
    icon: 'add-circle-outline'
  },
]

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={tab.icon} color={color} size={size} />
            )
          }}
        />
      ))
      }
    </Tab.Navigator>
  )
}