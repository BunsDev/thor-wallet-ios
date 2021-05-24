import LottieView from 'lottie-react-native';
import React, {useCallback, useEffect, useRef} from 'react';
import {useOnboardingNavigation} from '../../navigation/use-navigation';
import {__SCREENS} from '../../types/navigation/navigation-types';
import {Button} from '../../ui/core/Button';
import {Flex} from '../../ui/core/Flex';
import {PressableLabel} from '../../ui/core/PressableLabel';
import {MakeSpacing} from '../../ui/core/Spacer';
import {Regular} from '../../ui/core/Typography';
import {Background} from '../../ui/theme/Background';
import {horizontalPadding, Padding} from '../../ui/theme/layout';
import {BottomPadder} from '../BottomPadder';
import {OnboardingHeading} from '../onboarding/OnboardingHeading';
import {TopPadder} from '../TopPadder';

const wallet = require('../../assets/animations/wallet.json');

const END_FRAME = 39;
export const CreateImportWallet = () => {
  const navigation = useOnboardingNavigation<__SCREENS.CREATE_IMPORT_WALLET>();
  const ref = useRef<LottieView>(null);

  useEffect(() => {
    ref?.current?.play(0, END_FRAME);
  }, []);

  const navigateTo = useCallback(
    () => navigation.navigate(__SCREENS.CREATE_PIN_CODE),
    [navigation],
  );

  return (
    <Background column flex={1}>
      <TopPadder />
      <MakeSpacing yMultiply={2} />
      <OnboardingHeading
        title={'Wallet'}
        subtitle={'Import or create your Wallet'}
      />
      <MakeSpacing yMultiply={8} />
      <Flex column flex={1} {...horizontalPadding}>
        <Flex row justify="center">
          <LottieView
            ref={ref}
            source={wallet}
            autoPlay={false}
            loop={false}
            resizeMode="contain"
            style={{
              height: 160,
              width: 160,
            }}
          />
        </Flex>
        <Regular center size="s">
          You can either create a new wallet on the thorchain or import an
          existing one. We can neither see nor transfer your private keys.{' '}
        </Regular>
        <MakeSpacing yMultiply={1} />
        <PressableLabel
          label={'Learn more'}
          onPress={() => undefined}
          size="s"
          center
        />
      </Flex>
      <Padding>
        <Button label={'Create Wallet'} onPress={navigateTo} />
        <Button label={'Import Wallet'} secondary />
      </Padding>
      <BottomPadder />
    </Background>
  );
};
