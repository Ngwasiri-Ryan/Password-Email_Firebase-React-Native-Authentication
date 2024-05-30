
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ViewDataScreen from './screens/ViewData';
import WelcomeScreen from './screens/WelcomeScreen';
import AccessScreen from './screens/AccessScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="LoginScreen" component={LoginScreen} />
        <Stack.Screen  options={{headerShown: false}} name="HomeScreen" component={HomeScreen} />
        <Stack.Screen  options={{headerShown: false}} name="ViewDataScreen" component={ViewDataScreen} />
        <Stack.Screen  options={{headerShown: false}} name="AccessScreen" component={AccessScreen} />
        <Stack.Screen  options={{headerShown: false}} name="WelcomeScreen" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;