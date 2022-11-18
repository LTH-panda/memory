import {FlatList, ListRenderItem} from 'react-native';
import React from 'react';
import useMemoryStore, {Memory} from 'stores/useMemoryStore';
import MemoryPressableCard from '../MemoryPressableCard';

function MemoryCardList() {
  const {memories} = useMemoryStore();

  const renderItem: ListRenderItem<Memory> = ({item}) => (
    <MemoryPressableCard
      id={item.id}
      content={item.content}
      color={item.color}
      icon={item.icon}
      time={item.time}
      key={item.id}
    />
  );

  return (
    <FlatList
      data={memories}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      removeClippedSubviews
      windowSize={16}
      contentContainerStyle={{paddingBottom: 72}}
    />
  );
}

export default MemoryCardList;
