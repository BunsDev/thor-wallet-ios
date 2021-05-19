import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {DrawerNavigator} from './src/navigation/DrawerNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};
