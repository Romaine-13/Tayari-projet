
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import sortie from '../assets/sortie.jpeg'
import entre from '../assets/Entre.jpg'
import { useState } from "react";
import Geo from "./Geo.jsx"
import UserAvatar from 'react-native-user-avatar';
import romaine from '../assets/romaine.png';
import Profil from './Profil.jsx'


export default function Pointage() {
    const [isPress, setIsPress] = useState(false);

    const handlePress = (navigation) => {
        navigation.navigate('Profil')

    }

    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <View>
                <Text style={styles.text}>Heure: {new Date().toLocaleTimeString()}</Text>
                <Text style={styles.text}>Horaire du jour || 08H00 - 15H30</Text>
                </View>
                
                <View><Profil/></View>

            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => setIsPress(true)} style={styles.button}>
                    <Image source={entre} style={styles.image} />
                    <Text style={styles.buttonText}>Heure d'arrivée</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIsPress(false)} style={styles.button}>
                    <Image source={sortie} style={styles.image} />
                </TouchableOpacity>
            </View>
            <View style={styles.buttonText}>
                {isPress ?
                    <Text style={styles.buttonText}>Heure d'arrivée</Text> && <Geo /> :
                    <Text style={styles.buttonText}>Heure de sortie</Text>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginTop: 20,
        padding: 10,
        height: 100,
    },
    text: {
        
            "flexDirection": "row",
            "backgroundColor": "#63b3ed",
            "color": "#484E58",
            "marginLeft": 6,
            "marginBottom": 2,
            "padding": 10,
            "borderRadius": 20
          
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 4,
        marginLeft: 6,
    },
    button: {
        // flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 2,
        padding: 6,
    },
    image: {
        width: 100,
        height: 100,
    },
    buttonText: {
        color: '#484E58',
        marginLeft: 6,
        fontSize: 18,
        marginTop: 3,
    },
    UserAvatar: {
        width: 30,
        borderRadius: 50,
        marginTop:10,
        marginLeft:15,
      
        
    },
});



