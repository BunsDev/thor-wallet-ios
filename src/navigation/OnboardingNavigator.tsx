import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {IntroScreen} from '../components/screens/IntroScreen';
import {__SCREENS} from '../types/navigation/navigation-types';
import {OnboardingNavigatorScreens} from '../types/navigation/screen-types';

const Stack = createStackNavigator<OnboardingNavigatorScreens>();

const getHeader = () => void 0;

export const OnboardingNavigator = () => {
  return (
    <NavigationContainer independent>
      <Stack.Navigator>
        <Stack.Screen
          name={__SCREENS.WELCOME_SCREEN}
          component={IntroScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
