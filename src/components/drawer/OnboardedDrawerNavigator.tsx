import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import {__SCREENS} from '../../types/navigation/navigation-types';
import {OnboardedDrawerScreens} from '../../types/navigation/screen-types';

const Stack = createStackNavigator<OnboardedDrawerScreens>();

const Demo = () => {
  return <View style={{height: 400, width: 300, backgroundColor: 'yellow'}} />;
};

export const OnboardedDrawerNavigator = () => {
  return (
    <NavigationContainer independent>
      <Stack.Navigator>
        <Stack.Screen
          name={__SCREENS.DRAWER_ONBOARDED_SCREEN}
          component={Demo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
