import TouchableScale from '@jonny/touchable-scale';
import React, {useCallback} from 'react';
import {__COLORS} from '../theme/colors';
import { Bold, Light, Regular, TypographySize } from "./Typography";

type Props = {
  color?: string;
  size?: TypographySize;
  label: string;
  onPress: () => void;
};
export const PressableLabel = ({
  color = __COLORS.LEFT_GRADIENT,
  size = 'm',
  label,
  onPress,
}: Props) => {
  const press = useCallback(() => onPress(), [onPress]);
  return (
    <TouchableScale onPress={press}>
      <Regular color={color} size={size}>
        {label}
      </Regular>
    </TouchableScale>
  );
};
