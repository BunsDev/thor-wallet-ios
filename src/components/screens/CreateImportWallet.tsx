import React from 'react';
import {Button} from '../../ui/core/Button';
import {Flex} from '../../ui/core/Flex';
import {MakeSpacing} from '../../ui/core/Spacer';
import {Background} from '../../ui/theme/Background';
import {horizontalPadding, Padding} from '../../ui/theme/layout';
import {BottomPadder} from '../BottomPadder';
import {OnboardingHeading} from '../onboarding/OnboardingHeading';
import {TopPadder} from '../TopPadder';

export const CreateImportWallet = () => {
  return (
    <Background column flex={1}>
      <TopPadder />
      <MakeSpacing yMultiply={2} />
      <OnboardingHeading
        title={'Wallet'}
        subtitle={'Import or create your Wallet'}
      />
      <MakeSpacing yMultiply={8} />
      <Flex flex={1} {...horizontalPadding} />
      <Padding>
        <Button label={'Create Wallet'} />
        <Button label={'Import Wallet'} secondary />
      </Padding>
      <BottomPadder />
    </Background>
  );
};
