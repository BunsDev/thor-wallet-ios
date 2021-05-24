import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import {OverallManagers} from './src/components/OverallManagers';
import {mainNavigator} from './src/navigation/DrawerActions';
import {DrawerNavigator} from './src/navigation/DrawerNavigator';

export const App = () => {
  return (
    <NavigationContainer ref={mainNavigator}>
      <DrawerNavigator />
      <OverallManagers />
    </NavigationContainer>
  );
};
