import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';
import {__COLORS} from '../ui/theme/colors';

export const DefaultGradient = styled(LinearGradient).attrs({
  colors: [__COLORS.LEFT_GRADIENT, __COLORS.RIGHT_GRADIENT],
  start: {x: 0, y: 0},
  end: {x: 1, y: 1},
})``;
