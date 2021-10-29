import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen';
import CountryScreen from '../screens/CountryScreen';

export type RootStackParams = {
  SearchScreen: undefined;
  CountryScreen: any;
}

const Stack = createStackNavigator();

const SearchStackNavigator = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SearchScreen"  component={SearchScreen} />
      <Stack.Screen name="CountryScreen" component={CountryScreen} />
    </Stack.Navigator>
  );
}

export default SearchStackNavigator;