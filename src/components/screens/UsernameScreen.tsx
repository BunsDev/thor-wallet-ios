import React, {useState} from 'react';
import {Button} from '../../ui/core/Button';
import {Flex} from '../../ui/core/Flex';
import {Input} from '../../ui/core/Input';
import {MakeSpacing} from '../../ui/core/Spacer';
import {Background} from '../../ui/theme/Background';
import {horizontalPadding, Padding} from '../../ui/theme/layout';
import {BottomPadder} from '../BottomPadder';
import {OnboardingHeading} from '../onboarding/OnboardingHeading';
import {TopPadder} from '../TopPadder';

export const UsernameScreen = () => {
  const [username, setUsername] = useState('');
  return (
    <Background column flex={1}>
      <TopPadder />
      <MakeSpacing yMultiply={2} />
      <OnboardingHeading
        title={'Get Started'}
        subtitle={'Create your username'}
      />
      <MakeSpacing yMultiply={8} />
      <Flex flex={1} {...horizontalPadding}>
        <Input
          label={'username'}
          value={username}
          onChangeText={setUsername}
          status={username.length > 3 ? 'valid' : undefined}
        />
      </Flex>
      <Padding>
        <Button label={'Continue'} />
        <Button label={'Skip'} secondary />
      </Padding>
      <BottomPadder />
    </Background>
  );
};
