import TouchableScale from '@jonny/touchable-scale';
import React, {useCallback} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';
import {__COLORS} from '../theme/colors';
import {DEFAULT_BORDER_RADIUS, DEFAULT_SHADOW, SPACING} from '../theme/layout';
import {Bold} from './Typography';

type Props = {
  disabled?: boolean;
  loading?: boolean;
  secondary?: boolean;
  onPress?: () => void;
  label: string;
};

const Wrapper = styled(TouchableScale)`
  ${DEFAULT_SHADOW};
  ${DEFAULT_BORDER_RADIUS};
`;

const Gradient = styled(LinearGradient)`
  padding: ${SPACING * 2}px;
  ${DEFAULT_BORDER_RADIUS};
`;

export const Button = ({
  onPress,
  disabled,
  loading,
  label,
  secondary,
}: Props) => {
  const press = useCallback(() => onPress?.(), [onPress]);
  return (
    <Wrapper onPress={press}>
      <Gradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[__COLORS.LEFT_GRADIENT, __COLORS.RIGHT_GRADIENT]}
      >
        <Bold color={__COLORS.BLACK} center>
          {label}
        </Bold>
      </Gradient>
    </Wrapper>
  );
};
