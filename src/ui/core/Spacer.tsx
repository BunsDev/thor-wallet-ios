import {View} from 'react-native';
import styled from 'styled-components';
import {SPACING} from '../theme/layout';

export const MakeSpacing = styled(View)<{
  xMultiply?: number;
  yMultiply?: number;
}>`
  height: ${(props) =>
    props.yMultiply ? SPACING * props.yMultiply : SPACING}px;
  width: ${(props) =>
    props.xMultiply ? SPACING * props.xMultiply : SPACING}px;
`;
