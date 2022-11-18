import {View, Text} from 'react-native';
import React from 'react';
import Back, {BackTypes} from './Back';

type Props = {
  title?: string;
  back?: BackTypes;
};

function Header({title, back}: Props) {
  return (
    <View className="flex-row items-center justify-between p-4">
      {title && (
        <Text className="text-xl text-black font-primary">{title}</Text>
      )}
      {back && <Back type={back} />}
    </View>
  );
}

export default Header;
