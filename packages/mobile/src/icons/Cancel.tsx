import {colors} from '@health-box/common';
import React from 'react';
import Svg, {type SvgProps, Path} from 'react-native-svg';

export const CancelIcon = (props: SvgProps) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={props.color ?? colors.red}
      {...props}>
      <Path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
    </Svg>
  );
};
