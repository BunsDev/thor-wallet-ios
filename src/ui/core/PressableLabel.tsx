import TouchableScale from '@jonny/touchable-scale';
import React, {useCallback} from 'react';
import {__COLORS} from '../theme/colors';
import {Regular, TypographySize} from './Typography';

type Props = {
  color?: string;
  size?: TypographySize;
  center?: boolean;
  label: string;
  onPress: () => void;
};
export const PressableLabel = ({
  color = __COLORS.LEFT_GRADIENT,
  size = 'm',
  onPress,
  center,
  label,
}: Props) => {
  const press = useCallback(() => onPress(), [onPress]);
  return (
    <TouchableScale onPress={press}>
      <Regular color={color} size={size} center={center}>
        {label}
      </Regular>
    </TouchableScale>
  );
};
