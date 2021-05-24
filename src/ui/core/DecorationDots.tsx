import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import {__COLORS} from '../theme/colors';
import {Flex} from './Flex';

const NUMBER_OF_DOTS = 20;
const DOT_SIZE = 7;

const Absolute = styled(Flex)`
  position: absolute;
  width: 100%;
  bottom: -9px;
`;
const Dot = styled(View)<{opacity: number}>`
  opacity: ${(props) => props.opacity};
  width: ${DOT_SIZE}px;
  height: ${DOT_SIZE}px;
  margin: 6px;
  border-radius: ${DOT_SIZE / 2}px;
  background-color: ${__COLORS.LEFT_GRADIENT};
`;
export const DecorationDots = () => {
  return (
    <Absolute column>
      <Flex row align="center">
        {new Array(NUMBER_OF_DOTS).fill(0).map((_, i) => (
          <Dot
            key={String(`dot-${i}`)}
            opacity={1 - (1 / NUMBER_OF_DOTS) * i}
          />
        ))}
      </Flex>
      <Flex row align="center">
        {new Array(NUMBER_OF_DOTS).fill(0).map((_, i) => (
          <Dot
            key={String(`dot-${i}`)}
            opacity={1 - (1 / NUMBER_OF_DOTS) * i}
          />
        ))}
      </Flex>
    </Absolute>
  );
};
