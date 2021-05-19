import {__NAVIGATORS, __SCREENS} from './navigation-types';

export type DrawerNavigationScreens = {
  [__NAVIGATORS.MAIN]: undefined;
};

export type OnboardingNavigatorScreens = {
  [__SCREENS.WELCOME_SCREEN]: undefined;
};

export type OnboardedNavigatorScreen = {
  [__SCREENS.HOME_SCREEN]: undefined;
};

export type OnboardingDrawerScreens = {
  [__SCREENS.DRAWER_ONBOARDING_SCREEN]: undefined;
};
export type OnboardedDrawerScreens = {
  [__SCREENS.DRAWER_ONBOARDED_SCREEN]: undefined;
};

export type MainNavigatorScreens = {
  [__NAVIGATORS.ONBOARDED]: undefined;
  [__NAVIGATORS.ONBOARDING]: undefined;
};
