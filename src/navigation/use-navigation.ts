import {NavigationProp, useNavigation} from '@react-navigation/native';
import {OnboardingNavigatorScreens} from '../types/navigation/screen-types';

export const useOnboardingNavigation = <
  T extends keyof OnboardingNavigatorScreens,
>() => useNavigation<NavigationProp<OnboardingNavigatorScreens, T>>();
