import React from 'react';
import {View} from 'react-native';
import styled, {css} from 'styled-components';
import {Flex} from '../../../ui/core/Flex';
import {__COLORS} from '../../../ui/theme/colors';
import {DEFAULT_BORDER_RADIUS, DEFAULT_SHADOW} from '../../../ui/theme/layout';
import {DefaultGradient} from '../../DefaultGradient';

type Props = {progress: number};

const BAR_WIDTH = 120;
const BAR_HEIGHT = 3;

const Dim = css`
  height: ${BAR_HEIGHT}px;
  width: ${BAR_WIDTH}px;
`;

const FullBar = styled(View)`
  ${Dim};
  background-color: ${__COLORS.WHITE};
  ${DEFAULT_BORDER_RADIUS};
  ${DEFAULT_SHADOW};
`;
const ProgressBar = styled(DefaultGradient)<{progress: number}>`
  position: absolute;
  left: 0;
  top: 0;
  height: ${BAR_HEIGHT}px;
  ${DEFAULT_BORDER_RADIUS};
  ${DEFAULT_SHADOW};

  width: ${(props) => props.progress}%;
`;
export const HeaderTitle = ({progress}: Props) => {
  return (
    <Flex row align="center">
      <FullBar>
        <ProgressBar progress={progress} />
      </FullBar>
    </Flex>
  );
};
