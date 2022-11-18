import {View, Text} from 'react-native';
import React from 'react';

type Props = {
  title: string;
  right?: React.ReactNode;
};

function Cell({title, right}: Props) {
  return (
    <View className="flex-row items-center justify-between p-4 bg-inherit">
      <Text className="text-lg text-black font-primary">{title}</Text>
      {right}
    </View>
  );
}

export default Cell;
