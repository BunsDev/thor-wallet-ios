import React, {useCallback} from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import Animated, {
  Easing,
  useAnimatedReaction,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import styled from 'styled-components';
import {AnimatedCheck} from '../../components/AnimatedCheck';
import {DefaultGradient} from '../../components/DefaultGradient';
import {useMemoizedSharedValue} from '../../helpers/use-memoized-shared-value';
import {alpha} from '../theme/alpha';
import {__COLORS} from '../theme/colors';
import {__FONT_FAMILIES} from '../theme/fonts';
import {DEFAULT_BORDER_RADIUS, SPACING} from '../theme/layout';
import {Flex} from './Flex';
import {AnimatedRegular} from './Typography';

type Props = {
  disabled?: boolean;
  status?: 'invalid' | 'valid';
  label: string;
} & TextInputProps;

const Wrapper = styled(Flex)`
  position: relative;
`;

const StyledInput = styled(TextInput)`
  flex: 1;
  color: ${__COLORS.WHITE};
  padding: ${SPACING * 2}px 0;
  font-family: ${__FONT_FAMILIES.REGULAR};
  z-index: 1;
`;

const GradientLine = styled(DefaultGradient)`
  height: 3px;
  width: 100%;
  position: absolute;
  opacity: 1;
  left: 0;
  bottom: 0;
  ${DEFAULT_BORDER_RADIUS};
`;

const BigLabel = styled(AnimatedRegular)`
  position: absolute;
  top: 13px;
  color: ${alpha(0.75, __COLORS.WHITE)};
`;

const SmallLabel = styled(AnimatedRegular)`
  position: absolute;
  top: -2px;
  color: ${alpha(0.6, __COLORS.WHITE)};
`;

const AnimatedCheckWrapper = styled(View)`
  position: absolute;
  right: 0;
  bottom: ${SPACING * 2}px;
`;

const animationConfig: Animated.WithTimingConfig = {
  duration: 240,
  easing: Easing.ease,
};

export const Input = ({
  disabled,
  status,
  label,
  value,
  onChangeText,
}: Props) => {
  const focus = useMemoizedSharedValue(false);
  const active = useDerivedValue(() => focus.value || Boolean(value));
  const smallLabelValue = useMemoizedSharedValue(Number(Boolean(value)));

  useAnimatedReaction(
    () => active.value,
    (isActive) => {
      smallLabelValue.value = withTiming(Number(isActive), animationConfig);
    },
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: smallLabelValue.value,
      transform: [{translateY: smallLabelValue.value * -2}],
    };
  });

  const animatedStyle2 = useAnimatedStyle(() => {
    return {
      opacity: 1 - smallLabelValue.value,
    };
  });

  const onfocus = useCallback(() => {
    focus.value = true;
  }, [focus]);

  const onblur = useCallback(() => {
    focus.value = false;
  }, [focus]);

  return (
    <Wrapper row>
      <StyledInput
        onChangeText={onChangeText}
        onBlur={onblur}
        onFocus={onfocus}
      />
      {status === 'valid' && (
        <AnimatedCheckWrapper>
          <AnimatedCheck />
        </AnimatedCheckWrapper>
      )}
      <BigLabel size="m" style={animatedStyle2}>
        {label}
      </BigLabel>
      <SmallLabel size="xs" style={animatedStyle}>
        {label}
      </SmallLabel>
      <GradientLine />
    </Wrapper>
  );
};
