import {TextInputProps, TextInput} from 'react-native';
import React from 'react';

type Props = TextInputProps & {};

function Input({...rest}: Props) {
  return (
    <TextInput
      {...rest}
      className="p-4 text-lg leading-5 text-center text-black bg-white rounded-2xl font-primary"
    />
  );
}

export default Input;
