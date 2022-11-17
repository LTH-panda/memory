import {View} from 'react-native';
import React from 'react';
import IconPressableItem from './IconPressableItem';

const iconPalette = [
  'faceContent',
  'faceHappy',
  'faceFrown',
  'faceNeutral',
  'faceSad',
  'faceSmile',
  'faceWink',
  'alarmClock',
  'bankNote',
  'book',
  'bus',
  'calendar',
  'cloud',
  'creditCard',
  'gamingPad',
  'gift',
  'headphones',
  'heart',
  'home',
  'hourglass',
  'infinity',
  'mail',
  'medical',
  'moon',
  'palette',
  'pencil',
  'phone',
  'rocket',
  'scissors',
  'shoppingCart',
  'star',
  'thumbsDown',
  'thumbsUp',
  'trash',
  'umbrella',
];

function WriteIconPalette() {
  return (
    <View className="flex-row flex-wrap items-center justify-between">
      {iconPalette.map(I => (
        <IconPressableItem name={I} />
      ))}
    </View>
  );
}

export default WriteIconPalette;
