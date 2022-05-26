import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// components
import Home from '../pages/Home';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeBottomTab" component={BottomTab} />
        <Stack.Screen name="AboutBottomTab" component={BottomTab} />
        <Stack.Screen name="RandomPageBottomTab" component={BottomTab} />

        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
