import TouchableScale from '@jonny/touchable-scale';
import {TouchableScaleProps} from '@jonny/touchable-scale/lib/typescript/props';
import {ScrollView, ScrollViewProps, View, ViewProps} from 'react-native';
import styled, {css} from 'styled-components';

type AlignProps = 'baseline' | 'flex-start' | 'flex-end' | 'stretch' | 'center';
type JustifyProps =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type AlignSelfProps =
  | 'space-between'
  | 'flex-start'
  | 'flex-end'
  | 'stretch'
  | 'center'
  | 'space-around';

export type FlexProps = {
  flex?: number;
  row?: boolean;
  column?: boolean;
  reverse?: 'row-reverse' | 'column-reverse';
  wrap?: 'wrap' | 'wrap-reverse' | 'nowrap' | boolean;
  align?: AlignProps;
  alignSelf?: AlignSelfProps;
  justify?: JustifyProps;
  shrink?: number;
};

const makeCSS = ({
  flex,
  wrap,
  align,
  justify,
  row,
  column,
  reverse,
  alignSelf,
  shrink,
}: FlexProps) => css`
  ${flex && `flex: ${flex}`};
  ${wrap && `flex-wrap: ${typeof wrap === 'boolean' ? 'wrap' : wrap}`};
  ${align && `align-items: ${align}`};
  ${justify && `justify-content: ${justify};`};
  ${alignSelf && `align-self: ${alignSelf};`};
  ${shrink && `flex-shrink: ${shrink};`};
  ${(row || column || reverse) &&
  `flex-direction: ${row ? 'row' : column ? 'column' : reverse}`};
`;

export const Flex = styled(View)<FlexProps & ViewProps>`
  ${({...props}) => makeCSS(props)};
`;

export const TouchableFlex = styled(TouchableScale)<
  FlexProps & TouchableScaleProps
>`
  ${({...props}) => makeCSS(props)};
`;

export const ScrollFlex = styled(ScrollView)<FlexProps & ScrollViewProps>`
  ${({...props}) => makeCSS(props)};
`;
