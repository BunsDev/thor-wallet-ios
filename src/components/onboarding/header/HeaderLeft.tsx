import TouchableScale from '@jonny/touchable-scale';
import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import Arrow from '../../../assets/svg/arrow.svg';
import {Flex} from '../../../ui/core/Flex';
import {__COLORS} from '../../../ui/theme/colors';
import {horizontalPadding} from '../../../ui/theme/layout';

const Rotate = styled(View)`
  transform: rotate(180deg);
`;

const ARROW_SIZE = 20;
export const HeaderLeft = () => {
  const navigation = useNavigation();
  const goBack = useCallback(() => navigation.goBack(), [navigation]);
  return (
    <Flex row {...horizontalPadding}>
      <Rotate>
        <TouchableScale onPress={goBack}>
          <Arrow
            width={ARROW_SIZE}
            height={ARROW_SIZE}
            color={__COLORS.WHITE}
          />
        </TouchableScale>
      </Rotate>
    </Flex>
  );
};
