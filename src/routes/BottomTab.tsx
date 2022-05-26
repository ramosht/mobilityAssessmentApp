import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// pages
import Home from '../pages/Home';
import About from '../pages/About';
import RandomPage from '../pages/RandomPage';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="RandomPage" component={RandomPage} />
    </Tab.Navigator>
  );
};

export default BottomTab;
