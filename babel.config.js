module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    process.env.NODE_ENV === 'test' ? null : 'react-native-reanimated/plugin',
  ].filter(Boolean),
};
