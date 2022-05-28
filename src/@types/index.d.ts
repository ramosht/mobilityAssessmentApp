/* eslint-disable */

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

// Typefying Routes
type AppRootParamList = {
  Home: undefined;
  About: undefined;
  RandomPage: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRootParamList {}
  }
}
