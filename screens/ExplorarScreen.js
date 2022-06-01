import React from "react";
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider, ScrollView, View } from "native-base";
import { StyleSheet } from "react-native";

//---------Producto no.1---------------------------
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
            uri: "https://i.blogs.es/9cfe71/motorola-moto-g60s-lanzamiento-mexico-precio-oficial-caracteristicas-ficha-tecnica/840_560.jpg"
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
            Smartphone Motorola Moto G60 128GB Gris Desbloqueado
            $4,699.00
            Características
            </Heading>
          </Stack>
          <Text fontWeight="900">
                Pantalla 6.78 Pulgadas
                Batería 6,000 mah
                Cámara trasera: 108 + 8 + 2 mp
               
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "#FDFEFE"
            }} fontWeight="400">
                Navega dentro de tú tienda en línea para encontrar más variedad de equipos y accesorios
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>;
};

//---------Producto no.2---------------------------

const Example2 = () => {
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
          <AspectRatio w="100%" ratio={18/ 18}>
            <Image source={{
            uri: "https://images-americanas.b2w.io/produtos/01/00/img/2969966/6/2969966685_1GG.jpg"
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
              
            Smartphone Samsung Galaxy A32 4GB RAM 128GB ROM Negro Desbloqueado
            $4,699.00
           
            </Heading>
           
          </Stack>
          <Text fontWeight="900">
            
                Pantalla de 6.4 pulgadas

                Cámara 64+8+5+5 MP

                Batería de 5,000 mAh con carga rápida 15W

                Pantalla Super AMOLED Full HD+

                Cámara con lentes de 64MP + 8MP + 5MP + 5MP

                Cámara para selfies es de 20MP
          
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "#FDFEFE"
            }} fontWeight="400">
               Qué esperas para entrar a nuestra tiene en línea donde encontrarás las mejores marcas de smartphones, accesorios para celulares, 
               dispositivos de red, bocinas portátiles, micro sd, cables usb y muchas cosas más
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>;

};
//---------Producto no.3---------------------------
const Example3 = () => {
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
          <AspectRatio w="100%" ratio={18 / 18}>
            <Image source={{
            uri: "https://cdn.shopify.com/s/files/1/0599/0537/6406/products/D_853850-MLM41024695806_032020-O_500x435.jpg?v=1648873107"
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
                Smartphone iPhone X Apple APPLE de 64GB
              Reacondicionado
              $5,599.00
           
            </Heading>
           
          </Stack>
          <Text fontWeight="900">
            Tamaño de la Pantalla 5.8 Pulgadas

            Sistema Operativo iOS

            Resolucion 12MP
        
          
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "#FDFEFE"
            }} fontWeight="400">

                El Apple iPhone X es el móvil de gama top de Apple de 2017 y llega al mercado con una pantalla OLED panorámica con notch y un peso de 174 g. 
                Tiene un diseño compacto con grosor de 7,7 mm con cuerpo unibody metálico y trasera de cristal.
               
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>;
};

//---------Producto no.4---------------------------
const Example4 = () => {
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
            uri: "https://www.proandroid.com/wp-content/uploads/2020/09/Motorola-Moto-G9-Plus-azul.png"
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
            Smartphone Motorola Moto G9 Plus 128GB Azul Desbloqueado
            $6,999.00
           
            </Heading>
           
          </Stack>
          <Text fontWeight="900">
          El Motorola Moto G9 Plus es una nueva variante de la novena generación de la serie Moto G. En este caso, el Moto G9 Plus trae consigo una pantalla Full HD+ de 6.81 pulgadas y está potenciado por un procesador Snapdragon 730G acompañado de 4GB de memoria RAM con 128GB de espacio de almacenamiento interno expandible vía microSD. La cámara principal del Moto G9 Plus es cuádruple, 
          con lentes de 64 MP, 8 MP, 2 MP y 2 MP, mientras que su cámara selfie es de 16 megapixels.
        
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "#FDFEFE"
            }} fontWeight="400">
              
               
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>;
};
//---------Producto no.5---------------------------
const Example5= () => {
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
          <AspectRatio w="100%" ratio={9 / 9}>
            <Image source={{
            uri: "https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/2005666386893_2.jpg"
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
            Motorola Moto G6 Play Original
            $2,130.00
           
            </Heading>
           
          </Stack>
          <Text fontWeight="900">
          CARACTERÍSTICAS Sensores Huella digital (montada en la parte trasera), acelerómetro, giroscopio, proximidad
            
          BATERÍA Tipo Li-Ion 4000 mAh, no extraíble
          Carga Carga rápida de 15 W o 10 W.
        
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "#FDFEFE"
            }} fontWeight="400">
              
               
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>;
};
//---------Producto no.6---------------------------
const Example6 = () => {
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
          <AspectRatio w="100%" ratio={ 7 / 7}>
            <Image source={{
            uri: "https://http2.mlstatic.com/D_NQ_NP_616397-MLA43694219148_102020-O.jpg"
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
            Reacondicionado
            Smartphone iPhone 8 Apple de 64Gb Desbloqueado
            $4,098.00
           
            </Heading>
           
          </Stack>
          <Text fontWeight="900">
          Sistema Operativo iOS

            Memoria expandible no compatible
            Camara trasera 12 MP
            Camara Video 7.1MP
            64GB
            El iPhone Apple 8 de (64GB) es un movil iOS bueno con procesador de 2.39Ghz Hexa-Core que permite 
            una conectividad excelente.
           
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "#FDFEFE"
            }} fontWeight="400">
               TIEMPO ESTIMADO DE ENTREGA 10 DIAS
               
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
              <ScrollView>
                <View >
                <Text></Text>
                  <Text></Text>
                  <Stack space={2}>
                    <Heading size="md" ml="6">
                    Novedades y tendencias 
                    </Heading>
                  
                  </Stack>
                  <Text></Text>
                  <Text></Text>

                <Example />
                <Example2 />
                <Example3 />
                <Example4 />
                <Example5 />
                <Example6 />
                </View>
                </ScrollView>
            </Center>
          </NativeBaseProvider>
        );
    };

  
  