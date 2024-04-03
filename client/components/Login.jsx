import React, { useState } from 'react';
import { TextInput, View, Image, Text, StyleSheet,Alert } from 'react-native';
import logo from '../assets/logo.png';
import Bouton from './Bouton';
// import Map from './Map';:

const profil={}
export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [contacts, setContacts] = useState([]);

    const handlePress = (e) => {
        e.preventDefault();
        const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i;
        const isValidEmail = emailReg.test(email);
        const passwordReg = /([0-9]{6,8})/;
        const isValidPassword = passwordReg.test(password);
    
        if (isValidEmail && isValidPassword) {
            // Créer un nouvel objet contact
            const newContact = {
                email: email,
                password: password
            };
    
            // Ajouter le nouvel objet contact au tableau des contacts
            setContacts([...contacts, newContact]);
    
            Alert.alert('WELCOME HOME');
            navigation.navigate('Pointage');
        } else {
            Alert.alert('Email or password is invalid');
        }
    };

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Mot de passe"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
            </View>
            <Bouton name='se connecter' onPress={handlePress} />
            <Text style={styles.forgotPassword} onPress={() => navigation.navigate('Pointage')}>Mot de passe oublié</Text>
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
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    forgotPassword: {
        textAlign: 'center',
        marginTop: 15,
    },
});
