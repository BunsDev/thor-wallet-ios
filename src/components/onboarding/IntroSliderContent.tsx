import LottieView from 'lottie-react-native';
import React from 'react';
import {Flex} from '../../ui/core/Flex';
import {MakeSpacing} from '../../ui/core/Spacer';
import {Bold, Regular} from '../../ui/core/Typography';
import {horizontalPadding, SPACING} from '../../ui/theme/layout';

type Props = {
  title: string;
  description: string;
  animation: string;
};
export const IntroSliderContent = ({title, animation, description}: Props) => {
  return (
    <Flex column align="center" {...horizontalPadding}>
      <MakeSpacing yMultiply={4} />
      <LottieView
        source={animation}
        autoPlay
        loop
        resizeMode="contain"
        style={{
          height: 200,
          width: 200,
          marginBottom: -SPACING * 4,
        }}
      />
      <Bold size="l">{title}</Bold>
      <MakeSpacing yMultiply={1} />
      <Regular center>{description}</Regular>
    </Flex>
  );
};
