import {View} from 'react-native';
import React from 'react';
import palette from 'commons/strings/palette';
import ColorPressableItem from './ColorPressableItem';

const colorPalette = Object.keys(palette) as (keyof typeof palette)[];

function WriteColorPalette() {
  return (
    <View className="flex-row items-center p-4 my-2 bg-white rounded-2xl justify-evenly">
      {colorPalette.map(C => (
        <ColorPressableItem color={C} key={C} />
      ))}
    </View>
  );
}

export default WriteColorPalette;
