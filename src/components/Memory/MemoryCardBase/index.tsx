import {View, Text} from 'react-native';
import React from 'react';
import {SvgIcon} from 'components/@base';
import styled from '@emotion/native';

type Props = {
  title: string;
  icon: any;
  time: any;
  color: string;
};

function MemoryCardBase({title, icon = 'faceContent', time, color}: Props) {
  return (
    <View className="w-full p-4 m-2 bg-white rounded-2xl aspect-square">
      <Title color={color} className="text-lg font-primary">
        {title || 'memory'}
      </Title>
      <View className="items-center justify-center flex-1">
        <SvgIcon name={icon} color={color} size={34} />
      </View>
      <Text className="text-lg text-center text-black font-primary">
        {time}
      </Text>
    </View>
  );
}

export default MemoryCardBase;

const Title = styled.Text<{color: string}>`
  color: ${props => props.color};
`;
