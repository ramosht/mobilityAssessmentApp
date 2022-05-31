import React from 'react';
import {ThemeProps as AppThemeProps} from '../../style/globalStyle';

export type ProviderProps = {
  children: React.ReactNode;
};

export type ThemeProps = 'dark' | 'light';

export type ThemeStateContext = {
  appTheme: ThemeProps;
  setAppTheme: React.Dispatch<React.SetStateAction<ThemeProps>>;
  theme: AppThemeProps;
  setTheme: React.Dispatch<React.SetStateAction<AppThemeProps>>;
};
