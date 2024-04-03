// import { View, Text } from "react-native"

// const Welcom = ({ nom}) => {
//     return (
//         <View>
//             <Text  className='text-white' >Hello, {nom}!</Text>

//         </View>
//     );
// }
// export default Welcom ;

// import React, {FC, ReactElement, useEffect, useState} from 'react';
// import {Text} from 'react-native';
// import Parse from 'parse/react-native';
// import Styles from './Styles';

// export const HelloUser = () => {
//   // State variable that will hold username value
//   const [username, setUsername] = useState('');

//   // useEffect is called after the component is initially rendered and
//   // after every other render
//   useEffect(() => {
//     // Since the async method Parse.User.currentAsync is needed to
//     // retrieve the current user data, you need to declare an async
//     // function here and call it afterwards
//     async function getCurrentUser() {
//       // This condition ensures that username is updated only if needed
//       if (username === '') {
//         const currentUser = await Parse.User.currentAsync();
//         if (currentUser !== null) {
//           setUsername(currentUser.getUsername());
//         }
//       }
//     }
//     getCurrentUser();
//   }, [username]);

//   // Note the condition operator here, so the "Hello" text is only
//   // rendered if there is an username value
//   return (
//     <View style={Styles.login_wrapper}>
//       <View style={Styles.form}>
//         {username !== '' && <Text>{`Hello ${username}!`}</Text>}
//       </View>
//     </View>
//   );
// };


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
            <Text >Date et heure actuelles: {currentDate || 'Loading...'}</Text>
        </View>
    );
}
