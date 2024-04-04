import React from 'react';
import { View, Text, Image, StatusBar, ScrollView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Pointage from './components/Pointage';
// import Profil from './components/Profil';
import Login from './components/Login';
import Home from './components/Home';
import LoginTwo from './components/LoginTwo';
import Geo from './components/Geo';
// import Map from './components/Map';




// export default function App() {

//   return (
//     <View className=''>
//       <StatusBar style="auto" />
//       {/* <Profil/> */}
//       <Pointage/>
//         {/* <Home /> */}
//         {/* <Login/> */}
//         {/* <  LoginTwo/> */}

//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name="Home" component={Home} options={{
          headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{
          headerShown: false
        }} />
        <Stack.Screen name="LoginTwo" component={LoginTwo} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Geo" component={Geo} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Pointage" component={Pointage} options={{
          headerShown: false
        }} />
         {/* <Stack.Screen name="Map" component={Map} options={{
          headerShown: false
        }} />
        */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;