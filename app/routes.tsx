import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Detail, History, Home, Splashscreen} from './screens';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name={'Splashscreen'} component={Splashscreen} />
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'Detail'} component={Detail} />
      <Stack.Screen name={'History'} component={History} />
    </Stack.Navigator>
  );
}

export default Routes;
