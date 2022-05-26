import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// components
import Home from '../pages/Home';
// import BottomTab from './BottomTab';
import About from '../pages/About';
import RandomPage from '../pages/RandomPage';

const Stack = createNativeStackNavigator();

// Customizing Default Themes
const MyDefaultTheme: Theme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#006664',
  },
};

const MyDarkTheme: Theme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: '#006664',
  },
};

const Routes = () => {
  return (
    <NavigationContainer theme={useColorScheme() === 'dark' ? MyDarkTheme : MyDefaultTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* BottomTab waiting to be discovered */}
        {/* <Stack.Screen name="HomeBottomTab" component={BottomTab} /> */}
        {/* <Stack.Screen name="AboutBottomTab" component={BottomTab} /> */}
        {/* <Stack.Screen name="RandomPageBottomTab" component={BottomTab} /> */}

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="RandomPage" component={RandomPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
