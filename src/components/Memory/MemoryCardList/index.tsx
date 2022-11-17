import {View, Text, FlatList} from 'react-native';
import React from 'react';
import MemoryCardBase from '../MemoryCardBase';

const data = [1, 2, 3, 4, 5];

function MemoryCardList() {
  return (
    <FlatList
      data={data}
      renderItem={() => <MemoryCardBase />}
      numColumns={2}
    />
  );
}

export default MemoryCardList;
