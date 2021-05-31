import React, {useEffect} from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import styled from 'styled-components';
import {__COLORS} from '../../ui/theme/colors';
import {SPACING} from '../../ui/theme/layout';

const SIZE = 12;
const HiddenDigit = styled(Animated.View)`
  width: ${SIZE}px;
  height: ${SIZE}px;
  margin: 0 ${SPACING / 2}px;
  border-radius: ${SIZE / 2}px;
  background-color: ${__COLORS.LEFT_GRADIENT};
`;

type Props = {
  typed: boolean;
};
export const PinTypedDigit = ({typed}: Props) => {
  const animation = useSharedValue(0);

  useEffect(() => {
    animation.value = withSpring(Number(typed), {
      damping: 100,
    });
  }, [animation, typed]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(animation.value, [0, 1], [0.25, 1]),
      transform: [{scale: interpolate(animation.value, [0, 1], [0.8, 1])}],
    };
  });

  return <HiddenDigit style={animatedStyle} />;
};
