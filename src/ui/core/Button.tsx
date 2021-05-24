import TouchableScale from '@jonny/touchable-scale';
import React, {useCallback} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';
import Arrow from '../../assets/svg/arrow.svg';
import {alpha} from '../theme/alpha';
import {__COLORS} from '../theme/colors';
import {DEFAULT_BORDER_RADIUS, DEFAULT_SHADOW, SPACING} from '../theme/layout';
import {CircularSpinner} from './CircularSpinner';
import {Flex} from './Flex';
import {Bold} from './Typography';

const Wrapper = styled(TouchableScale)<{
  secondary?: boolean;
  withShadow: boolean;
}>`
  ${(props) => props.withShadow && DEFAULT_SHADOW};
  ${(props) => !props.secondary && DEFAULT_BORDER_RADIUS};
`;

const SecondaryContainer = styled(Flex)`
  padding: ${SPACING * 2}px;
`;

const Gradient = styled(LinearGradient)`
  padding: ${SPACING * 2}px;
  flex-direction: row;
  align-items: center;
  ${DEFAULT_BORDER_RADIUS};
`;

type Props = {
  disabled?: boolean;
  loading?: boolean;
  secondary?: boolean;
  onPress?: () => void;
  label: string;
};

export const Button = ({
  onPress,
  disabled,
  loading,
  label,
  secondary,
}: Props) => {
  const press = useCallback(() => onPress?.(), [onPress]);
  const colors = disabled
    ? [alpha(0.4, __COLORS.WHITE), alpha(0.6, __COLORS.WHITE)]
    : [__COLORS.LEFT_GRADIENT, __COLORS.RIGHT_GRADIENT];
  return (
    <Wrapper
      onPress={press}
      secondary={secondary}
      disabled={disabled}
      withShadow={!disabled && !secondary}
    >
      {secondary ? (
        <SecondaryContainer>
          <Bold color={__COLORS.PRIMARY} center>
            {label}
          </Bold>
        </SecondaryContainer>
      ) : (
        <Gradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={colors}>
          <Flex flex={1} />
          <Flex flex={10}>
            <Bold color={__COLORS.BLACK} center>
              {label}
            </Bold>
          </Flex>
          <Flex flex={1}>
            {loading ? (
              <CircularSpinner color={__COLORS.BLACK} />
            ) : (
              !disabled && <Arrow color={__COLORS.BLACK} />
            )}
          </Flex>
        </Gradient>
      )}
    </Wrapper>
  );
};
