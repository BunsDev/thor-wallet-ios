import React from 'react';
import Animated, {
  useAnimatedReaction,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';
import styled from 'styled-components';
import {useMemoizedSharedValue} from '../../helpers/use-memoized-shared-value';
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
  console.log('aaa', typed);
  const opacity = useDerivedValue(() => (typed ? 1 : 0.25), [typed]);
  const scale = useDerivedValue(() => (typed ? 1 : 0.8), [typed]);
  const animation = useMemoizedSharedValue(0);
  const animation2 = useMemoizedSharedValue(0);

  useAnimatedReaction(
    () => opacity,
    () => {
      animation.value = withSpring(opacity.value, {
        damping: 100,
      });
    },
    [animation],
  );

  useAnimatedReaction(
    () => opacity,
    () => {
      animation2.value = withSpring(scale.value, {
        damping: 100,
      });
    },
    [animation],
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: animation.value,
      transform: [{scale: animation2.value}],
    };
  });

  return <HiddenDigit style={animatedStyle} />;
};
