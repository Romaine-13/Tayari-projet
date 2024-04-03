import React, { useState } from 'react';
import { View, Text, Image, TextInput, Alert, StyleSheet } from 'react-native';
import logo from '../assets/logo.png';
import Bouton from './Bouton';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlePress = () => {
        const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i;
        const isValidEmail = emailReg.test(email);
        const passwordReg = /([0-9]{6,8})/;
        const isValidPassword = passwordReg.test(password);

        if (isValidEmail && isValidPassword) {
            navigation.navigate('Pointage');
        } else {
            Alert.alert('Email or password is invalid');
        }
    };

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <View>
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
        backgroundColor: 'white',
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        width: '70%',
        height: 40,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    forgotPassword: {
        textAlign: 'center',
        marginTop: 20,
        textDecorationLine: 'underline',
    },
});
