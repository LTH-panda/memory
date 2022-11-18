import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import {BottomSheet, Button} from 'components/@base';
import useMemoryStore from 'stores/useMemoryStore';
import MemoryDetailActions from '../MemoryDetailActions';

function MemoryDetailBottomSheet() {
  const {
    isVisibleDetailBottomSheet,
    selectedMemory,
    closeDetailBottomSheet,
    clearSelectedMemory,
  } = useMemoryStore();

  const onClosePress = useCallback(() => {
    closeDetailBottomSheet();
    clearSelectedMemory();
  }, []);

  return (
    <BottomSheet
      isVisible={isVisibleDetailBottomSheet}
      onBackDrop={onClosePress}>
      <View>
        <View className="p-4 my-2 bg-white rounded-2xl">
          <Text className="text-lg text-black font-primary">
            {selectedMemory?.content}
          </Text>
        </View>
        <MemoryDetailActions />
        <View className="my-2">
          <Button onPress={onClosePress}>닫기</Button>
        </View>
      </View>
    </BottomSheet>
  );
}

export default MemoryDetailBottomSheet;
