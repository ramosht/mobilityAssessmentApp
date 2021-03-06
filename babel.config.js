module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver', 
      {
        root: ["./"],
        alias: {
          '@components': './src/components',
          '@pages': './src/pages',
          '@templates': './src/templates',
          '@context': './src/context'
        }
      },
    ],
    'react-native-reanimated/plugin'
  ],
};
