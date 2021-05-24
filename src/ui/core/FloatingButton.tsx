import TouchableScale from '@jonny/touchable-scale';
import React from 'react';
import Animated, {
  useAnimatedReaction,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';
import Svg, {Path} from 'react-native-svg';
import styled from 'styled-components';
import {DefaultGradient} from '../../components/DefaultGradient';
import useKeyboardHeight from '../../helpers/use-keyboard-height';
import {useKeyboardVisible} from '../../helpers/use-keyboard-visible';
import {useMemoizedSharedValue} from '../../helpers/use-memoized-shared-value';
import {__COLORS} from '../theme/colors';
import {DEFAULT_BORDER_RADIUS, DEFAULT_SHADOW, SPACING} from '../theme/layout';
const SIZE = 50;
const ARROW_SIZE = 17;
const PATH_LENGTH = 66.576;

const Wrapper = styled(Animated.View)<{bottomOffset: number}>`
  width: ${SIZE}px;
  height: ${SIZE}px;
  position: absolute;
  bottom: ${(props) => props.bottomOffset + SPACING * 2}px;
  right: ${SPACING * 2}px;
  ${DEFAULT_SHADOW};
`;

const Touchable = styled(TouchableScale)`
  height: 100%;
  width: 100%;
`;

const Gradient = styled(DefaultGradient)`
  height: 100%;
  width: 100%;
  ${DEFAULT_BORDER_RADIUS};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

type Props = {
  show: boolean;
};
export const FloatingButton = ({show}: Props) => {
  const visible = useKeyboardVisible();
  const height = useKeyboardHeight();
  const offset = useMemoizedSharedValue(0);
  const shouldAnimate = useDerivedValue(
    () => show && height !== 0 && visible,
    [show, height, visible],
  );

  useAnimatedReaction(
    () => shouldAnimate,
    () => {
      offset.value = withSpring(shouldAnimate.value ? 0 : 1, {
        damping: 10,
      });
    },
    [shouldAnimate],
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value * 100}],
    };
  });

  return (
    <Wrapper bottomOffset={height} style={animatedStyle}>
      <Touchable>
        <Gradient>
          <Svg width={ARROW_SIZE} height={ARROW_SIZE} viewBox="0 0 16 16">
            <Path
              stroke={__COLORS.BLACK}
              strokeDasharray={PATH_LENGTH}
              d="M8,0.707106781 L15.2928932,8 L8,15.2928932 L7.2967904,14.5896836 L13.3755801,8.5 L0.5,8.5 L0.5,7.5 L13.3755801,7.5 L7.2967904,1.41031638 L8,0.707106781 Z"
            />
          </Svg>
        </Gradient>
      </Touchable>
    </Wrapper>
  );
};
