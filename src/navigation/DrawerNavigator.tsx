import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {OnboardedDrawerNavigator} from '../components/drawer/OnboardedDrawerNavigator';
import {OnboardingDrawerNavigator} from '../components/drawer/OnboardingDrawerNavigator';
import {__NAVIGATORS} from '../types/navigation/navigation-types';
import {DrawerNavigationScreens} from '../types/navigation/screen-types';
import {MainStackNavigator} from './MainStackNavigator';

const Drawer = createDrawerNavigator<DrawerNavigationScreens>();

export const DrawerNavigator = () => {
  // TODO: do it dynamic based on context and state
  const hasCompletedOnboarding = false;

  const drawerContent = useCallback(() => {
    return hasCompletedOnboarding ? (
      <OnboardedDrawerNavigator />
    ) : (
      <OnboardingDrawerNavigator />
    );
  }, [hasCompletedOnboarding]);

  // It fixes a drawer flickering
  const [initRender, setInitRender] = useState(true);

  useEffect(() => {
    setInitRender(false);
  }, [initRender]);

  const drawerStyle = useMemo(
    () => ({width: initRender ? 0 : '100%'}),
    [initRender],
  );

  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerContent={drawerContent}
      drawerStyle={drawerStyle}
      openByDefault={false}
    >
      <Drawer.Screen name={__NAVIGATORS.MAIN} component={MainStackNavigator} />
    </Drawer.Navigator>
  );
};
