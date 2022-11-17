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

type Props = {
  close: () => void;
};

function WriteIconPalette({close}: Props) {
  return (
    <View className="flex-row flex-wrap items-center justify-between">
      {iconPalette.map(I => (
        <IconPressableItem name={I} close={close} key={I} />
      ))}
    </View>
  );
}

export default WriteIconPalette;
