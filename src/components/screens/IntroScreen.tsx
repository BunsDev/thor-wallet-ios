import React from 'react';
import {Logo} from '../../ui/core/Logo';
import { Black, Regular, SemiBold } from "../../ui/core/Typography";
import {Background} from '../../ui/theme/Background';
import {TopPadder} from '../TopPadder';

export const IntroScreen = () => {
  return (
    <Background column flex={1}>
      <TopPadder />
      <Regular>Regular muidd</Regular>
      <Black>Black mudddddd</Black>
      <Logo />
    </Background>
  );
};
