import {Text, View} from 'react-native';
import React from 'react';
import {Cell} from 'components/@base';
import {VERSION} from 'commons/strings/info';

function SettingsVersionCell() {
  const right = <Text className="text-black font-primary">{VERSION}</Text>;

  return (
    <View>
      <Cell title="버전정보" right={right} />
    </View>
  );
}

export default SettingsVersionCell;
