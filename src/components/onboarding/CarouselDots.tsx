import React from 'react';
import {View} from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components';
import {Flex} from '../../ui/core/Flex';
import {alpha} from '../../ui/theme/alpha';
import {__COLORS} from '../../ui/theme/colors';
import {SPACING} from '../../ui/theme/layout';

type Props = {
  nrDots: number;
  activeIndex: Animated.SharedValue<number>;
};

const SIZE = 8;

const Dot = styled(View)<{active?: boolean}>`
  width: ${SIZE}px;
  border-radius: ${SIZE / 2}px;
  height: ${SIZE}px;
  margin: 0 ${SPACING / 4}px;
  background-color: ${(props) =>
    props.active ? __COLORS.WHITE : alpha(0.5, __COLORS.WHITE)};
`;
export const CarouselDots = ({activeIndex, nrDots}: Props) => {
  return (
    <Flex row align="center" justify="center">
      {new Array(nrDots).fill(0).map((_, i) => {
        return (
          <Dot key={String(`dot-${i}`)} active={i === activeIndex.value} />
        );
      })}
    </Flex>
  );
};
