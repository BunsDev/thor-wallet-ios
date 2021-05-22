import React from 'react';
import {Flex} from '../../ui/core/Flex';
import {Black, Regular} from '../../ui/core/Typography';
import {horizontalPadding} from '../../ui/theme/layout';

type Props = {
  title: string;
  subtitle?: string;
};
export const OnboardingHeading = ({title, subtitle}: Props) => {
  return (
    <Flex column {...horizontalPadding}>
      <Black size="xl">{title.toUpperCase()}</Black>
      <Regular size="xl">{subtitle}</Regular>
    </Flex>
  );
};
