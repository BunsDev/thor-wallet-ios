import React from 'react';
import Svg, {Defs, G, LinearGradient, Path, Stop} from 'react-native-svg';
import {__COLORS} from '../theme/colors';

const ORIGINAL_DIM = {
  width: 50,
  height: 58,
};

type Props = {
  sizeMultiplier?: number;
  color?: string;
};

export const Logo = ({sizeMultiplier = 1, color}: Props) => {
  return (
    <Svg
      width={sizeMultiplier * ORIGINAL_DIM.width}
      height={sizeMultiplier * ORIGINAL_DIM.height}
      viewBox="0 0 50 58"
    >
      <Defs>
        <LinearGradient
          x1="0%"
          y1="50%"
          x2="100%"
          y2="50%"
          id="linearGradient-1"
        >
          <Stop stopColor={color ?? __COLORS.LEFT_GRADIENT} offset="0%" />
          <Stop stopColor={color ?? __COLORS.RIGHT_GRADIENT} offset="100%" />
        </LinearGradient>
      </Defs>
      <G stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <G
          id="Artboard"
          transform="translate(-170.000000, -72.000000)"
          fill="url(#linearGradient-1)"
          fillRule="nonzero"
        >
          <G
            id="c84db827e8da7477baa5f9fb60808d4e"
            transform="translate(170.094308, 72.000000)"
          >
            <Path
              d="M0,57.1428571 L40.0409054,40.3429927 L27.3738751,27.539739 L0,57.1428571 Z M14.7068448,14.7527538 L27.3738751,27.539739 L50,0 L14.7068448,14.7527538 Z"
              id="Shape"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};
