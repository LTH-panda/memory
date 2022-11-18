import {Pressable} from 'react-native';
import React, {useCallback} from 'react';
import {SvgIcon} from 'components/@base';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from 'navigations/RootStack/types';
import useWriteStore from 'stores/useWriteStore';

function WriteFloatingButton() {
  const {push} = useNavigation<RootStackNavigationProp>();
  const {clearContent, clearColor, clearIcon, clearTime} = useWriteStore();

  const onPress = useCallback(() => {
    clearContent();
    clearColor();
    clearIcon();
    clearTime();

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
