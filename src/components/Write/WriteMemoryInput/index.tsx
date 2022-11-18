import React from 'react';
import {Input} from 'components/@base';
import {View} from 'react-native';
import useWriteStore from 'stores/useWriteStore';

function WriteMemoryInput() {
  const {content, setContent} = useWriteStore();

  return (
    <View className="my-2">
      <Input
        placeholder="기록할 일을 적어보세요"
        value={content}
        onChangeText={setContent}
        maxLength={15}
      />
    </View>
  );
}

export default WriteMemoryInput;
