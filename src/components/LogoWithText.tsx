import React from 'react';
import {Flex} from '../ui/core/Flex';
import {Logo} from '../ui/core/Logo';
import {Black} from '../ui/core/Typography';

export const LogoWithText = () => {
  return (
    <Flex column align="center">
      <Logo />
      <Black size="l">ThorWallet</Black>
    </Flex>
  );
};
