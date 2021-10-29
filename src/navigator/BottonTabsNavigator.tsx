import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import SearchStackNavigator from './SearchStackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottonTabsNavigator = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen
        name="HomeStackNavigator"   
        component={HomeStackNavigator} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) =>(
            <Icon 
              name='home-outline'
              color={color}
              size={25}
            />
          )
        }}  
      />

      <Tab.Screen 
        name="SearchStackNavigator" 
        component={SearchStackNavigator} 
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <Icon 
              name='search-outline'
              color={color}
              size={25}
            />
          )
        }}
      />
    </Tab.Navigator>
  );

}

export default BottonTabsNavigator;