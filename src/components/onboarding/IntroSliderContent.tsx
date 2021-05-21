import React from 'react';
import {Flex} from '../../ui/core/Flex';
import {MakeSpacing} from '../../ui/core/Spacer';
import {Bold, Regular} from '../../ui/core/Typography';
import {horizontalPadding} from '../../ui/theme/layout';

export const IntroSliderContent = () => {
  return (
    <Flex
      column
      flex={1}
      justify="center"
      align="center"
      {...horizontalPadding}
    >
      <Bold size="l">Decentralized.</Bold>
      <MakeSpacing yMultiply={1} />
      <Regular center>
        The THORWallet will allow you to store your coins savely and allow you
        to swap any tokens without KYC in a fully decentralized manner. You are
        fully in control of your finances without middleman.
      </Regular>
    </Flex>
  );
};
