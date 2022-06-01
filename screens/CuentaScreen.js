import * as React from "react";
import { Box, Heading, VStack, Text, FormControl, Input, Button, Center,
   NativeBaseProvider, Image, ScrollView, View, Checkbox } from "native-base";

const CuentaScreen = () => {
  return <Center w="100%">
      
      <Box safeArea p="2" w="90%" maxW="290" py="8">
     
        <Heading size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
         
        
          DATOS PERSONALES
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
            <FormControl.Label>Nombre de usuario </FormControl.Label>
             <Input placeholder="Ingresa tu nombre de usuario" onChangeText={value => setData({ ...formData,
        name: value
      })} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Cambiar correo electronico</FormControl.Label>
                <Input placeholder="ejemplo@gmail.com" onChangeText={value => setData({ ...formData,
            name: value
          })} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Cambiar contraseña</FormControl.Label>
                <Input placeholder="**********" onChangeText={value => setData({ ...formData,
            name: value
          })} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Telefono</FormControl.Label>
              <Input placeholder="Ingresa un numero de telefono" onChangeText={value => setData({ ...formData,
            name: value
          })} />
          </FormControl>
            <FormControl>
            <FormControl.Label>Dirección</FormControl.Label>
             <Input placeholder="Ingresa una dirección" onChangeText={value => setData({ ...formData,
            name: value
          })} />
          </FormControl>
          <Checkin />
          <Button mt="2" colorScheme="green">
            ACEPTAR
          </Button>
        </VStack>
      </Box>
    </Center>;
};
const Checkin = () => {
  const [groupValues, setGroupValues] = React.useState([]);
  return <Checkbox.Group onChange={setGroupValues} value={groupValues} accessibilityLabel="choose numbers">
      <Checkbox value="one" my={1}>
        Mujer
      </Checkbox>
      <Checkbox value="two">Hombre</Checkbox>
    </Checkbox.Group>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <ScrollView>
            <Center flex={1} px="3">
            
                <CuentaScreen />
                
            </Center>
            </ScrollView>
          </NativeBaseProvider>
          
        );
    };