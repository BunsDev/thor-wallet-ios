import React from 'react';
import {Flex} from '../../ui/core/Flex';
import {ObliqueLines} from '../../ui/core/ObliqueLines';
import {MakeSpacing} from '../../ui/core/Spacer';
import {Background} from '../../ui/theme/Background';
import {LogoWithText} from '../LogoWithText';
import {TopPadder} from '../TopPadder';

export const IntroScreen = () => {
  return (
    <Background column flex={1}>
      <TopPadder />
      <MakeSpacing yMultiply={3} />
      <ObliqueLines topOffset={80} />
      <Flex row justify="center">
        <LogoWithText />
      </Flex>
    </Background>
  );
};
