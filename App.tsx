import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottonTabsNavigator from './src/navigator/BottonTabsNavigator';
import { CountriesProvider } from './src/context/CountriesContext';

const AppState = ({ children }: any) => {

  return (
    <CountriesProvider>
      { children }
    </CountriesProvider>
  )

}

const App = () => {
  return (
    <AppState>
      <NavigationContainer>
        <BottonTabsNavigator/>
      </NavigationContainer>
    </AppState>
  )
}

export default App
