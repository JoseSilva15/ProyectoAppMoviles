import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import CompraScreen from "./CompraScreen";
import CuentaScreen from "./CuentaScreen";
import ExplorarScreen from "./ExplorarScreen";
import VenderScreen from "./VenderScreen";
import InicioScreen from "./InicioScreen";
import { Icon } from "react-native-elements";

//Menu de navegacion al inferior de la pantalla 

    const Tab = createBottomTabNavigator()
     export default function Tabs () {
        const screenOptions = (route, color) => {
            let iconName
            switch (route.name) {
                case "Inicio":
                    iconName="home-outline"
                    
                    break;
                case "Explorar":
                      iconName="compass-outline"
              
                      break;
                case "Vender":
                        iconName="plus-circle"
                        
                        break;
                case "Compras":
                          iconName="cart-outline"
                          
                          break;
                case "Cuenta":
                            iconName="account-circle-outline"
                            
                            break;
                
           
            }
            return (
              <Icon
                
                type="material-community"
                name={iconName}
                size={22}
                color={color}
            

              />
            )
          
        }


    
    return (
      <NavigationContainer>
        <Tab.Navigator 
        initialRouteName="InicioScreen"
           tabBarOptions={{
            inactiveTintColor: "#0E6655",
            activeTintColor: "#5D6D7E"
          }}
          screenOptions={({ route })=> ({
            tabBarIcon: ({ color }) => screenOptions(route, color)
           })}
          
        >
          <Tab.Screen name="Inicio" component={InicioScreen} screenOptions={{ headerShown: false }}/>
          <Tab.Screen name="Explorar" component={ExplorarScreen} options={{title: "Explorar"}}/>
          <Tab.Screen name="Vender" component={VenderScreen} options={{title: "Vender"}}/>
          <Tab.Screen name="Compras" component={CompraScreen} options={{title: "Compras"}}/>
          <Tab.Screen name="Cuenta" component={CuentaScreen} options={{title: "Cuenta"}}/>
          
          
         

        </Tab.Navigator>
      </NavigationContainer>
    );
  };
  
 