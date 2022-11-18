import {Pressable} from 'react-native';
import React, {useCallback} from 'react';
import useMemoryStore from 'stores/useMemoryStore';
import MemoryCardBase, {Props as MemoryCardBaseProps} from '../MemoryCardBase';

type Props = MemoryCardBaseProps & {
  id: string;
};

function MemoryPressableCard({id, content, color, icon, time}: Props) {
  const {isVisibleDetailBottomSheet, selectMemory, openDetailBottomSheet} =
    useMemoryStore();

  const onPress = useCallback(() => {
    if (isVisibleDetailBottomSheet) return;
    selectMemory({id, content, color, icon, time});
    openDetailBottomSheet();
  }, [isVisibleDetailBottomSheet]);

  return (
    <Pressable onPress={onPress} className="flex-[0.5] m-2">
      <MemoryCardBase content={content} color={color} icon={icon} time={time} />
    </Pressable>
  );
}

export default MemoryPressableCard;
