import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from 'components/@module';
import {View} from 'react-native';
import {MemoryCardList} from 'components/Memory';
import {WriteFloatingButton} from 'components/Write';

function HomeScreen() {
  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-beige">
      <Header title="memory" />
      <View className="flex-1 p-2">
        <MemoryCardList />
      </View>
      <WriteFloatingButton />
    </SafeAreaView>
  );
}

export default HomeScreen;
