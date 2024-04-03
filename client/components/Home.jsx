import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Bouton from './Bouton';



export default function Home({ navigation }) {
    const handlePress = () => {
        navigation.navigate('Login');
        // Logique de gestion de la connexion
    };
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/Rectangle35.png')} />

            {/* <Image  source={require('../assets/TAYARI SOFTWARE (1).svg.png')} /> */}
            <Text style={styles.title}>
                <Text style={styles.boldText}> TAYARI </Text>
                <Text> SOFTWARE </Text>
            </Text>
            <Text style={styles.description}>
            Bienvenu sur votre application un patenaire de pointage 
et de gestion de temps efficace ,avec  vous en tout   temps 
 avec  GPS pour plus  d’adrresse et  precision .            </Text>
            <Bouton name='se connecter' onPress={handlePress} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    image: {
        width: '100%',
        height: '50%',
        borderRadius: 10,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 10,
    },
    boldText: {
        fontWeight: 'bold',
        color: '#3182CE',
    },
    description: {
        textAlign: 'center',
        color: '#4A5568',
        marginBottom: 20,
    },
});
