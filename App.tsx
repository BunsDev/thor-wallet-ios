import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import {mainNavigator} from './src/navigation/DrawerActions';
import {DrawerNavigator} from './src/navigation/DrawerNavigator';

export const App = () => {
  return (
    <NavigationContainer ref={mainNavigator}>
      <DrawerNavigator />
    </NavigationContainer>
  );
};
