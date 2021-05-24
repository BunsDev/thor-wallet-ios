import React, {useCallback} from 'react';
import styled from 'styled-components';
import {Flex} from '../../ui/core/Flex';
import {SPACING} from '../../ui/theme/layout';
import {Digit} from './Digit';

const MarginFlex = styled(Flex)`
  margin: ${SPACING * 3}px 0;
`;

type Props = {
  digits: string[];
  onDigit: (s: string) => void;
  requiredDigits?: number;
};

const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
export const PinCode = ({digits, onDigit, requiredDigits}: Props) => {
  const digit = useCallback((s: string) => onDigit(s), []);

  return (
    <Flex column style={{backgroundColor: 'red'}}>
      {grid.map((row, i) => (
        <MarginFlex key={String(`row-${i}`)} row>
          {row.map((d) => (
            <Flex key={d} flex={1} row justify="center">
              <Flex row>
                <Digit digit={String(d)} onDigit={digit} />
              </Flex>
            </Flex>
          ))}
        </MarginFlex>
      ))}
    </Flex>
  );
};
