import {Pressable} from 'react-native';
import React, {useCallback} from 'react';
import {SvgIcon} from 'components/@base';
import useWriteStore from 'stores/useWriteStore';

type Props = {
  name: string;
  close: () => void;
};

function IconPressableItem({name, close}: Props) {
  const {setIcon} = useWriteStore();

  const onPress = useCallback(() => {
    setIcon(name);
    close();
  }, []);

  return (
    <Pressable onPress={onPress} hitSlop={4} className="m-3">
      <SvgIcon name={name as any} />
    </Pressable>
  );
}

export default IconPressableItem;
