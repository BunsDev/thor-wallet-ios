import React from 'react';
import {Flex} from '../../ui/core/Flex';
import {PinTypedDigit} from './PinTypedDigit';

type Props = {
  code: (string | null)[];
};

export const PinTypedDigits = ({code}: Props) => {
  return (
    <Flex row justify="center">
      {code.map((dg, i) => {
        return <PinTypedDigit key={String(`dg-${i}`)} typed={Boolean(dg)} />;
      })}
    </Flex>
  );
};
