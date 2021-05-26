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

const circleCenter = SPACING * 2;
const strokeWidth = circleCenter / 8; // thickness of the spinner
const radius = (circleCenter - strokeWidth) / 2;
const circumference = radius * 2 * Math.PI;
const offset = circleCenter / 4;

const AnimatedSVG = Animated.createAnimatedComponent(Svg);

type Props = {
  color: string;
};

const animConfig = {duration: 2500};

// TODO: refactor spinner
export const CircularSpinner = ({color}: Props) => {
  const rotation = useMemoizedSharedValue(0);

  const animatedProps = useAnimatedProps(() => {
    return {
      transform: [
        {rotate: interpolate(rotation.value, [0, 1], [0, circleCenter])},
      ],
    };
  });

  useEffect(() => {
    rotation.value = withRepeat(withTiming(1, animConfig), -1, true);
  }, [rotation]);

  return (
    <AnimatedSVG
      width={circleCenter}
      height={circleCenter}
      animatedProps={animatedProps as any}
    >
      <Circle
        fill="none"
        cx={circleCenter / 2}
        cy={circleCenter / 2}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDashoffset={offset}
        strokeDasharray={`${circumference}  ${circumference}`}
        r={radius}
      />
    </AnimatedSVG>
  );
};
