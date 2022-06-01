import { StatusBar } from 'expo-status-bar';
import React, { useState, createContext, useContext, useEffect } from 'react';
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./config/firebase";

import Chat from "./screens/Chat";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import Home2 from "./screens/Home2";
import Add from "./screens/Add";
import CompraScreen from './screens/CompraScreen';
import ExplorarScreen from './screens/ExplorarScreen';
import InicioScreen from './screens/InicioScreen';
import CuentaScreen from './screens/CuentaScreen';
import VenderScreen from './screens/VenderScreen';

const Stack = createNativeStackNavigator();
const AuthenticatedUserContext = createContext({});

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthenticatedUserContext.Provider value={{user, setUser}}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

function ChatStack (){
  return(
    <Stack.Navigator defaultScreenOptions={Home}>
      <Stack.Screen name="Inicio" component={Home} />
      <Stack.Screen name="Chatea con nosotros" component={Chat} />
      <Stack.Screen name="Vende y compra celulares" component={Home2} />
      <Stack.Screen name="Promociones" component={InicioScreen}/>
      <Stack.Screen name="Explorar" component={ExplorarScreen}/>
      <Stack.Screen name="Cuenta" component={CuentaScreen}/>
      <Stack.Screen name="Agregar nuevo celular" component={Add} options={{presentation: 'modal'}} />
    </Stack.Navigator>
  );
}


function AuthStack (){
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

function RootNavigator() {
  const {user, setUser} = useContext(AuthenticatedUserContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(
      auth, async authenticatedUser => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setLoading(false);
      }
    );
    return() => unsubscribeAuth;
  }, [user]);
  if(loading) {
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    )
  }
  return(
    <NavigationContainer>
    {user ? <ChatStack /> : <AuthStack/>}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  );
}


