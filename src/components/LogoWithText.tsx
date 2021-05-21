import React from 'react';
import {Flex} from '../ui/core/Flex';
import {Logo} from '../ui/core/Logo';
import {ExtraBold} from '../ui/core/Typography';

export const LogoWithText = () => {
  return (
    <Flex column align="center">
      <Logo />
      <ExtraBold size="m">ThorWallet</ExtraBold>
    </Flex>
  );
};
