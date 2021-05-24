import React, {useCallback, useState} from 'react';
import {Button} from '../../ui/core/Button';
import {DecorationDots} from '../../ui/core/DecorationDots';
import {Flex} from '../../ui/core/Flex';
import {MakeSpacing} from '../../ui/core/Spacer';
import {Background} from '../../ui/theme/Background';
import {horizontalPadding, Padding} from '../../ui/theme/layout';
import {BottomPadder} from '../BottomPadder';
import {OnboardingHeading} from '../onboarding/OnboardingHeading';
import {PinCode} from '../onboarding/PinCode';
import {TopPadder} from '../TopPadder';

export const CreatePinCode = () => {
  const [code, setCode] = useState<string[]>([]);

  const onDigit = useCallback(
    (c: string) => setCode((oldCode) => [...oldCode, c]),
    [],
  );
  return (
    <Background column flex={1}>
      <TopPadder />
      <MakeSpacing yMultiply={2} />
      <OnboardingHeading
        title={'Secure your Wallet'}
        subtitle={'Create a PIN code of 6 digits.'}
      />
      <MakeSpacing yMultiply={8} />
      <Flex column flex={1} {...horizontalPadding}>
        <PinCode digits={code} onDigit={onDigit} />
      </Flex>
      <Padding>
        <Button label={'Continue'} />
      </Padding>
      <MakeSpacing yMultiply={3} />
      <BottomPadder />
      <DecorationDots />
    </Background>
  );
};
