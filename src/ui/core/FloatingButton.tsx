import TouchableScale from '@jonny/touchable-scale';
import React from 'react';
import Svg, {Path} from 'react-native-svg';
import styled from 'styled-components';
import {DefaultGradient} from '../../components/DefaultGradient';
import useKeyboardHeight from '../../helpers/use-keyboard-height';
import {__COLORS} from '../theme/colors';
import {DEFAULT_BORDER_RADIUS, DEFAULT_SHADOW, SPACING} from '../theme/layout';

const SIZE = 50;
const ARROW_SIZE = 17;
const PATH_LENGTH = 57.439;

const Wrapper = styled(TouchableScale)<{bottomOffset: number}>`
  width: ${SIZE}px;
  height: ${SIZE}px;
  position: absolute;
  bottom: ${(props) => props.bottomOffset + SPACING * 2}px;
  right: ${SPACING * 2}px;
  ${DEFAULT_SHADOW};
`;

const Gradient = styled(DefaultGradient)`
  height: 100%;
  width: 100%;
  ${DEFAULT_BORDER_RADIUS};

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FloatingButton = () => {
  const height = useKeyboardHeight();
  return (
    <Wrapper bottomOffset={height}>
      <Gradient>
        <Svg
          width={ARROW_SIZE}
          height={ARROW_SIZE}
          viewBox="0 0 16 16"
          color={__COLORS.BLACK}
        >
          <Path
            fill="currentColor"
            d="M 8 0 6.59 1.41 12.17 7 0 7 0 9 12.17 9 6.59 14.59 8 16 16 8"
          />
        </Svg>
      </Gradient>
    </Wrapper>
  );
};
