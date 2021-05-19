import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {HomeScreen} from '../components/screens/HomeScreen';
import {__SCREENS} from '../types/navigation/navigation-types';
import {OnboardedNavigatorScreen} from '../types/navigation/screen-types';

const Stack = createStackNavigator<OnboardedNavigatorScreen>();

export const OnboardedNavigator = () => {
  return (
    <NavigationContainer independent>
      <Stack.Navigator>
        <Stack.Screen name={__SCREENS.HOME_SCREEN} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
