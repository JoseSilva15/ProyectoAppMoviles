import * as React from 'react';
import * as RN from 'react-native';
import { database } from '../config/firebase';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function Product({
    id,
    emoji,
    name,
    company,
    description,
    price,
    isSold,
}) {

    const navigation = useNavigation();

    const onDelete = () => {
        const docRef = doc(database, 'products', id);
        deleteDoc(docRef);
    }

    const onEdit = () => {
        const docRef = doc(database, 'products', id);
        navigation.navigate("Datos de envío");
        updateDoc(docRef, {
            isSold: true,
        });
    }

    return(
        <RN.View style={styles.productContainer}>
            <RN.View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <RN.Text style={styles.emoji}>{emoji}</RN.Text>
                    <AntDesign onPress={onDelete} name="delete" size={24} color="black" />
                </RN.View>
            <RN.Text style={styles.name}>{name}</RN.Text>
            <RN.Text style={styles.name}>{company}</RN.Text>
            <RN.Text style={styles.name}>{description}</RN.Text>
            <RN.Text style={styles.price}>${price}</RN.Text>
            {isSold ? (
                    <RN.TouchableOpacity 
                    style={[styles.button, {backgroundColor: 'gray'}]}>
                    <RN.Text style={styles.buttonText}>Vendido</RN.Text>
                </RN.TouchableOpacity>
                )
                : (
                    <RN.TouchableOpacity 
                    onPress={onEdit}
                    style={styles.button}>
                    <RN.Text style={styles.buttonText}>Comprar</RN.Text>
                </RN.TouchableOpacity>
                )}
        </RN.View>
    )
}

const styles = RN.StyleSheet.create({
    productContainer: {
        padding: 16,
        backgroundColor: '#fff',
        margin: 16,
        borderRadius: 8,
    },
    emoji: {
        fontSize: 100,
    },
    name: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'gray',
    },
    button: {
        backgroundColor: '#144212',
        padding: 10,
        marginVertical: 6,
        borderRadius: 8,
        alignItems: 'center'
   },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
});