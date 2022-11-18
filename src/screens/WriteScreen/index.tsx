import {ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from 'components/@module';
import {
  WriteActions,
  WriteColorPalette,
  WriteIconDropdown,
  WriteMemoryCardPreview,
  WriteMemoryInput,
} from 'components/Write';

function WriteScreen() {
  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-beige">
      <Header back="close" />
      <ScrollView
        className="flex-1 px-4"
        contentContainerStyle={{paddingBottom: 40}}>
        <WriteMemoryCardPreview />
        <WriteMemoryInput />
        <WriteColorPalette />
        <WriteIconDropdown />
        <WriteActions />
      </ScrollView>
    </SafeAreaView>
  );
}

export default WriteScreen;
