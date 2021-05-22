import React from 'react';
import {Button} from '../../ui/core/Button';
import {Flex} from '../../ui/core/Flex';
import {MakeSpacing} from '../../ui/core/Spacer';
import {Background} from '../../ui/theme/Background';
import {Padding} from '../../ui/theme/layout';
import {BottomPadder} from '../BottomPadder';
import {OnboardingHeading} from '../onboarding/OnboardingHeading';
import {TopPadder} from '../TopPadder';

export const UsernameScreen = () => {
  return (
    <Background column flex={1}>
      <TopPadder />
      <MakeSpacing yMultiply={2} />
      <OnboardingHeading
        title={'Get Started'}
        subtitle={'Create your username'}
      />
      <Flex flex={1} />
      <Padding>
        <Button label={'Continue'} />
        <Button label={'Skip'} secondary />
      </Padding>
      <BottomPadder />
    </Background>
  );
};
