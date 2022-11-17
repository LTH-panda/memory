import {Pressable} from 'react-native';
import React, {useCallback} from 'react';
import {SvgIcon} from 'components/@base';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from 'navigations/RootStack/types';

function WriteFloatingButton() {
  const {push} = useNavigation<RootStackNavigationProp>();

  const onPress = useCallback(() => {
    push('Write');
  }, []);

  return (
    <Pressable
      onPress={onPress}
      hitSlop={4}
      className="absolute self-start p-4 bg-white rounded-full shadow bottom-10 right-5">
      <SvgIcon name="plusCirlce" size={28} />
    </Pressable>
  );
}

export default WriteFloatingButton;
