import {View} from 'react-native';
import React from 'react';
import {MemoryCardBase} from 'components/Memory';
import useWriteStore from 'stores/useWriteStore';

function WriteMemoryCardPreview() {
  const {content, color, icon} = useWriteStore();

  return (
    <View className="items-center justify-center w-1/2 mx-auto my-2">
      <MemoryCardBase content={content} color={color} icon={icon} time={0} />
    </View>
  );
}

export default WriteMemoryCardPreview;
