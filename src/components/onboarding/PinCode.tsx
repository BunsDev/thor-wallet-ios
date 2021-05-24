import React, {useCallback, useMemo} from 'react';
import styled from 'styled-components';
import {Flex} from '../../ui/core/Flex';
import {MakeSpacing} from '../../ui/core/Spacer';
import {SPACING} from '../../ui/theme/layout';
import {Digit} from './Digit';
import {PinTypedDigits} from './PinTypedDigits';

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
export const PinCode = ({digits, onDigit, requiredDigits = 6}: Props) => {
  const digit = useCallback(
    (s: string) => {
      if (digits.length === requiredDigits) return;
      onDigit(s);
    },
    [digits.length, onDigit, requiredDigits],
  );

  console.log('diii', digits.length);
  const nullArray = useMemo(
    () =>
      digits.length === requiredDigits - 1
        ? []
        : new Array(requiredDigits - digits.length).fill(null),
    [digits.length, requiredDigits],
  );
  const code = useMemo(() => [...digits, ...nullArray], [digits, nullArray]);
  return (
    <Flex column style={{backgroundColor: 'red'}}>
      <PinTypedDigits code={code} />
      <MakeSpacing yMultiply={3} />
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
