import * as React from "react";
import * as RN from 'react-native';
import EmojiPicker from "rn-emoji-keyboard";
import { database } from "../config/firebase";
import { collection, addDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from "native-base";


export default function Add(){
    const navigation = useNavigation();
    const [isOpen, setIsOpen] = React.useState(false);
    const [newItem, setNewItem] = React.useState({
        emoji: '📱',
        name: '',
        company: '',
        description: '',
        price: 0,
        isSold: false,
        createdAt: new Date(),
    })

    const handlePick = (emojiObject) => {
        setNewItem({
            ...newItem,
            emoji: emojiObject.emoji,
        });
    }

    const onSend = async () => {
        const docRef = await addDoc(collection(database, 'products'), newItem);
        navigation.goBack();
      }

    return(
        <RN.ScrollView>
        <RN.View style={styles.container}>
        <RN.Text style={styles.title}>Vende tu celular</RN.Text>
        <RN.Text style={styles.emoji} onPress={() => setIsOpen(true)}>{newItem.emoji}</RN.Text>
        <EmojiPicker
        onEmojiSelected={handlePick}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        />
        <RN.TextInput 
                    onChangeText={(text) => setNewItem({...newItem, name: text})}
                    style={styles.inputContainer} 
                    placeholder='Marca' 
                />
        <RN.TextInput 
                    onChangeText={(text) => setNewItem({...newItem, company: text})}
                    style={styles.inputContainer} 
                    placeholder='Compañía' 
                />
        <RN.TextInput 
                    onChangeText={(text) => setNewItem({...newItem, description: text})}
                    style={styles.inputContainer} 
                    placeholder='Descripción' 
                />
        <RN.TextInput 
                    onChangeText={(text) => setNewItem({...newItem, price: text})}
                    style={styles.inputContainer} 
                   placeholder='Precio $' 
                   keyboardType="number-pad"
                />
                 <RN.Button title='Guardar' onPress={onSend} color='#144212'/>
        </RN.View>
        </RN.ScrollView>
    )
}

const styles = RN.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
    },
    inputContainer: {
        width: '90%',
        padding: 13,
        marginVertical: 6,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 6,
      },
    emoji: {
        fontSize: 100,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 6,
        padding: 10,
        marginVertical: 6,
    }

});