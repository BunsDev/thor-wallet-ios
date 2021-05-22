import {
  DrawerActions,
  NavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import {createRef} from 'react';
import {InteractionManager} from 'react-native';

export const mainNavigator = createRef<NavigationContainerRef>();

export const drawerNavigator = createRef<NavigationContainerRef>();

export const closeDrawer = () => {
  mainNavigator.current?.dispatch(DrawerActions.closeDrawer());
  InteractionManager.runAfterInteractions(() => {
    if (drawerNavigator.current?.canGoBack()) {
      drawerNavigator.current?.dispatch(StackActions.popToTop());
    }
  });
};

export const openDrawer = () => {
  mainNavigator.current?.dispatch(DrawerActions.openDrawer());
};
