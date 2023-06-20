import {colors} from '@health-box/common';
import React from 'react';
import Svg, {type SvgProps, Path} from 'react-native-svg';

export const MenuIcon = (props: SvgProps) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={props.color ?? colors.black}
      {...props}>
      <Path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </Svg>
  );
};
