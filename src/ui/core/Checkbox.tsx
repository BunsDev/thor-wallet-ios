import React, {useCallback} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  Easing,
  interpolate,
  interpolateColor,
  useAnimatedProps,
  useAnimatedReaction,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import Svg, {Path} from 'react-native-svg';
import styled, {css} from 'styled-components';
import {useMemoizedSharedValue} from '../../helpers/use-memoized-shared-value';
import {__COLORS} from '../theme/colors';
import {DEFAULT_BORDER_RADIUS, DEFAULT_SHADOW} from '../theme/layout';
import {TouchableFlex} from './Flex';

const CHECKBOX_SIZE = 25;
const CHECK_SIZE = 24;
const PATH_LENGTH = 22.892;
const AnimatedPath = Animated.createAnimatedComponent(Path);

const Wrapper = styled(TouchableFlex)`
  width: ${CHECKBOX_SIZE}px;
  height: ${CHECKBOX_SIZE}px;
`;

const MaskCss = css`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${DEFAULT_SHADOW};
  ${DEFAULT_BORDER_RADIUS};
`;

const Gradient = styled(LinearGradient)`
  ${MaskCss};
  border-color: ${__COLORS.WHITE};
`;

const AnimatedGradient = Animated.createAnimatedComponent(Gradient);

type Props = {
  active: boolean;
  disabled?: boolean;
  onSelect: (newState: boolean) => void;
};
export const Checkbox = ({active, disabled, onSelect}: Props) => {
  const offset = useMemoizedSharedValue(0);
  const isActive = useDerivedValue(() => active);

  useAnimatedReaction(
    () => isActive,
    (a) => {
      offset.value = withTiming(a.value ? 1 : 0, {
        duration: 160,
        easing: Easing.ease,
      });
    },
    [],
  );

  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: interpolate(offset.value, [0, 1], [PATH_LENGTH, 0]),
    };
  });

  const leftColor = useDerivedValue(() => {
    return interpolateColor(
      offset.value,
      [0, 1],
      [__COLORS.BLACK, __COLORS.LEFT_GRADIENT],
    );
  });

  const rightColor = useDerivedValue(() => {
    return interpolateColor(
      offset.value,
      [0, 1],
      [__COLORS.BLACK, __COLORS.RIGHT_GRADIENT],
    );
  });

  const animatedProps2 = useAnimatedProps(() => {
    return {
      borderWidth: interpolate(offset.value, [0, 1], [2, 0]),
      colors: [leftColor.value, rightColor.value],
    };
  });

  const select = useCallback(() => onSelect(!active), [active, onSelect]);
  return (
    <Wrapper onPress={select}>
      <AnimatedGradient
        colors={[__COLORS.LEFT_GRADIENT, __COLORS.RIGHT_GRADIENT]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        animatedProps={animatedProps2}
      >
        <Svg viewBox="0 0 34 34" width={CHECK_SIZE} height={CHECK_SIZE}>
          <AnimatedPath
            stroke={__COLORS.BLACK}
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={PATH_LENGTH}
            animatedProps={animatedProps}
            d="M 9.171875 18.9891869 L 14.5945144 23 L 24.171875 10"
          />
        </Svg>
      </AnimatedGradient>
    </Wrapper>
  );
};
