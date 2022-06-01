import React from "react";
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider } from "native-base";
//Codigo donde se muestra card con descuento, se uso en la pantalla de inicio al final.
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
          <AspectRatio w="100%" ratio={16 / 8}>
            <Image source={{
            uri: "https://ayuda.proscai.com/hc/article_attachments/360070808412/mceclip0.png"
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
           
            Hasta 40% de descuento
            </Heading>
           
          </Stack>
          <Text fontWeight="900">
          Consigue los equipos que estás buscando a precios increíbles.Sólo en Hot Sale MyPhoneSell 2022. 
          Consigue el equipo que estás buscando. Llévatelo a un precio increíble.
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "#FDFEFE"
            }} fontWeight="400">
               Vigencia del 29 de mayo al 7 de junio 2022. 
               Aplican restricciones.
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
