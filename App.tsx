import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {IntroSlider} from './src/components/screens/IntroSlider';

const Stack = createStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={IntroSlider} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
