import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import {BottomSheet, Button} from 'components/@base';
import useMemoryStore from 'stores/useMemoryStore';
import useWriteStore from 'stores/useWriteStore';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from 'navigations/RootStack/types';

function MemoryDetailBottomSheet() {
  const {push} = useNavigation<RootStackNavigationProp>();
  const {
    isVisibleDetailBottomSheet,
    selectedMemory,
    closeDetailBottomSheet,
    clearSelectedMemory,
    editMemory,
  } = useMemoryStore();
  const {setMode, setId, setContent, setColor, setIcon, setTime} =
    useWriteStore();

  const onResetPress = useCallback(() => {
    if (!selectedMemory) return;
    editMemory({...selectedMemory, time: Date.now()});
    closeDetailBottomSheet();
    clearSelectedMemory();
  }, [selectedMemory]);

  const onEditPress = useCallback(() => {
    if (!selectedMemory) return;
    const {id, content, color, icon, time} = selectedMemory;

    setMode('edit');

    // set write form
    setId(id);
    setContent(content);
    setColor(color);
    setIcon(icon);
    setTime(time);

    // clear layouts
    closeDetailBottomSheet();
    clearSelectedMemory();
    push('Write');
  }, [selectedMemory]);

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
        <View className="my-2">
          <Button onPress={onResetPress} bgColor={selectedMemory?.color}>
            시간 초기화
          </Button>
        </View>
        <View className="my-2">
          <Button onPress={onEditPress}>수정</Button>
        </View>
        <View className="my-2">
          <Button onPress={onClosePress}>닫기</Button>
        </View>
      </View>
    </BottomSheet>
  );
}

export default MemoryDetailBottomSheet;
