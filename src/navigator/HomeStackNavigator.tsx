import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CountryScreen from '../screens/CountryScreen';
import { Countries } from '../interfaces/countriesInterface';


export type RootStackParams = {
  HomeScreen: undefined;
  CountryScreen: Countries;
}

const Stack = createStackNavigator<RootStackParams>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="HomeScreen"    component={HomeScreen} />
      <Stack.Screen name="CountryScreen" component={CountryScreen} />

    </Stack.Navigator>
  );
}

export default HomeStackNavigator;