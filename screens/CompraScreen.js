import * as React from "react";
import { Box, Heading, VStack, Text, FormControl, Input, Button, Center,
   NativeBaseProvider, Image, ScrollView, View, Checkbox } from "native-base";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const CompraScreen = () => {
  const navigation = useNavigation();
  return <Center w="100%">
      
      <Box safeArea p="2" w="90%" maxW="290" py="8">
     
        <Heading size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
         
        
          DATOS DE ENVÍO
        </Heading>

        <Heading mt="1" color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="medium" size="xs">
          
        </Heading>
        <VStack space={3} mt="5">
        <Image source={{
            uri: "https://ayuda.proscai.com/hc/article_attachments/360070808412/mceclip0.png"
          }}  />
         <FormControl>
            <FormControl.Label>Calle </FormControl.Label>
             <Input placeholder="Ingresa el nombre de la calle" onChangeText={value => setData({ ...formData,
        name: value
      })} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Número exterior</FormControl.Label>
                <Input placeholder="Ingresa el número exterio" onChangeText={value => setData({ ...formData,
            name: value
          })} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Numero interior (opcional)</FormControl.Label>
                <Input placeholder="" onChangeText={value => setData({ ...formData,
            name: value
          })} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Colonia</FormControl.Label>
              <Input placeholder="Ingresa la colonia" onChangeText={value => setData({ ...formData,
            name: value
          })} />
          </FormControl>
            <FormControl>
            <FormControl.Label>Código postal</FormControl.Label>
             <Input placeholder="Ingresa el código postal" onChangeText={value => setData({ ...formData,
            name: value
          })} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Ciudad</FormControl.Label>
              <Input placeholder="Ingresa la ciudad" onChangeText={value => setData({ ...formData,
            name: value
          })} />
          </FormControl>
          <Heading size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
         
        
          DATOS DE TARJETA
        </Heading>
        <FormControl>
            <FormControl.Label>Tipo</FormControl.Label>
              <Input placeholder="VISA/MasterCard" onChangeText={value => setData({ ...formData,
            name: value
          })} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Número de tarjeta</FormControl.Label>
              <Input placeholder="Ingresa el número de tu tarjeta" onChangeText={value => setData({ ...formData,
            name: value
          })} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Fecha de vencimiento</FormControl.Label>
              <Input placeholder="MM/AA" onChangeText={value => setData({ ...formData,
            name: value
          })} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Código de seguridad</FormControl.Label>
              <Input placeholder="***" onChangeText={value => setData({ ...formData,
            name: value
          })} />
          </FormControl>
          <Button mt="2" colorScheme="green" onPress={() => navigation.navigate('Vende y compra celulares')}>
            COMPRAR
          </Button>
        </VStack>
      </Box>
    </Center>;
};


    export default () => {
        return (
          <NativeBaseProvider>
            <ScrollView>
            <Center flex={1} px="3">
            
                <CompraScreen />
                
            </Center>
            </ScrollView>
          </NativeBaseProvider>
          
        );
    };