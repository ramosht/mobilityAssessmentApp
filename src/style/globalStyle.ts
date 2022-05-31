type ColorProps = {
  deepSky: string;
  pearl: string;
  white: string;
  mint: string;
  forest: string;
  skyBlue: string;
  sunset: string;
  sunrise: string;
};

export type ThemeProps = {
  primary: string;
  background: string;
  borderColor: string;
  drawerBackground: string;

  text: string;
  border: string;

  colors: ColorProps;
};

export const colors: ColorProps = {
  deepSky: '#0f0028',
  pearl: '#efefef',
  white: '#ffffff',
  mint: '#00d2a8',
  forest: '#009385',
  skyBlue: '#7ba9ff',
  sunset: '#e6356f',
  sunrise: '#ffba79',
};

export const LightTheme: ThemeProps = {
  primary: colors.sunset,
  background: colors.white,
  borderColor: '#15151520',
  drawerBackground: '#ededed',

  text: '#151515',
  border: `${colors.pearl}10`,

  colors,
};

export const DarkTheme: ThemeProps = {
  primary: colors.sunset,
  background: '#151515',
  borderColor: `${colors.white}20`,
  drawerBackground: '#333333',

  text: colors.white,
  border: `${colors.pearl}10`,

  colors,
};
