
import 'react-native-gesture-handler';
import React from 'react';
import {Image, SafeAreaView, StatusBar, Text, View} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {UserRegistration} from './UserRegistration';
import Styles from './Styles';

// Your Parse initialization configuration goes here
Parse.setAsyncStorage(AsyncStorage);
const PARSE_APPLICATION_ID= string = 'APPLICATION_ID';
const PARSE_HOST_URL= string = 'HOST_URL';
const PARSE_JAVASCRIPT_ID= string = 'JAVASCRIPT_ID';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_ID);
Parse.serverURL = PARSE_HOST_URL;

// Wrap your old app screen in a separate function, so you can create a screen
// inside the navigator; you can also declare your screens in a separate file, 
// export and import here to reduce some clutter
function UserRegistrationScreen() {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={Styles.login_container}>
        <View style={Styles.login_header}>
         
          <Text style={Styles.login_header_text}>
            <Text style={Styles.login_header_text_bold}>
              {'React Native on Back4App - '}
            </Text>
            {' User registration'}
          </Text>
        </View>
        <UserRegistration />
      </SafeAreaView>
    </>
  );
}

// Create your main navigator here
const Stack = createStackNavigator();

// Add the stack navigator to your NavigationContainer
// and in it you can add all your app screens in the order you need
// them on your stack
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={UserLogInScreen} />
      <Stack.Screen name="Sign Up" component={UserRegistrationScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;