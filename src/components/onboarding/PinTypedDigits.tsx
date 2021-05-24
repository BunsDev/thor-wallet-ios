import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import {Flex} from '../../ui/core/Flex';
import {alpha} from '../../ui/theme/alpha';
import {__COLORS} from '../../ui/theme/colors';

type Props = {
  code: (string | null)[];
};

const SIZE = 10;
const HiddenDigit = styled(View)<{typed: boolean}>`
  width: ${SIZE}px;
  height: ${SIZE}px;
  border-radius: ${SIZE / 2}px;
  background-color: ${(props) =>
    props.typed ? __COLORS.LEFT_GRADIENT : alpha(0.2, __COLORS.WHITE)};
`;
export const PinTypedDigits = ({code}: Props) => {
  return (
    <Flex row>
      {code.map((dg, i) => (
        <HiddenDigit key={String(`dg-${i}`)} typed={Boolean(dg)} />
      ))}
    </Flex>
  );
};
