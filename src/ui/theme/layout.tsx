import {Dimensions, Platform, View} from 'react-native';
import styled, {css} from 'styled-components';
import {alpha} from './alpha';
import {__COLORS} from './colors';

/**
 * Variable shared among the whole project for having consistent spacing between elements
 */
export const SPACING = 8;

/**
 * Screen and window dimensions
 */
export const __WINDOW_WIDTH = Dimensions.get('window').width;
export const __WINDOW_HEIGHT = Dimensions.get('window').height;
export const __SCREEN_WIDTH = Dimensions.get('screen').width;
export const __SCREEN_HEIGHT = Dimensions.get('screen').height;

/**
 * css elements to be used for styled components
 */
const iOSShadow = css`
  shadow-opacity: 0.7;
  shadow-radius: 9px;
  shadow-color: ${alpha(0.41, __COLORS.PRIMARY)};
  shadow-offset: 11px 7px;
`;

const AndroidShadow = css`
  elevation: 4;
`;

export const HORIZONTAL_PADDING = css`
  padding: 0 ${SPACING * 2}px;
`;

export const Padding = styled(View)`
  ${HORIZONTAL_PADDING};
`;

export const DEFAULT_SHADOW = css`
  ${Platform.OS === 'android' && AndroidShadow};
  ${Platform.OS === 'ios' && iOSShadow};
`;

export const DEFAULT_BORDER_RADIUS = css`
  border-radius: 8px;
`;
