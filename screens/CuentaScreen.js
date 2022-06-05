
import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert } from "react-native";
import { getAuth, updatePassword, updateEmail, signOut, deleteUser } from "firebase/auth";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
const backImage = require("../assets/logo.png");
import colors from '../colors';

export default function CuentaScreen({  }) {
    const [newEmail, setEmail] = useState("");
    const [newPassword, setPassword] = useState("");
    const navigation = useNavigation();

    const auth = getAuth();
    const user = auth.currentUser;

    const onSignOut = () => {
      signOut(auth).catch(error => console.log('Error logging out: ', error));
    };

    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity
              style={{
                marginRight: 10
              }}
              onPress={onSignOut}
            >
              <AntDesign name="logout" size={24} color={colors.black} style={{marginRight: 10}}/>
            </TouchableOpacity>
          )
        });
      }, [navigation]);

    const onHandlePass = () => {
        if (newPassword !== ""){
            updatePassword(user, newPassword)
            .then(() => Alert.alert("Contraseña actualizada"))
            .catch((err) => Alert.alert("error", err.message));
        }
    };

    const onHandleEmail = () => {
      if (newEmail !== ""){
          updateEmail(user, newEmail)
          .then(() => Alert.alert("Email actualizado"))
          .catch((err) => Alert.alert("error", err.message));
      }
  };

  const deleteAccount = () => {
    deleteUser(user).then(() => console.log("success"))
    .catch((err) => Alert.alert("error", err.message));
  };

    return (
        <View style={styles.container}>

            <Image source={backImage} style={styles.backImage} />
            <SafeAreaView style={styles.form}>
                <TextInput
        style={styles.input}
        placeholder="example@gmail.com"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoFocus={true}
        value={newEmail}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="********"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        textContentType="password"
        value={newPassword}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={onHandlePass}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> Actualizar contraseña</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onHandleEmail}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> Actualizar email</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={deleteAccount}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> Borrar mi cuenta</Text>
      </TouchableOpacity>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    title: {
      fontSize: 36,
      fontWeight: 'bold',
      color: "black",
      alignSelf: "center",
      paddingBottom: 24,
      height: 220
    },
    input: {
      backgroundColor: "#F6F7FB",
      height: 58,
      marginBottom: 20,
      fontSize: 16,
      borderRadius: 10,
      padding: 12,
    },
    backImage: {
      width: "60%",
      height: 240,
      position: "absolute",
      top: 30,
      alignSelf: 'center',
      resizeMode: 'cover',
    },
    whiteSheet: {
      width: '100%',
      height: '75%',
      position: "absolute",
      bottom: 0,
      backgroundColor: '#fff',
      borderTopLeftRadius: 60,
    },
    form: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 30,
    },
    button: {
      backgroundColor: '#144212',
      height: 58,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
  });