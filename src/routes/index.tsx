import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Context Providers
import { AvailableVehicleProvider } from '@context/availableVehicles/availableVehicles.context';
import { FilterProvider } from '@context/filter/filter.context';

// components
import Home from '../pages/Home';
import About from '../pages/About';
import RandomPage from '../pages/RandomPage';

const Stack = createNativeStackNavigator();

// Customizing Default Themes
const MyDefaultTheme: Theme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#e6356f',
  },
};

const MyDarkTheme: Theme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: '#e6356f',
    background: '#151515',
    card: '#333333',
  },
};

const Routes: React.FC = () => {
  return (
    <NavigationContainer theme={useColorScheme() === 'dark' ? MyDarkTheme : MyDefaultTheme}>
      <AvailableVehicleProvider>
        <FilterProvider>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="RandomPage" component={RandomPage} />
          </Stack.Navigator>
        </FilterProvider>
      </AvailableVehicleProvider>
    </NavigationContainer>
  );
};

export default Routes;
