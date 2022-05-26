import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// components
import Home from '../pages/Home';

const Stack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeStack" component={Home} />
    </Stack.Navigator>
  );
};

export default Stacks;
