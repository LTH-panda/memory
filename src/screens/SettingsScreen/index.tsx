import {View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from 'components/@module';
import {SettingsVersionCell} from 'components/Settings';

function SettingsScreen() {
  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-beige">
      <Header title="settings" />
      <View className="flex-1">
        <SettingsVersionCell />
      </View>
    </SafeAreaView>
  );
}

export default SettingsScreen;
