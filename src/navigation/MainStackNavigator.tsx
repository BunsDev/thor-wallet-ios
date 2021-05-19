import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {__NAVIGATORS} from '../types/navigation/navigation-types';
import {MainNavigatorScreens} from '../types/navigation/screen-types';
import {OnboardedNavigator} from './OnboardedNavigator';
import {OnboardingNavigator} from './OnboardingNavigator';

const Stack = createStackNavigator<MainNavigatorScreens>();

export const MainStackNavigator = () => {
  // TODO: replace it dynamically
  const isOnboarded = false;
  return isOnboarded ? (
    <Stack.Navigator>
      <Stack.Screen
        name={__NAVIGATORS.ONBOARDED}
        component={OnboardedNavigator}
      />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name={__NAVIGATORS.ONBOARDING}
        component={OnboardingNavigator}
      />
    </Stack.Navigator>
  );
};
