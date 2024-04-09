import React, { useState } from 'react';
import { View, Text, Image, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import logo from '../assets/logo.png';
import Bouton from './Bouton';
import Pointage  from './Pointage'
import axios from 'axios';
// import { createUser } from './services/userService'; 

export default function LoginTwo({ navigation }) {
    const [nom, setNom] = useState('');
    const [postnom, setPostnom] = useState('');
    const [matricule, setMatricule] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState(''); 

    const handlePress = async () => {
        try {
            // Vérifiez si les champs obligatoires sont remplis
            if (!nom || !postnom ||!matricule|| !email || !password) {
               
                Alert.alert('Veuillez remplir tous les champs obligatoires');
                return;
            }
    
            // Créez un objet userData avec les données de l'utilisateur
            const userData = { nom, postnom,gender, matricule, email, password };
            console.log('postnom');
            // Envoyez les données à votre serveur en utilisant Axios
            const response = await axios.post('http://192.168.60.211:8001/user/', userData);
    
            // Redirigez l'utilisateur vers la page suivante (la page de pointage)
            Alert.alert('WELCOME HOME');
            navigation.navigate('Pointage');
        } catch (error) {
            console.error('Error creating user:', error);
            Alert.alert('Une erreur est survenue lors de la création de l\'utilisateur');
        }
    };
    
 

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Nom"
                    value={nom}
                    onChangeText={setNom}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Postnom"
                    value={postnom}
                    onChangeText={setPostnom}
                />
              
                <TextInput
                    style={styles.input}
                    placeholder="Genre"
                    value={gender}
                    onChangeText={setGender}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Matricule"
                    value={matricule}
                    onChangeText={setMatricule}
                />
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
            <Bouton name="S'inscrire" onPress={handlePress} />
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
        height: 40,
        width:200,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    forgotPassword: {
        textAlign: 'center',
        marginTop: 20,
        textDecorationLine: 'underline',
    },
});
