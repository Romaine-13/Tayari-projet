import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function Geo() {
    const [location, setLocation] = useState(null);
    const [address, setAddress] = useState(null);
    const [currentDate, setCurrentDate] = useState(null);

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

            // Set current date and time
            const date = new Date();
            setCurrentDate(date.toLocaleString());
        })();
    }, []);

    return (
        <View>
            <Text >Latitude: {location ? location.coords.latitude : 'Loading...'}</Text>
            <Text >Longitude: {location ? location.coords.longitude : 'Loading...'}</Text>
            <Text >Adresse: {address || 'Loading...'}</Text>
            <Text  >Date et heure actuelles: {currentDate || 'Loading...'}</Text>
        </View>
    );
}
