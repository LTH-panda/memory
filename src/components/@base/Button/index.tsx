import {PressableProps} from 'react-native';
import React from 'react';
import styled from '@emotion/native';

type Props = PressableProps & {
  bgColor?: string;
  isFit?: boolean;
  children: React.ReactNode;
};

function Button({bgColor = '#fff', children, disabled, ...rest}: Props) {
  return (
    <StyledButton
      disabled={disabled}
      {...rest}
      bgColor={disabled ? '#e2e8f0' : bgColor}
      className="items-center justify-center p-4 rounded-2xl">
      <StyledText
        color={bgColor}
        className={`${disabled && 'opacity-30'} text-lg font-primary`}>
        {children}
      </StyledText>
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.Pressable<{bgColor: string}>`
  background-color: ${props => props.bgColor};
`;

const StyledText = styled.Text<{color: string}>`
  color: ${props => (props.color === '#444444' ? '#fff' : '#444')};
`;
