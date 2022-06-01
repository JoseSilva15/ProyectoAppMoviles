import React from "react";
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider, ScrollView, View } from "native-base";
import { StyleSheet } from "react-native";

//---------Información sobre la empresa---------------------------
const Example = () => {
  return <Box alignItems="center">
      <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="0" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "#FDFEFE"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={10 / 7}>
            <Image source={{
            uri: "https://www.zonamovilidad.es/fotos/2/aumento-uso-movil.jpg"
          }} alt="image" />
          </AspectRatio>
          <Center bg="violet.500" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
         
          </Center>
        </Box>
        <Stack p="8" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
            Nuestra empresa
            </Heading>
          </Stack>
          <Text fontWeight="900">
          Al fundar MyPhoneSell, teníamos un sólo objetivo en mente: crear una app 
          que ofreciera la más alta calidad, con las mejores opciones para realizar tus compras y 
          con alto nivel de confiabilidad. Nuestra pasión por la excelencia nos condujo a 
          materializar esta misión, 
          siendo ésta la parte fundamental que nos ha impulsado a seguir adelante. 
          
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between" >
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "#FDFEFE"
            }} fontWeight="400">
                Sabemos que cada producto es importante, por lo que procuramos 
                que todo el proceso sea lo más agradable posible.
                 ¡Echa un vistazo y compruébalo por tu cuenta!
               
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>;
};


export default () => {
    return (
      <NativeBaseProvider>
        <Center flex={1} px="3">
            <Example />
        </Center>
      </NativeBaseProvider>
    );
};
