import {Pressable} from 'react-native';
import React, {useCallback} from 'react';
import {SvgIcon} from 'components/@base';
import {useNavigation} from '@react-navigation/native';

export type BackTypes = 'close';

type Props = {
  type: BackTypes;
};

const iconMap = {
  close: 'xClose' as const,
};

function Back({type}: Props) {
  const {goBack} = useNavigation();

  const onPress = useCallback(() => {
    goBack();
  }, []);

  return (
    <Pressable
      onPress={onPress}
      hitSlop={4}
      className="items-center justify-center">
      <SvgIcon name={iconMap[type]} size={32} />
    </Pressable>
  );
}

export default Back;
