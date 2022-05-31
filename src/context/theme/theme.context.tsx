import React, {useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import {ProviderProps, ThemeStateContext, ThemeProps} from './theme.types';

import {
  DarkTheme,
  LightTheme,
  ThemeProps as AppThemeProps,
} from '../../style/globalStyle';

const ThemeContext = React.createContext<ThemeStateContext>({
  appTheme: 'light',
  setAppTheme: () => {},
  theme: LightTheme,
  setTheme: () => {},
});

const AppColorSchemeProvider: React.FC<ProviderProps> = ({children}) => {
  const colorScheme = useColorScheme();
  const [appTheme, setAppTheme] = useState<ThemeProps>('light');
  const [theme, setTheme] = useState<AppThemeProps>(LightTheme);

  useEffect(() => {
    if (colorScheme === 'dark') {
      setAppTheme('dark');
    } else {
      setAppTheme('light');
    }
  }, [colorScheme]);

  useEffect(() => {
    if (appTheme === 'dark') {
      setTheme(DarkTheme);
    } else {
      setTheme(LightTheme);
    }
  }, [appTheme]);

  const providerValue: ThemeStateContext = {
    appTheme,
    setAppTheme,
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
};

const useAppColorScheme = () => React.useContext(ThemeContext);

export {AppColorSchemeProvider, useAppColorScheme};
