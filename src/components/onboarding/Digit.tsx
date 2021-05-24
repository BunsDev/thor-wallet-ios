import TouchableScale from '@jonny/touchable-scale';
import React, {useCallback} from 'react';
import {Medium} from '../../ui/core/Typography';
import {__COLORS} from '../../ui/theme/colors';

type Props = {
  digit: string;
  onDigit: (s: string) => void;
};

export const Digit = ({digit, onDigit}: Props) => {
  const press = useCallback(() => onDigit(digit), []);
  return (
    <TouchableScale onPress={press}>
      <Medium color={__COLORS.WHITE} size="xxl">
        {digit}
      </Medium>
    </TouchableScale>
  );
};
