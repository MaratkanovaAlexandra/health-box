import {colors} from '@health-box/common';
import React from 'react';
import Svg, {type SvgProps, Path} from 'react-native-svg';

export const BedIcon = (props: SvgProps) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={props.color ?? colors.purple}
      {...props}>
      <Path d="M7 13c1.65 0 3-1.35 3-3S8.65 7 7 7s-3 1.35-3 3 1.35 3 3 3zm12-6h-8v7H3V7H1v10h22v-6c0-2.21-1.79-4-4-4z" />
    </Svg>
  );
};
