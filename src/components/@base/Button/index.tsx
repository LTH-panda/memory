import {Text, PressableProps, Pressable} from 'react-native';
import React from 'react';

type Props = PressableProps & {
  children: React.ReactNode;
};

function Button({children, disabled, ...rest}: Props) {
  return (
    <Pressable
      {...rest}
      className={`${
        disabled ? 'bg-gray-200' : 'bg-white'
      } items-center justify-center p-4 rounded-2xl`}>
      <Text
        className={`${
          disabled ? 'text-gray-400' : 'text-black'
        } text-lg font-primary`}>
        {children}
      </Text>
    </Pressable>
  );
}

export default Button;
