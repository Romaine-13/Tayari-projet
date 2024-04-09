import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function Geo() {
    const [location, setLocation] = useState(null);
    const [address, setAddress] = useState(null);
  

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);

            let geocode = await Location.reverseGeocodeAsync({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });
            if (geocode.length > 0) {
                setAddress(geocode[0].name);
            }

            const preciseAddress = 'de laliberation kadea academy';
            if (address === preciseAddress) {
                console.log('L\'appareil est à l\'adresse précise');
                // Effectuer les actions nécessaires lorsque l'appareil est à l'adresse précise
                
            }
        })();
    }, []);

    return (
        <View style={styles.buttonText}>
            <Text >Latitude: {location ? location.coords.latitude : 'Loading...'}</Text>
            <Text >Longitude: {location ? location.coords.longitude : 'Loading...'}</Text>
            <Text >Adresse: {address || 'Loading...'}</Text>

          
        </View>
    );
}

const styles = StyleSheet.create({
    buttonText: {
        color: '#484E58',
        marginLeft: 6,
        fontSize: 20,
        marginTop: 10,
    },
});