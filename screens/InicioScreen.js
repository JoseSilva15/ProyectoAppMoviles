import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, flexDirection} from "react-native";
import Slider from "./Slider";
import Slder2 from "./Slider2";
import Info from "./Info";
import { Button, Box, NativeBaseProvider, Center} from "native-base";





const InicioScreen= () => {
 
  return (
      <ScrollView>
      <View style={styles.backcol}>
         
      <Text style={styles.Txt}>Celulares de cualquier gama a un buen precio</Text>
      
      <Slider />

      <Text style={styles.Txt}>Marcas más populares</Text>

      <Text></Text>
      <NativeBaseProvider>
            <Center flex={1} px="3">
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png',
        }}
      />
      <Text></Text>
       <Image
        style={styles.tinyLogo2}
        source={{
          uri: 'https://megatecnologia.com/img/cms/Apple-Logo.png',
        }}
      />
      <Text></Text>
       <Image
        style={styles.tinyLogo3}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Motorola_new_logo.svg/2560px-Motorola_new_logo.svg.png',
        }}
      />
      </Center>
      </NativeBaseProvider>
      <Text></Text>
      <Slder2 />
      <Text></Text>
      <Info />
      <Text></Text>
    
        </View>
        </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    padding: 0,
  },
  Txt: {

    fontSize: 20, 
    textAlign: 'center',
    margin: 10, 
    fontFamily: 'Bold'
  },
  LogoApp: {
    width: 150,
    height: 50,
    alignContent: 'space-between',
    flex: 1,
    padding: 6,
  },
  tinyLogo: {
    width: 158,
    height: 50,
    alignContent: 'space-between',
    flex: 1,
    padding: 6,
  },
  tinyLogo2: {
    width: 158,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    alignContent: 'space-between',
    flex: 1,
    padding: 6,
    
  },
  tinyLogo3: {
    width: 235,
    height: 54,
    alignContent: 'space-between',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 6,
  },
  backcol:{
    backgroundColor:'#E2E5DF'
  }
});

export default InicioScreen;
