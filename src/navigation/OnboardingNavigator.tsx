import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StackHeaderOptions} from '@react-navigation/stack/lib/typescript/src/types';
import React, {useCallback} from 'react';
import {HeaderLeft} from '../components/onboarding/header/HeaderLeft';
import {HeaderRight} from '../components/onboarding/header/HeaderRight';
import {HeaderTitle} from '../components/onboarding/header/HeaderTitle';
import {IntroScreen} from '../components/screens/IntroScreen';
import {UsernameScreen} from '../components/screens/UsernameScreen';
import {__SCREENS} from '../types/navigation/navigation-types';
import {OnboardingNavigatorScreens} from '../types/navigation/screen-types';
import {__COLORS} from '../ui/theme/colors';
import { CreateImportWallet } from "../components/screens/CreateImportWallet";
import { CreatePinCode } from "../components/screens/CreatePinCode";

const Stack = createStackNavigator<OnboardingNavigatorScreens>();

const getHeader = (progress: number): StackHeaderOptions => ({
  headerLeft: () => <HeaderLeft />,
  headerTitle: () => <HeaderTitle progress={progress} />,
  headerRight: () => <HeaderRight />,
  headerStyle: {
    backgroundColor: __COLORS.BLACK,
    shadowColor: 'transparent',
  },
});

export const OnboardingNavigator = () => {
  const createHeader = useCallback(
    (progress: number) => getHeader(progress),
    [],
  );
  return (
    <NavigationContainer independent>
      <Stack.Navigator>
        <Stack.Screen
          name={__SCREENS.WELCOME_SCREEN}
          component={IntroScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={__SCREENS.USERNAME}
          component={UsernameScreen}
          options={{...createHeader(15)}}
        />
        <Stack.Screen
          name={__SCREENS.CREATE_IMPORT_WALLET}
          component={CreateImportWallet}
          options={{...createHeader(30)}}
        />
        <Stack.Screen
          name={__SCREENS.CREATE_PIN_CODE}
          component={CreatePinCode}
          options={{...createHeader(50)}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
