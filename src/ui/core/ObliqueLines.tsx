import React from 'react';
import Svg, {Line} from 'react-native-svg';
import styled from 'styled-components';
import {alpha} from '../theme/alpha';
import {__COLORS} from '../theme/colors';
import {__WINDOW_WIDTH} from '../theme/layout';

const SvgAbsolute = styled(Svg)<{topOffset?: number; height: number}>`
  position: absolute;
  z-index: -1;
  width: ${__WINDOW_WIDTH + 120}px;
  top: ${(props) => props.topOffset ?? 0}px;
`;

const ROUNDING_PIXEL = 4;
const HORIZONTAL_PUFFER = 10;
const SPACE_BETWEEN_LINES = 20;
const LINE_HEIGHT = 4;
const NUMBER_OF_LINES = 3;
const SLOPE = 142;
type Props = {
  topOffset?: number;
};
export const ObliqueLines = ({topOffset}: Props) => {
  // highest y2 is taken when i = 0 (loop below)
  const HIGHEST_Y2 = LINE_HEIGHT - SLOPE + -ROUNDING_PIXEL;
  // the lowest y1 is taken as high since the lines are already translated below substracting the highesty2
  const LOWEST_Y1 =
    LINE_HEIGHT +
    SPACE_BETWEEN_LINES * (NUMBER_OF_LINES - 1) -
    HIGHEST_Y2 +
    ROUNDING_PIXEL;

  return (
    <SvgAbsolute
      strokeWidth={LINE_HEIGHT}
      topOffset={topOffset}
      height={LOWEST_Y1}
    >
      {new Array(NUMBER_OF_LINES).fill(0).map((_, i) => {
        const y1 = LINE_HEIGHT + SPACE_BETWEEN_LINES * i - HIGHEST_Y2;
        const y2 = LINE_HEIGHT + SPACE_BETWEEN_LINES * i - SLOPE - HIGHEST_Y2;
        console.log(`(${y1}, ${y2})`);
        return (
          <Line
            key={String(`line-${i}`)}
            x1={HORIZONTAL_PUFFER * -1}
            x2={__WINDOW_WIDTH + HORIZONTAL_PUFFER}
            y1={y1}
            y2={y2}
            stroke={alpha(0.8 - i * 0.3, __COLORS.LEFT_GRADIENT)}
          />
        );
      })}
    </SvgAbsolute>
  );
};
