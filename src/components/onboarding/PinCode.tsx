import React, {useCallback, useEffect, useMemo} from 'react';
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
  onChange: (s: string[]) => void;
  onComplete: (code: string[]) => void;
  requiredDigits?: number;
};

const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
export const PinCode = ({
  digits,
  onChange,
  onComplete,
  requiredDigits = 6,
}: Props) => {
  const code = useMemo(
    () => [...digits, ...new Array(requiredDigits - digits.length).fill(null)],
    [digits, requiredDigits],
  );

  // code is complete when each digit is !== null
  const isCodeComplete = useMemo(() => code.every((c) => c !== null), [code]);

  const addDigit = useCallback(
    (d: string) => {
      if (!isCodeComplete) {
        code[code.indexOf(null)] = d;
        onChange([...code]);
      }
    },
    [code, isCodeComplete, onChange],
  );

  const removeDigit = useCallback(() => {
    if (code.every((c) => c === null)) return;
    const dts = code.filter(Boolean);
    code[dts.length - 1] = null;
    onChange([...code]);
  }, [code, onChange]);

  useEffect(() => {
    if (isCodeComplete) onComplete(code);
  }, [code, isCodeComplete, onComplete]);
  return (
    <Flex column>
      <PinTypedDigits code={code} />
      <MakeSpacing yMultiply={3} />
      {grid.map((row, i) => (
        <MarginFlex key={String(`row-${i}`)} row>
          {row.map((d) => (
            <Flex key={d} flex={1} row justify="center">
              <Flex row>
                <Digit digit={String(d)} onDigit={addDigit} />
              </Flex>
            </Flex>
          ))}
        </MarginFlex>
      ))}
      <MarginFlex row>
        <Flex flex={1} row justify="center">
          <Flex row>
            <Digit digit={'<'} onDigit={removeDigit} />
          </Flex>
        </Flex>
        <Flex flex={1} row justify="center">
          <Flex row>
            <Digit digit={'0'} onDigit={addDigit} />
          </Flex>
        </Flex>
        <Flex flex={1} />
      </MarginFlex>
    </Flex>
  );
};
