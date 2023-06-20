import {colors} from '@health-box/common';
import React from 'react';
import Svg, {type SvgProps, Path} from 'react-native-svg';

export const AddIcon = (props: SvgProps) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={props.color ?? colors.green}
      {...props}>
      <Path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </Svg>
  );
};
