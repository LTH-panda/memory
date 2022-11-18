import {View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {Button} from 'components/@base';
import useWriteStore from 'stores/useWriteStore';
import useMemoryStore from 'stores/useMemoryStore';
import shortid from 'shortid';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from 'navigations/RootStack/types';

function WriteActions() {
  const {replace} = useNavigation<RootStackNavigationProp>();
  const {mode, id, content, color, icon, time} = useWriteStore();
  const {saveMemory, editMemory} = useMemoryStore();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (!content) setDisabled(true);
    else setDisabled(false);
  }, [content]);

  const onFinishPress = useCallback(() => {
    const memory = {
      id: id ?? shortid.generate(),
      content,
      color,
      icon,
      time: time || Date.now(),
    };

    if (mode === 'add') saveMemory(memory);
    else editMemory(memory);

    replace('MainTab');
  }, [mode, content, color, icon]);

  return (
    <View className="my-2">
      <Button onPress={onFinishPress} disabled={disabled}>
        완료
      </Button>
    </View>
  );
}

export default WriteActions;
