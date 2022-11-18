import {View} from 'react-native';
import React, {useCallback} from 'react';
import useWriteStore from 'stores/useWriteStore';
import {Button} from 'components/@base';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from 'navigations/RootStack/types';
import useMemoryStore from 'stores/useMemoryStore';

function MemoryDetailActions() {
  const {push} = useNavigation<RootStackNavigationProp>();

  const {
    selectedMemory,
    editMemory,
    removeMemory,
    clearSelectedMemory,
    closeDetailBottomSheet,
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

  const onRemovePress = useCallback(() => {
    if (!selectedMemory) return;
    removeMemory(selectedMemory);

    closeDetailBottomSheet();
    clearSelectedMemory();
  }, [selectedMemory]);

  return (
    <>
      <View className="my-2">
        <Button onPress={onResetPress} bgColor={selectedMemory?.color}>
          시간 초기화
        </Button>
      </View>
      <View className="flex-row items-center justify-between my-2">
        <View className="flex-1 mr-2">
          <Button onPress={onEditPress}>수정</Button>
        </View>
        <View className="flex-1 ml-2">
          <Button onPress={onRemovePress}>삭제</Button>
        </View>
      </View>
    </>
  );
}

export default MemoryDetailActions;
