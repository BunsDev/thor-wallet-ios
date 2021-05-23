import {Text} from 'react-native-normalized';
import Animated from 'react-native-reanimated';
import styled, {css} from 'styled-components';
import {__COLORS} from '../theme/colors';
import {__FONT_FAMILIES} from '../theme/fonts';

const XXS_FONT_SIZE = 8;
export const XS_FONT_SIZE = 12;
export const S_FONT_SIZE = 14;
export const M_FONT_SIZE = 16; // default font size for text
const L_FONT_SIZE = 18;
export const XL_FONT_SIZE = 20;
const XXL_FONT_SIZE = 30;

const DEFAULT_FONT_COLOR = __COLORS.WHITE;

export type TypographySize = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

const mapSize = (s?: TypographySize): number => {
  switch (s) {
    case 'xxs':
      return XXS_FONT_SIZE;
    case 'xs':
      return XS_FONT_SIZE;
    case 's':
      return S_FONT_SIZE;
    case 'm':
      return M_FONT_SIZE;
    case 'l':
      return L_FONT_SIZE;
    case 'xl':
      return XL_FONT_SIZE;
    case 'xxl':
      return XXL_FONT_SIZE;
    default:
      return M_FONT_SIZE;
  }
};

const getSize = (s?: TypographySize) => css`
  font-size: ${mapSize(s)}px;
`;

const shared = (color?: string, center?: boolean) => css`
  text-align: ${center ? 'center' : 'left'};
  color: ${color ?? DEFAULT_FONT_COLOR};
`;

type TextProps = {
  size?: TypographySize;
  center?: boolean;
  color?: string;
};

export const Light = styled(Text)<TextProps>`
  ${({size}) => getSize(size)};
  ${({color, center}) => shared(color, center)};
  font-family: ${__FONT_FAMILIES.LIGHT};
`;

export const Regular = styled(Text)<TextProps>`
  ${({size}) => getSize(size)};
  ${({color, center}) => shared(color, center)};
  font-family: ${__FONT_FAMILIES.REGULAR};
`;

export const SemiBold = styled(Text)<TextProps>`
  ${({size}) => getSize(size)};
  ${({color, center}) => shared(color, center)};
  font-family: ${__FONT_FAMILIES.SEMI_BOLD};
`;

export const Bold = styled(Text)<TextProps>`
  ${({size}) => getSize(size)};
  ${({color, center}) => shared(color, center)};
  font-family: ${__FONT_FAMILIES.BOLD};
`;

export const ExtraBold = styled(Text)<TextProps>`
  ${({size}) => getSize(size)};
  ${({color, center}) => shared(color, center)};
  font-family: ${__FONT_FAMILIES.EXTRA_BOLD};
`;

export const Black = styled(Text)<TextProps>`
  ${({size}) => getSize(size)};
  ${({color, center}) => shared(color, center)};
  font-family: ${__FONT_FAMILIES.BLACK};
`;

export const AnimatedRegular = styled(Animated.Text)<TextProps>`
  ${({size}) => getSize(size)};
  ${({color, center}) => shared(color, center)};
  font-family: ${__FONT_FAMILIES.REGULAR};
`;
