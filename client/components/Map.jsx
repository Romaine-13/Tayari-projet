// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import MapView, { Marker, Circle } from 'react-native-maps';
// import * as Location from 'expo-location';
// import geolib from 'geolib'; // Importez geolib

// export default function Geo() {
//     const [location, setLocation] = useState(null);
//     const [address, setAddress] = useState(null);
//     const [currentDate, setCurrentDate] = useState(null);
//     const [isInsideGeofence, setIsInsideGeofence] = useState(false);

//     useEffect(() => {
//         (async () => {
//             let { status } = await Location.requestForegroundPermissionsAsync();
//             if (status !== 'granted') {
//                 console.log('Permission to access location was denied');
//                 return;
//             }

//             let location = await Location.getCurrentPositionAsync({});
//             setLocation(location);

//             let geocode = await Location.reverseGeocodeAsync({
//                 latitude: location.coords.latitude,
//                 longitude: location.coords.longitude,
//             });
//             if (geocode.length > 0) {
//                 setAddress(geocode[0].name);
//             }

//             // Vérifie si l'utilisateur est à l'intérieur de la zone de geofencing
//             const distance = geolib.getDistance(
//                 { latitude: location.coords.latitude, longitude: location.coords.longitude },
//                 fenceCenter
//             );
//             setIsInsideGeofence(distance <= maxDistance);

//             // Set current date and time
//             const date = new Date();
//             setCurrentDate(date.toLocaleString());
//         })();
//     }, []);

//     return (
//         <View style={styles.container}>
//             <MapView
//                 style={styles.map}
//                 initialRegion={{
//                     latitude: location ? location.coords.latitude : 0,
//                     longitude: location ? location.coords.longitude : 0,
//                     latitudeDelta: 0.0922,
//                     longitudeDelta: 0.0421,
//                 }}
//             >
//                 {location && <Marker coordinate={{ latitude: location.coords.latitude, longitude: location.coords.longitude }} />}
//                 <Circle
//                     center={fenceCenter}
//                     radius={maxDistance}
//                     fillColor="rgba(255, 0, 0, 0.5)"
//                 />
//             </MapView>
//             <Text>Adresse: {address || 'Loading...'}</Text>
//             <Text>Date et heure actuelles: {currentDate || 'Loading...'}</Text>
//             <Text>Inside Geofence: {isInsideGeofence ? 'Yes' : 'No'}</Text>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     map: {
//         width: '100%',
//         height: '50%',
//     },
// });
