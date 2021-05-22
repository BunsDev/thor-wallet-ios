import TouchableScale from '@jonny/touchable-scale';
import React, {useCallback} from 'react';
import Menu from '../../../assets/svg/menu.svg';
import {openDrawer} from '../../../navigation/DrawerActions';
import {Flex} from '../../../ui/core/Flex';
import {horizontalPadding} from '../../../ui/theme/layout';

export const HeaderRight = () => {
  const open = useCallback(() => openDrawer(), []);
  return (
    <Flex row {...horizontalPadding}>
      <TouchableScale onPress={open}>
        <Menu />
      </TouchableScale>
    </Flex>
  );
};
