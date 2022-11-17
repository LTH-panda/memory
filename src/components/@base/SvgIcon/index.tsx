import React from 'react';
import {SvgProps} from 'react-native-svg';
import * as Icons from './icons';

type Props = SvgProps & {
  name: keyof typeof Icons;
  color?: string;
  size?: number;
};

function SvgIcon({name, color = '#444', size = 28, ...rest}: Props) {
  const Icon = Icons[name];

  return <Icon width={size} height={size} color={color} {...rest} />;
}

export default SvgIcon;
