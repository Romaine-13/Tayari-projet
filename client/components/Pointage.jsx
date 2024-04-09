import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import Map from './Map';
// import Geo from './Geo';
import Pointage from './Pointage';

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <Stack.Navigator>
            <Tab.Navigator>
                <Tab.Screen
                    name="Map"
                    component={Map}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Map',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="map" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Pointage"
                    component={Pointage}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Pointage',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons onPress={() => navigation.navigate('Pointage')} name="home" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </Stack.Navigator>
       
    );
};

export default App;
