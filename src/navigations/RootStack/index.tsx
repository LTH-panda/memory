import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WriteScreen} from 'screens';
import MainTab from 'navigations/MainTab';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="Write" component={WriteScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
