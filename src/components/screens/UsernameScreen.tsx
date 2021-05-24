import React, {useState} from 'react';
import {useKeyboardVisible} from '../../helpers/use-keyboard-visible';
import {Button} from '../../ui/core/Button';
import {Checkbox} from '../../ui/core/Checkbox';
import {Flex} from '../../ui/core/Flex';
import {FloatingButton} from '../../ui/core/FloatingButton';
import {Input} from '../../ui/core/Input';
import {MakeSpacing} from '../../ui/core/Spacer';
import {Background} from '../../ui/theme/Background';
import {horizontalPadding, Padding} from '../../ui/theme/layout';
import {BottomPadder} from '../BottomPadder';
import {OnboardingHeading} from '../onboarding/OnboardingHeading';
import {TopPadder} from '../TopPadder';

export const UsernameScreen = () => {
  const [username, setUsername] = useState('');
  const [active, setActive] = useState(false);
  const keyboardVisible = useKeyboardVisible();

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
      <Flex row {...horizontalPadding}>
        <Checkbox active={active} onSelect={setActive} />
        <MakeSpacing xMultiply={4} />
        <Checkbox active={false} onSelect={(c) => undefined} />
      </Flex>
      <MakeSpacing yMultiply={10} />
      <Padding>
        <Button label={'Continue'} />
        <Button label={'Skip'} secondary />
      </Padding>
      <FloatingButton show={username.length > 3 && keyboardVisible} />
      <BottomPadder />
    </Background>
  );
};
