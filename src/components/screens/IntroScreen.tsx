import React from 'react';
import {View} from 'react-native';
import Animated, {useAnimatedScrollHandler} from 'react-native-reanimated';
import styled from 'styled-components';
import {useMemoizedSharedValue} from '../../helpers/use-memoized-shared-value';
import {Button} from '../../ui/core/Button';
import {Flex} from '../../ui/core/Flex';
import {ObliqueLines} from '../../ui/core/ObliqueLines';
import {MakeSpacing} from '../../ui/core/Spacer';
import {Background} from '../../ui/theme/Background';
import {Padding, __WINDOW_WIDTH} from '../../ui/theme/layout';
import {BottomPadder} from '../BottomPadder';
import {LogoWithText} from '../LogoWithText';
import { IntroSliderContent } from "../onboarding/IntroSliderContent";
import {IntroSlider2} from '../onboarding/IntroSlider2';
import {TopPadder} from '../TopPadder';

const ELEMENT_WIDTH = __WINDOW_WIDTH;

const Element = styled(View)`
  width: ${ELEMENT_WIDTH}px;
`;

export const IntroScreen = () => {
  const currentIndex = useMemoizedSharedValue(0);
  const NR_ELEMENTS = 2;

  const scrollHandler = useAnimatedScrollHandler({
    onMomentumEnd: (event) => {
      currentIndex.value = event.contentOffset.x / ELEMENT_WIDTH;
    },
  });
  return (
    <Background column flex={1}>
      <TopPadder />
      <MakeSpacing yMultiply={3} />
      <ObliqueLines topOffset={21} />
      <Flex row justify="center">
        <LogoWithText />
      </Flex>
      <Flex column flex={1}>
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
            <IntroSliderContent />
          </Element>
          <Element>
            <IntroSlider2 />
          </Element>
        </Animated.ScrollView>
      </Flex>
      <Padding>
        <Button onPress={() => undefined} label="Get Started"  />
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
