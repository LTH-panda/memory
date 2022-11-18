import {View, Text, Platform} from 'react-native';
import React from 'react';
import {SvgIcon} from 'components/@base';
import styled from '@emotion/native';
import getGapDate from 'utils/getGapDate';
import useNow from 'hooks/useNow';

export type Props = {
  content: string;
  color: string;
  icon: any;
  time: number;
};

function MemoryCardBase({
  content,
  color = '#444',
  icon = 'faceContent',
  time,
}: Props) {
  const {now} = useNow();

  return (
    <View
      className={`${
        Platform.OS === 'ios' && 'shadow-sm'
      } w-full p-4 bg-white rounded-2xl aspect-square`}
      style={{elevation: 2}}>
      <Title color={color} className="text-lg font-primary">
        {content || 'memory'}
      </Title>
      <View className="items-center justify-center flex-1">
        <SvgIcon name={icon} color={color} size={34} />
      </View>
      <Text className="text-lg text-center text-black font-primary">
        {time ? getGapDate(now, time) : '지난 시간'}
      </Text>
    </View>
  );
}

export default MemoryCardBase;

const Title = styled.Text<{color: string}>`
  color: ${props => props.color};
`;
