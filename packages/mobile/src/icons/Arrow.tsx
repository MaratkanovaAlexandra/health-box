import {colors} from '@health-box/common';
import React from 'react';
import Svg, {type SvgProps, Path} from 'react-native-svg';

export const ArrowIcon = (props: SvgProps) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={props.color ?? colors.blue}
      {...props}>
      <Path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z" />
    </Svg>
  );
};
