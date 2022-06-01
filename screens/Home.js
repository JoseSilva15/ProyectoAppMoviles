import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet, Linking} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import colors from '../colors';
import { Entypo } from '@expo/vector-icons';
const backImage = require("../assets/logo.png");

import Slider3 from "./Slider3";
import Empresa from "./Empresa";
import 'react-native-gesture-handler';
import { ScrollView } from "react-native-gesture-handler";
import { Icon } from "native-base";

const ImageUrl = "https://us.123rf.com/450wm/bsd555/bsd5551808/bsd555180801568/106558427-icono-de-color-de-glifo-de-c%C3%ADrculo-de-cuenta-de-usuario-imagen-de-perfil-de-usuario-userpic-s%C3%ADmbolo-.jpg?ver=6";

const Home = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <FontAwesome name="home" size={24} color={colors.gray} style={{marginLeft: 15}}/>
            ),
            headerRight: () => (
                <Image
                    source={{ uri: ImageUrl }}
                    style={{
                        width: 40,
                        height: 40,
                        marginRight: 15,
                    }} />
            ),
        });
    }, [navigation]);

    return (
        <ScrollView>
        <View style={styles.tabcontainer}>
            <Image source={backImage} style={styles.backImage} />
            <TouchableOpacity
                onPress={() => navigation.navigate("Promociones")}
                style={styles.chatButton}
            >
                <Entypo name="home" size={24} color={colors.lightGray} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Explorar")}
                style={styles.chatButton}
            >
                <Entypo name="compass" size={24} color={colors.lightGray} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Vende y compra celulares")}
                style={styles.chatButton}
            >
                <Entypo name="plus" size={24} color={colors.lightGray} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Cuenta")}
                style={styles.chatButton}
            >
                <Entypo name="user" size={24} color={colors.lightGray} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Chatea con nosotros")}
                style={styles.chatButton}
            >
                <Entypo name="chat" size={24} color={colors.lightGray} />
            </TouchableOpacity>
        </View>
        <View>
            <Empresa />
            <Slider3 />
            <FontAwesome.Button name="facebook" style={styles.Button} backgroundColor="#3b5998" onPress={()=>{ Linking.openURL('https://www.facebook.com/tiendamyphonesell')}}>
            MyPhoneSell</FontAwesome.Button>
<FontAwesome.Button name="instagram" style={styles.Button} backgroundColor="#C13584" onPress={()=>{ Linking.openURL('https://www.instagram.com/myphonesell/?hl=es-la')}}>
MyPhoneSell</FontAwesome.Button>
        </View>
        </ScrollView>
    );
    };

    export default Home;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
      backgroundColor: '#E2E5DF',
      alignItems: 'center',
      justifyContent: 'center',
        },
            tabcontainer: {
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                backgroundColor: "#E2E5DF",
            },
            backImage: {
                width: "40%",
                height: 200,
                position: "absolute",
                top: 30,
                alignSelf: 'center',
                resizeMode: 'cover',
              },
              Button: {
                alignItems: 'center', 
        	    justifyContent: 'center',
                borderRadius: 15,
                alignSelf: 'center'
              },
        chatButton: {
            backgroundColor: colors.primary,
            height: 50,
            width: 50,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: colors.primary,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: .9,
            shadowRadius: 8,
            marginRight: 20,
            marginBottom: 50,
        }
    });