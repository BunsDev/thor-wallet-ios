import React, {useEffect} from 'react';
import Animated, {
  interpolate,
  useAnimatedProps,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import Svg, {Circle} from 'react-native-svg';
import {useMemoizedSharedValue} from '../../helpers/use-memoized-shared-value';
import {SPACING} from '../theme/layout';

const size = SPACING * 2;
const strokeWidth = size / 8; // thickness of the spinner
const radius = (size - strokeWidth) / 2;
const circumference = radius * 2 * Math.PI;
const offset = size / 4;

const AnimatedSVG = Animated.createAnimatedComponent(Svg);

type Props = {
  color: string;
};
export const CircularSpinner = ({color}: Props) => {
  const rotation = useMemoizedSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(withTiming(1, {duration: 2500}), -1, true);
  }, [rotation]);

  const animatedProps = useAnimatedProps(() => {
    return {
      transform: [{rotate: interpolate(rotation.value, [0, 1], [0, size])}],
    };
  });
  return (
    <AnimatedSVG
      width={size}
      height={size}
      animatedProps={animatedProps as any}
    >
      <Circle
        stroke={color}
        fill="none"
        cx={size / 2}
        cy={size / 2}
        strokeWidth={strokeWidth}
        strokeDashoffset={offset}
        strokeDasharray={`${circumference}  ${circumference}`}
        r={radius}
      />
    </AnimatedSVG>
  );
};
