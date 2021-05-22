import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import styled from 'styled-components';
import {useMemoizedSharedValue} from '../../helpers/use-memoized-shared-value';
import {useOnboardingNavigation} from '../../navigation/use-navigation';
import {__SCREENS} from '../../types/navigation/navigation-types';
import {Button} from '../../ui/core/Button';
import {Flex} from '../../ui/core/Flex';
import {ObliqueLines} from '../../ui/core/ObliqueLines';
import {MakeSpacing} from '../../ui/core/Spacer';
import {Background} from '../../ui/theme/Background';
import {Padding, __WINDOW_WIDTH} from '../../ui/theme/layout';
import {BottomPadder} from '../BottomPadder';
import {LogoWithText} from '../LogoWithText';
import {CarouselDots} from '../onboarding/CarouselDots';
import {IntroSliderContent} from '../onboarding/IntroSliderContent';
import {TopPadder} from '../TopPadder';

const ELEMENT_WIDTH = __WINDOW_WIDTH;

const Element = styled(View)`
  width: ${ELEMENT_WIDTH}px;
`;

export const IntroScreen = () => {
  const navigation = useOnboardingNavigation<__SCREENS.WELCOME_SCREEN>();
  const [, setIndex] = useState(0);
  const currentIndex = useMemoizedSharedValue(0);
  const NR_ELEMENTS = 3;

  const scrollHandler = useAnimatedScrollHandler({
    onMomentumEnd: (event) => {
      currentIndex.value = Math.round(event.contentOffset.x / ELEMENT_WIDTH);
      runOnJS(setIndex)(currentIndex.value);
    },
  });

  const navigateTo = useCallback(() => {
    navigation.navigate(__SCREENS.USERNAME);
  }, [navigation]);

  return (
    <Background column flex={1}>
      <TopPadder />
      <MakeSpacing yMultiply={3} />
      <ObliqueLines topOffset={21} />
      <Flex row justify="center">
        <LogoWithText />
      </Flex>
      <Flex column>
        <Animated.ScrollView
          onScroll={scrollHandler}
          horizontal
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          snapToInterval={ELEMENT_WIDTH}
          contentContainerStyle={{
            width: ELEMENT_WIDTH * NR_ELEMENTS,
          }}
          scrollEventThrottle={16}
        >
          <Element>
            <IntroSliderContent
              title="Decentralized."
              description="The THORWallet will allow you to store your coins savely and allow you
        to swap any tokens without KYC in a fully decentralized manner. You are
        fully in control of your finances without middleman."
              animation={require('../../assets/animations/decentralized.json')}
            />
          </Element>
          <Element>
            <IntroSliderContent
              title="Yearly Return."
              description="There are two distinct ways to earn a yearly return. You can either provide liquidity to the trading pool where a part of the trading fees will be shared with you or you can lend your tokens and someone else will borrow them and pay you an interest rate for that."
              animation={require('../../assets/animations/graph.json')}
            />
          </Element>
          <Element>
            <IntroSliderContent
              title="Native Chains."
              description={
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, cumque cupiditate, deserunt dolore hic illum molestiae nemo, odio optio ratione rem tempore? Accusantium consequatur consequuntur est inventore itaque, quam ullam'
              }
              animation={require('../../assets/animations/native.json')}
            />
          </Element>
        </Animated.ScrollView>
        <MakeSpacing yMultiply={3} />
        <CarouselDots nrDots={NR_ELEMENTS} activeIndex={currentIndex} />
      </Flex>
      <Flex flex={1} />
      <Padding>
        <Button onPress={navigateTo} label="Get Started" />
        <MakeSpacing yMultiply={1} />
        <Button
          onPress={() => undefined}
          label="Learn more about THOR"
          secondary
        />
      </Padding>
      <BottomPadder />
    </Background>
  );
};
