import {Text, PressableProps} from 'react-native';
import React from 'react';
import styled from '@emotion/native';

type Props = PressableProps & {
  bgColor?: string;
  children: React.ReactNode;
};

function Button({bgColor = '#fff', children, disabled, ...rest}: Props) {
  return (
    <StyledButton
      disabled={disabled}
      {...rest}
      bgColor={disabled ? '#e2e8f0' : bgColor}
      className="items-center justify-center p-4 rounded-2xl">
      <Text
        className={`${
          disabled ? 'text-gray-400' : 'text-black'
        } text-lg font-primary`}>
        {children}
      </Text>
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.Pressable<{bgColor: string}>`
  background-color: ${props => props.bgColor};
`;
