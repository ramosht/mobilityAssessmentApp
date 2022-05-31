import React from 'react';
import {AvailableVehicleProps} from '@context/availableVehicles/availableVehicles.types';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
  Theme,
} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

import CustomDrawer from '../components/CustomDrawer';

// Context Providers
import {AvailableVehicleProvider} from '@context/availableVehicles/availableVehicles.context';
import {FilterProvider} from '@context/filter/filter.context';
import {
  AppColorSchemeProvider,
  useAppColorScheme,
} from '@context/theme/theme.context';

// Pages
import Home from '../pages/Home';
import AvailabilityInfo from '../pages/AvailabilityInfo';
import About from '../pages/About';

// Types
type AppRootParamList = {
  Home: undefined;
  AvailabilityInfo: {availableVehicle: AvailableVehicleProps};
  About: undefined;
};

const Drawer = createDrawerNavigator<AppRootParamList>();

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
  const {appTheme} = useAppColorScheme();

  return (
    <NavigationContainer
      theme={appTheme === 'dark' ? MyDarkTheme : MyDefaultTheme}>
      <AvailableVehicleProvider>
        <FilterProvider>
          <AppColorSchemeProvider>
            <Drawer.Navigator
              screenOptions={{headerShown: false}}
              initialRouteName="Home"
              drawerContent={(props: DrawerContentComponentProps) =>
                CustomDrawer(props)
              }>
              <Drawer.Screen name="Home" component={Home} />
              <Drawer.Screen
                name="AvailabilityInfo"
                component={AvailabilityInfo}
              />
              <Drawer.Screen name="About" component={About} />
            </Drawer.Navigator>
          </AppColorSchemeProvider>
        </FilterProvider>
      </AvailableVehicleProvider>
    </NavigationContainer>
  );
};

export default Routes;
