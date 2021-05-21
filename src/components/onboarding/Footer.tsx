import React from 'react';
import {Button} from '../../ui/core/Button';
import {MakeSpacing} from '../../ui/core/Spacer';
import {Padding} from '../../ui/theme/layout';

export const Footer = () => {
  return (
    <Padding>
      <Button onPress={() => undefined} label="Get Started" disabled />
      <MakeSpacing yMultiply={1} />
      <Button onPress={() => undefined} label="Learn more" secondary />
    </Padding>
  );
};
