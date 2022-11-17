import {Pressable} from 'react-native';
import React, {useCallback} from 'react';
import MemoryCardBase, {Props as MemoryCardBaseProps} from '../MemoryCardBase';

type Props = MemoryCardBaseProps & {};

function MemoryPressableCard({content, color, icon, time}: Props) {
  const onPress = useCallback(() => {}, []);

  return (
    <Pressable onPress={onPress} className="flex-[0.5] m-2">
      <MemoryCardBase content={content} color={color} icon={icon} time={time} />
    </Pressable>
  );
}

export default MemoryPressableCard;
