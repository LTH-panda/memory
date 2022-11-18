import {View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

type Props = {
  isVisible: boolean;
  onBackDrop: () => void;
  children: React.ReactNode;
};

function BottomSheet({isVisible, onBackDrop, children}: Props) {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onBackDrop}
      onBackButtonPress={onBackDrop}
      backdropTransitionInTiming={200}
      backdropTransitionOutTiming={200}
      animationInTiming={200}
      animationOutTiming={200}
      useNativeDriver
      className="justify-end m-0">
      <View className="p-4 pb-8 rounded-t-2xl bg-beige">{children}</View>
    </Modal>
  );
}

export default BottomSheet;
