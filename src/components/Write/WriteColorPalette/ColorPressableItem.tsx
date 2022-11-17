import React, {useCallback} from 'react';
import palette from 'commons/strings/palette';
import styled from '@emotion/native';
import useWriteStore from 'stores/useWriteStore';

type Props = {
  color: keyof typeof palette;
};

function ColorPressableItem({color}: Props) {
  const {setColor} = useWriteStore();

  const onPress = useCallback(() => {
    setColor(palette[color]);
  }, []);

  return (
    <ColorPressable
      onPress={onPress}
      hitSlop={4}
      bgColor={palette[color]}
      className="self-start p-4 rounded-full"
    />
  );
}

export default ColorPressableItem;

const ColorPressable = styled.Pressable<{bgColor: string}>`
  background-color: ${props => props.bgColor};
`;
