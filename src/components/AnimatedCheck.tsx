import React, {useEffect} from 'react';
import Animated, {
  interpolate,
  useAnimatedProps,
  withSpring,
} from 'react-native-reanimated';
import Svg, {Circle, Path} from 'react-native-svg';
import {useMemoizedSharedValue} from '../helpers/use-memoized-shared-value';
import {__COLORS} from '../ui/theme/colors';

const CHECK_SIZE = 20;
const DASHOFFSET = 22.892;
const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const AnimatedCheck = () => {
  const offset = useMemoizedSharedValue(0);
  const radius = 17;
  const circumference = radius * 2 * Math.PI;

  useEffect(() => {
    offset.value = withSpring(1, {damping: 200});
  }, [offset]);

  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: interpolate(offset.value, [0, 1], [DASHOFFSET, 0]),
    };
  });

  const animatedProps2 = useAnimatedProps(() => {
    return {
      strokeDashoffset: interpolate(offset.value, [0, 1], [circumference, 0]),
    };
  });

  return (
    <Svg viewBox="-2 0 40 34" width={CHECK_SIZE} height={CHECK_SIZE}>
      <AnimatedCircle
        id="Oval"
        cx={radius}
        cy={radius}
        r={radius}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={__COLORS.RIGHT_GRADIENT}
        strokeWidth={3}
        strokeDasharray={circumference}
        animatedProps={animatedProps2}
      />
      <AnimatedPath
        stroke={__COLORS.RIGHT_GRADIENT}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={DASHOFFSET}
        animatedProps={animatedProps}
        d="M 9.171875 18.9891869 L 14.5945144 23 L 24.171875 10"
      />
    </Svg>
  );
};
