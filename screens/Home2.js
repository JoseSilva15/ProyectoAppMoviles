import * as React from "react";
import * as RN from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { database } from '../config/firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import Product from '../components/Product';


export default function Home2(){
    const navigation = useNavigation();
    const [products, setProducts] = React.useState([]);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <RN.Button title='Agregar' onPress={() => navigation.navigate('Agregar nuevo celular')} color= '#144212' />
        })
    },[navigation])

    React.useEffect(() => {
        const collectioRef = collection(database, 'products');
        const q = query(collectioRef, orderBy('createdAt', 'desc'));

        const unsubscribe = onSnapshot(q, querySnapshot => {
            console.log('querySnapshot unsusbscribe');
              setProducts(
                querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    emoji: doc.data().emoji,
                    name: doc.data().name,
                    company: doc.data().company,
                    description: doc.data().description,
                    price: doc.data().price,
                    isSold: doc.data().isSold,
                    createdAt: doc.data().createdAt,
                }))
              );
            });
        return unsubscribe;
    },[])
    return(
        <RN.View style={styles.container}>
            <RN.ScrollView contentContainerStyle={{paddingBottom: 100}}>
            <RN.Text style={styles.title}>Celulares</RN.Text>
                {products.map(product => <Product key={product.id} {...product} />)}
            </RN.ScrollView>
        </RN.View>
    )
}

const styles = RN.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F3F9',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        margin: 16,
    },
});