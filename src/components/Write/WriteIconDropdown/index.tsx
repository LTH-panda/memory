import {View, Pressable} from 'react-native';
import React, {useCallback, useState} from 'react';
import useWriteStore from 'stores/useWriteStore';
import {SvgIcon} from 'components/@base';
import colors from 'commons/styles/colors';
import WriteIconPalette from '../WriteIconPalette';

function WriteIconDropdown() {
  const {icon} = useWriteStore();
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <View className="z-10 p-4 my-2 bg-white rounded-2xl">
      {isOpen ? (
        <View>
          <WriteIconPalette close={close} />
          <Pressable
            onPress={close}
            hitSlop={4}
            className="items-center justify-center">
            <SvgIcon name="chevronUp" color={colors.gray} />
          </Pressable>
        </View>
      ) : (
        <Pressable
          onPress={open}
          className="items-center justify-between w-full">
          <SvgIcon name={icon as any} />
          <SvgIcon name="chevronDown" color={colors.gray} />
        </Pressable>
      )}
    </View>
  );
}

export default WriteIconDropdown;
