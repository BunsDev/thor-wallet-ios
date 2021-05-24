import React, {useCallback, useMemo, useState} from 'react';
import {
  adjectives,
  animals,
  uniqueNamesGenerator,
} from 'unique-names-generator';
import {useOnboardingNavigation} from '../../navigation/use-navigation';
import {__SCREENS} from '../../types/navigation/navigation-types';
import {Button} from '../../ui/core/Button';
import {Flex} from '../../ui/core/Flex';
import {FloatingButton} from '../../ui/core/FloatingButton';
import {Input} from '../../ui/core/Input';
import {PressableLabel} from '../../ui/core/PressableLabel';
import {MakeSpacing} from '../../ui/core/Spacer';
import {Background} from '../../ui/theme/Background';
import {horizontalPadding, Padding} from '../../ui/theme/layout';
import {BottomPadder} from '../BottomPadder';
import {OnboardingHeading} from '../onboarding/OnboardingHeading';
import {TopPadder} from '../TopPadder';

export const UsernameScreen = () => {
  const [username, setUsername] = useState('');
  const navigation = useOnboardingNavigation<__SCREENS.USERNAME>();

  const navigateTo = useCallback(() => {
    navigation.navigate(__SCREENS.CREATE_IMPORT_WALLET);
  }, [navigation]);

  const isValid = useMemo(() => username.length > 3, [username.length]);

  const generateUsername = useCallback(() => {
    setUsername(
      uniqueNamesGenerator({
        dictionaries: [adjectives, animals],
        length: 2,
      }),
    );
  }, []);

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
        <MakeSpacing yMultiply={2} />
        <Flex row>
          <PressableLabel
            label="generate"
            onPress={generateUsername}
            size="xs"
          />
        </Flex>
      </Flex>
      <Padding>
        <Button label={'Continue'} disabled={!isValid} onPress={navigateTo} />
        <Button label={'Skip'} secondary onPress={navigateTo} />
      </Padding>
      <FloatingButton show={username.length > 3} onPress={navigateTo} />
      <BottomPadder />
    </Background>
  );
};
