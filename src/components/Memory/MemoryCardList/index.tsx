import {FlatList} from 'react-native';
import React from 'react';
import useMemoryStore from 'stores/useMemoryStore';
import MemoryPressableCard from '../MemoryPressableCard';

function MemoryCardList() {
  const {memories} = useMemoryStore();

  return (
    <FlatList
      data={memories.reverse()}
      renderItem={({item}) => (
        <MemoryPressableCard
          content={item.content}
          color={item.color}
          icon={item.icon}
          time={item.time}
        />
      )}
      numColumns={2}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default MemoryCardList;
