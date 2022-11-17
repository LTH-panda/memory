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
  const {content, color, icon} = useWriteStore();
  const {saveMemory} = useMemoryStore();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (!content) setDisabled(true);
    else setDisabled(false);
  }, [content]);

  const onFinishPress = useCallback(() => {
    saveMemory({
      id: shortid.generate(),
      content,
      color,
      icon,
      time: Date.now(),
    });
    replace('MainTab');
  }, [content, color, icon]);

  return (
    <View className="absolute inset-x-0 px-4 bottom-10">
      <Button onPress={onFinishPress} disabled={disabled}>
        추가
      </Button>
    </View>
  );
}

export default WriteActions;
