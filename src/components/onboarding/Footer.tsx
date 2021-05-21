import React from 'react';
import {Button} from '../../ui/core/Button';
import {Padding} from '../../ui/theme/layout';

export const Footer = () => {
  return (
    <Padding>
      <Button onPress={() => undefined} label="Get Started" />
    </Padding>
  );
};
